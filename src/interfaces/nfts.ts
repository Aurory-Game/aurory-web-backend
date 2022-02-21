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

export enum NFTType {
    Aurorian = 'Aurorian',
    Artwork = 'Artwork',
    Nefty = 'Nefty',
    Skin = 'Skin',
    Key = 'Key',
    Egg = 'Egg',
    Land = 'Land'
}

export interface NFT {
    type: NFTType
}

export interface NeftyStats extends NFT {
    hp: number,
    iniative: number,
    atk: number,
    atke: number,
    def: number,
    defe: number,
}