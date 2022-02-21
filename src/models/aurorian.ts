import dynamoose from '@wrappers/dynamoose'


const schema = new dynamoose.Schema({
    name: {
        hashKey: true,
        type: String
    },
    symbol: {
        type: String,
        default: "AUROR"
    },
    description: String,
    seller_fee_basis_points: Number,
    image: String,
    external_url: String,
    edition: {
        type: Number,
        default: 2021
    },

    /** Inlined attributes */
    att_Background: String,
    att_Skin: String,
    att_Cloth: String,
    att_Necklace: String,
    att_Mouth: String,
    att_Eyes: String,
    att_Hair: String,
    att_Hat: String,
    att_Type: String,
    att_generation: Number,
    att_sequence: Number,

    /** Stringified NFT's json */
    raw: String
})

export default  dynamoose.model("Aurorian", schema)