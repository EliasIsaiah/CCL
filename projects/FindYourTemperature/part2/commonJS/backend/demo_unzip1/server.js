const dotenv = require("dotenv");
const app = require("./app.js");

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});