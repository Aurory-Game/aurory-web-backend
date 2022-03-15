import {Op} from "sequelize";
import NftInstance, {baseNftDTO, NftDTO} from "./model";
import { v4 as uuidv4 } from 'uuid';
import { Attribute, NFT } from '@interfaces/nfts'

export async function getNftFromMint(mint: string): Promise<NFT> {
    let dto = await NftInstance.findOne({where: {mint: mint}})
    return dtoToNFT(dto)
}

export async function getNftFromID(id: string): Promise<NFT> {
    let dto = await NftInstance.findOne({where: {id: id}})
    return dtoToNFT(dto)
}

export async function getNftFromAttributes(filters: {}, limit: number, from?: string): Promise<NFT[]> {
    let queryFilters = {}

    for (let property in filters) {
        queryFilters["attributes."+property] = {[Op.eq]: filters[property]}
    }

    if (from) {
        // @ts-ignore
        queryFilters["created_at"] = {[Op.gt]: from}
    }

    let dtos = await NftInstance.findAll(
        {
            limit: limit,
            where: queryFilters,
            order: [['created_at', 'asc']]
        }
    )

    let results : NFT[] = [];
    for (let dto of dtos) {
        results.push(dtoToNFT(dto))
    }

    return results
}

export async function saveNFT(toSave : NFT) : Promise<string>{
    let dto = await nftToDTO(toSave, toSave.mint)
    await NftInstance.create(dto)
    return dto.id
}

export function dtoToNFT(dto: NftDTO): NFT {
    let nftAttributes = dtoAttributesToNftAttributes(dto.attributes)
    return {
        description: dto.description,
        edition: 2021,
        external_url: dto.external_url,
        id: dto.id,
        image: dto.image_url,
        mint: dto.mint,
        name: dto.name,
        attributes: nftAttributes,
        properties: {
            // @ts-ignore
            category: dto.category,
            // @ts-ignore
            creators: dto.creators,
            files: [{
                uri: dto.file,
                // @ts-ignore
                type: dto.file_type
            }]
        },
        seller_fee_basis_points: 0,
        symbol: dto.symbol,
        created_at: dto.createdAt,
        updated_at: dto.updatedAt
    }
}

export function nftToDTO(nft: NFT, mint?: string): baseNftDTO {
    return {
        category: nft.properties.category,
        creators: nft.properties.creators,
        description: nft.description,
        external_url: nft.external_url,
        file: nft.properties.files[0].uri,
        file_type: nft.properties.files[0].type,
        name: nft.name,
        seller_fee_basis_points: nft.seller_fee_basis_points,
        symbol: nft.symbol,
        id: uuidv4().toString(),
        mint: mint,
        in_use: false,
        image_url: nft.image,
        attributes: flattenAttributes(nft.attributes)
    }
}

function flattenAttributes(attributes: Attribute[]): object {
    if (!attributes) {
        return {}
    }

    let attr =  attributes.map((a) => {
        let f = {}
        f[a.trait_type] = a.value;
        if (a.display_type) {
            f["display_type"] = a.display_type
        }

        return f
    })
    return Object.assign({}, ...attr)
}

function dtoAttributesToNftAttributes(attributes: {}): Attribute[] {
    let nftAttributes: Attribute[] = []
    for (let attribute in attributes) {
        let a: Attribute = {
                trait_type: attribute,
                value: attributes[attribute]
        }
        if (attributes[attribute]?.display_type) {
            a.display_type = attributes[attribute].display_type
        }

        nftAttributes.push(a)
    }

    return nftAttributes
}