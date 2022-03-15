export interface Aurorian {
    name: string,
    symbol: "AUROR",
    description: string,
    seller_fee_basis_points: number,
    image: string,
    external_url: string,
    edition: 2021,
    attributes: [
        {
            trait_type: "Background",
            value: string
        },
        {
            trait_type: "Skin",
            value: string
        },
        {
            trait_type: "Cloth",
            value: string
        },
        {
            trait_type: "Necklace",
            value: string
        },
        {
            trait_type: "Mouth",
            value: string
        },
        {
            trait_type: "Clothing",
            value: string
        },
        {
            trait_type: "Eyes",
            value: string
        },
        {
            trait_type: "Hair",
            value: string
        },
        {
            trait_type: "Hat",
            value: string
        },
        {
            trait_type: "Type",
            value: string
        },
        {
            display_type: "number",
            trait_type: "generation",
            value: number
        },
        {
            display_type: "number",
            trait_type: " sequence",
            value: number
        }
    ],
    properties: {
        category: "image",
        files: [
            {
                uri: string,
                type: "image/png"
            }
        ],
        creators: [
            {
                address: "8Kag8CqNdCX55s4A5W4iraS71h6mv6uTHqsJbexdrrZm",
                share: 65
            },
            {
                address: "aury7LJUae7a92PBo35vVbP61GX8VbyxFKausvUtBrt",
                share: 35
            }
        ]
    }
}

interface Creator {
    address: string,
    share: number
}


export interface Attribute {
    trait_type: string,
    value: number | string
    display_type?: 'number',
}

interface file {
    uri: string,
    type: 'image/png' | 'image/gif' | 'video/mp4'
}

export interface NFT {
    id: string, // Not in the standard, added by us
    name?: string,
    mint?: string, // Not in the standard, added by us
    symbol?: string,
    description?: string,
    seller_fee_basis_points?: number,
    image?: string,
    external_url?: string,
    edition?: 2021,
    attributes?: Attribute[],
    properties?: {
        category: 'image' | 'video',
        files: file[],
        creators: Creator[]
    }
}

export enum NFTType {
    Aurorian = 'Aurorian',
    Artwork = 'Artwork',
    Nefty = 'Nefty',
    Skin = 'Skin',
    Key = 'Key',
    Egg = 'Egg',
    Land = 'Land'
}