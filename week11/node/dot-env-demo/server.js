require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;
const S3_BUCKET = process.env.S3_BUCKET;

console.log(`SECRET_KEY retrieved: ${SECRET_KEY}`);
// fetch("<your api endpoint>{apiKey}")
console.log(`S3_BUCKET retrieved: ${S3_BUCKET}`);