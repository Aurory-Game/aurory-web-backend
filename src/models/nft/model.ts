import {DataTypes, Model} from "sequelize";
import dbConnection from "../connection"

export interface baseNftDTO {
    id: string
    mint: string
    symbol: string
    name: string
    description: string
    image_url: string
    external_url: string
    seller_fee_basis_points: number
    attributes: {},
    category: string,
    creators: {},
    file: string,
    file_type: string
    in_use: boolean
}

export interface NftDTO
    extends Model<baseNftDTO, baseNftDTO>,
        baseNftDTO {
    createdAt?: Date;
    updatedAt?: Date;
}

const NftInstance = dbConnection.define<NftDTO>('nfts', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        mint: {
            type: DataTypes.STRING,
        },
        symbol: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        external_url: {
            type: DataTypes.STRING,
        },
        seller_fee_basis_points: {
            type: DataTypes.NUMBER,
        },
        in_use: {
            type: DataTypes.BOOLEAN
        },
        image_url: {
            type: DataTypes.STRING,
        },
        attributes: {
            type: DataTypes.JSONB,
        },
        creators: {
            type: DataTypes.JSON,
        },
        category: {
            type: DataTypes.STRING,
        },
        file: {
            type: DataTypes.STRING,
        },
        file_type: {
            type: DataTypes.STRING,
        },
    },
    {underscored: true}
)

export default NftInstance

