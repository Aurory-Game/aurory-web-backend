import {Sequelize} from "sequelize";
const DB_URL = process.env.AURORY_NET_DATABASE_URL || "postgres://root:root@localhost:5432/aurory_db"
let additionalConfig = {}
if (process.env.NODE_ENV === 'production') {
    additionalConfig = {
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}
const sequelizeConnection = new Sequelize(DB_URL, {
    logging: false,
    ...additionalConfig
})

export default sequelizeConnection