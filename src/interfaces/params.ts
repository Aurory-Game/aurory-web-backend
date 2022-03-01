import { Request } from 'express'

export type TypedBody<BodyType> = Request<{}, {}, BodyType>
export type TypedQuery<QueryType> = Request<{}, {}, {}, QueryType>

export type ReqTokens = TypedQuery<{
    name: 'aury'
}>

export type ReqNFTs = TypedQuery<{
    mint?: string,
    id?: string
}>

export interface GetNft {
    tableName: string, mint?: string, id?: string
}

export type ReqExpeditions = TypedQuery<{
    status?: 'active' | 'ended'
}>

export type ReqListings = TypedQuery<{
    page_token: string,
    [key: string]: any
}>

type Reaction = 'upvote' | 'downvote'

export type ReqReactions = TypedBody<{
    reaction: Reaction
}>

type MarketplaceEventType = 'purchase' | 'list' | 'delist'

export type ReqMarketplaceEvents = TypedBody<{
    type: MarketplaceEventType,
    listedId: string,
    txId: string 
}>