import * as dynamoose from "dynamoose"

if (process.env.NODE_ENV === 'production') {
    throw new Error("Production config missing for dynamoose")
} else {
    dynamoose.aws.ddb.local(process.env.AWS_ENDPOINT)
}

export default dynamoose