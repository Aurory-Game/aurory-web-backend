import express from 'express'
const router = express.Router()

import { errorLog } from '@utils/log'
import { TypedBody, FilterMPRequest, ReactionRequest, ListingRequest } from '@interfaces/params'

/**
 * Returns:
 * - mc: market cap
 * - fdv: FDV
 * - cs: circulating supply
 * - ms: max supply
 */
router.get('/token/aury', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Get aurorian's metadata by it's name
 */
 router.get('/nft/aurorian/name/:name', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Get an aurorian's metadata by it's mint address
 */
 router.get('/nft/aurorian/mint/:mint', async ( req, res ) => {
    try {

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
router.get('/program/open-v1/info', async ( req, res ) => {
    try {

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
router.get('/program/locked-v1/info', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})


/** Aurorians on expedition */

/**
 * Returns:
 * - totalSquads: total squads currently on expedition
 * - totalNfts: total number of aurorians on expedition
 * - totalRewards: total number of nfts rewarded up to date
 */
router.get('/program/aoe/expeditions/info', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Returns squads currently on expedition from pubkey
 */
router.get('/program/aoe/expeditions/key/:pubkey/active', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Returns pubkey's expedition history
 */
router.get('/program/aoe/expeditions/key/:pubkey/history', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})


/** Marketplace */

/**
 * Returns last sales
 */
 router.get('/program/mp/last-sales', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Returns community favourties
 */
router.get('/program/mp/favourites', async ( req, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Returns search results
 */
router.post('/program/mp/search', async ( req: TypedBody<FilterMPRequest>, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * Upvote / Downvote a deal
 */
router.post('/program/mp/vote', async ( req: TypedBody<ReactionRequest>, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/** Front-end event notifications */

/**
 * An item has been bought
 */
router.post('/event/mp/event/buy', async ( req: TypedBody<ListingRequest>, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * An item was listed
 */
router.post('/event/mp/list', async ( req: TypedBody<ListingRequest>, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

/**
 * An item was unlisted
 */
router.post('/event/mp/unlist', async ( req: TypedBody<ListingRequest>, res ) => {
    try {

    } catch ( e ) {
        errorLog(e)
        res.sendStatus(400)
    }
})

export default router