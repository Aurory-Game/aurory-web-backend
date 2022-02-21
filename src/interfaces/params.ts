import { PublicKey } from '@solana/web3.js'
import { Request } from 'express'
import { NFTType } from '@interfaces/nfts'

export interface TypedBody<T> extends Request {
    body: T
}

enum OrderBy {
    price = 'price',
    date = 'date',
    lastPrice = 'lastPrice',
    bid = 'bid'
}

enum OrderDir {
    asc = 'asc',
    desc = 'desc'
}

interface Filter {
    eq?: string | number
    gt?: number,
    lt?: number
}

type Filters = Record<string, Filter>

export interface FilterMPRequest {
    orderBy: OrderBy,
    orderDir: OrderDir,
    category?: NFTType,
    offset?: number,
    filters?: Filters
}


enum ReactionType {
    upvote = 'upvote',
    downvote = 'downvote'
}

export interface ReactionRequest {
    listingId: string,
    reaction: ReactionType,
    txId: string
    userPubkey?: PublicKey,
    userId?: string
}

export interface ListingRequest {
    listingId: string,
    txId: string
}