import { dynamoDBClient } from '@wrappers/aws'
import { QueryCommand } from '@aws-sdk/client-dynamodb'

import { GetNft } from '@interfaces/params'
import { NFT } from '@interfaces/nfts'


export async function getNft({tableName, id, mint}: GetNft): Promise<NFT> {


    const queryParams = {
        TableName: tableName,
        ProjectionExpression: 'id, raw_nft',
        KeyConditionExpression: "#key = :v"
    }

    if (mint) {
        queryParams['IndexName'] = 'mint-index'
        queryParams['ExpressionAttributeValues'] = { ':v': { S: mint } }
        queryParams['ExpressionAttributeNames'] = { '#key': 'mint' }
    } else if (id) {
        queryParams['ExpressionAttributeValues'] = { ':v': { S: id } }
        queryParams['ExpressionAttributeNames'] = { '#key': 'id' }
    }
    else throw new Error('')


    const getItemcmd = new QueryCommand(queryParams)
    const result = await dynamoDBClient.send(getItemcmd)

    const nft = JSON.parse(result.Items[0]['raw_nft'].S)
    return {id, ...nft}
}