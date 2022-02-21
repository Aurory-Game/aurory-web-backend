import AWS from 'aws-sdk'

export async function listTables(dynamodb: AWS.DynamoDB) {
    const tables = await dynamodb.listTables().promise()
    return tables
}