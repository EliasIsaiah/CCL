const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = require("./routes/user-router");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(userRouter);

// creating a user
app.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, hashedPassword });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log("error:" + error);
    res.status(400).send(error);
  }
});

const uri =
  "mongodb+srv://admin:secure_password123@cluster0.bsogqpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
    console.log("error: " + error);
  }
}

app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Express API at: localhost:${PORT}`);
});
