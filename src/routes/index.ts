import express from 'express'
const router = express.Router()

import { errorLog } from '@utils/log'
import { ReqNFTs } from '@interfaces/params'
import { 
    PRECISION, OPEN_STAKING_V1_REWARD_PHASES, 
    LOCKED_STAKING_REWARD_START_TS, LOCKED_STAKING_REWARD_PER_HOUR,
    OPEN_STAKING_V1_AURY_VAULT_TA, LOCKED_STAKING_V1_AURY_VAULT_TA
} from '@config/constants'
import { NFT } from '@interfaces/nfts'
import { provider } from '@wrappers/blockchain'
import { PublicKey } from '@solana/web3.js'
import BigNumber from 'bignumber.js'
import { getNftFromID, getNftFromMint } from '@models/nft/methods'

/**
 * Get nft's metadata by it's name or mint
 */
 router.get('/nfts', async ( req: ReqNFTs, res ) => {
    try {
        const { mint, id } = req.query
        let nft: NFT;
        if (mint) {
            nft = await getNftFromMint(mint)
        } else {
            nft = await getNftFromID(id)
        }
 
        return res.json({nft})
    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})




/** Programs related */

/** Staking */

/**
 * Returns:
 * - staked: Total aury staked
 * - apr: est. APR
 * - reward: reward per hour
 */
router.get('/programs/open-staking-v1', async ( req, res ) => {
    try {
        const result = await provider.connection.getTokenAccountBalance(
            new PublicKey(OPEN_STAKING_V1_AURY_VAULT_TA)
        )

        const distributedTotal = OPEN_STAKING_V1_REWARD_PHASES.reduce(
            (totalRewards, [epoch, hourlyRewards], i) => {
                const nextPhase = OPEN_STAKING_V1_REWARD_PHASES[i + 1]
                const nextEpoch = nextPhase ? nextPhase[0] : Date.now() / 1000
                const rewards = new BigNumber(
                Math.floor(((nextEpoch - epoch) / 60 / 60) * hourlyRewards)
                )
                return totalRewards.plus(rewards)
            },
            new BigNumber(0)
        )

      
        const stakedAmount = new BigNumber(result.value.amount).div(PRECISION)
        const estApr = new BigNumber(OPEN_STAKING_V1_REWARD_PHASES[OPEN_STAKING_V1_REWARD_PHASES.length - 1]![1] * 24 * 365)
            .div(stakedAmount.minus(distributedTotal))
            .times(new BigNumber(100))
        
        return res.json({OPEN_STAKING_V1_REWARD_PHASES, stakedAmount, estApr})
    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Returns:
 * - staked: Total aury staked
 * - apr: est. APR
 * - reward: reward per hour
 * - lockEndDate: lock end date
 */
router.get('/programs/locked-staking-v1', async ( req, res ) => {
    try {
        const result = await provider.connection.getTokenAccountBalance(
            new PublicKey(LOCKED_STAKING_V1_AURY_VAULT_TA)
        )

        const stakedAmount = new BigNumber(result.value.amount).div(PRECISION)

        const rewardDistributed = new BigNumber(
        Math.floor(((Date.now() / 1000 - LOCKED_STAKING_REWARD_START_TS) / 60 / 60) * LOCKED_STAKING_REWARD_PER_HOUR)
        )
        const estApr = new BigNumber(LOCKED_STAKING_REWARD_PER_HOUR * 24 * 365)
            .div(stakedAmount.minus(rewardDistributed))
            .times(new BigNumber(100))
        
        return res.json({LOCKED_STAKING_REWARD_START_TS, LOCKED_STAKING_REWARD_PER_HOUR, stakedAmount, estApr})
    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

export default router