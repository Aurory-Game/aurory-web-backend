import AWS from 'aws-sdk'

AWS.config.update({
    region: process.env.AWS_REGION
})

export { AWS }

export function getDynamoDB(local: boolean = true): AWS.DynamoDB {
    return local ? new AWS.DynamoDB({ endpoint: process.env.AWS_ENDPOINT }) : new AWS.DynamoDB()
}
