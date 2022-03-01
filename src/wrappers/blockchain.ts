import {Program, Provider, Idl} from '@project-serum/anchor'
import { Connection, Signer, PublicKey } from '@solana/web3.js'
import { loadJson } from '@utils/file'
import { OPEN_STAKING_V1_PID, LOCKED_STAKING_V1_PID, AURORIANS_ON_EXPEDITION_PID } from '@config/constants'


const connection = new Connection(process.env.RPC_ENDPOINT, 'recent')

// const fee_payer = loadWallet(process.env.FEE_PAYER_KEY_PATH)
// const wallet = new Wallet(fee_payer)

export const provider = new Provider(connection, null, {
    commitment: 'confirmed'
})


const openStakingV1Idl = loadJson('./deps/flexible-staking.json')
const lockedStakingV1Idl = loadJson('./deps/locked-staking.json')
const auroriansOnExpeditionIdl = loadJson('./deps/aurorians-on-expedition.json')

export const openStakingV1Program = new Program(
    openStakingV1Idl, OPEN_STAKING_V1_PID, provider
)
export const lockedStakingV1Program = new Program(
    lockedStakingV1Idl, LOCKED_STAKING_V1_PID, provider
)
export const auroriansOnExpeditionProgram = new Program(
    auroriansOnExpeditionIdl, AURORIANS_ON_EXPEDITION_PID, provider
)


export function getConnection(): Connection {
    return connection
}

export function getProgram(programId: PublicKey, idl: Idl) {
    new Program(
        idl, programId, provider
    )
}