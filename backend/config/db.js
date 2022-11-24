const mongosse = require("mongoose")
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;



const conn = async () => {
    try {
        const dbConn = await mongosse.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.fwkxnnt.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Conenctou ao BD!")

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn();

module.exports = conn;
