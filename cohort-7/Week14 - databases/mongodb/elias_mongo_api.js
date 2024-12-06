const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

const router = express.Router();

app.use(express.json());

app.use("/api/v1", router);

const uri = "mongodb+srv://cclUser:superSecurePassword@colorcodedlabs.jnwokit.mongodb.net/specialDemonstrationDatabase?retryWrites=true&w=majority";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }]
});

// const postSchema = new mongoose.Schema({
//     msg: {
//         type: String,
//         required: true
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     }
// });


const Cat = mongoose.model('Cat', catSchema);
// const Post = mongoose.model('Post', postSchema);

async function connectDb() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log("Error: " + error);
        await mongoose.disconnect();
    }
}

router.post("/cat", async (req, res) => {
    const { name, color, age } = req.body;
    const cat = new Cat({
        name,
        color,
        age
    })

    await cat.save();

    res.status(201).json({ createdCat: cat });
})

// get cat by id
router.get("/cat/:id", async (req, res) => {
    const { name, color, age } = req.body;
    const cat = await Cat.findById(req.params.id);
    res.send(200).json({ cat })
})

router.put("/cat/:id", async (req, res) => {
    const { name, color, age } = req.body;
    const cat = await Cat.findById(req.params.id);

    cat.name = name;
    cat.color = color;
    cat.age = age;

    await cat.save();

    res.send(200);
})

router.delete("/cat/:id", async (req, res) => {
    const id = req.params.id

    await Cat.findByIdAndDelete(id)

    res.send(200);
})

router.get("/test", ((req, res) => { res.send(200).json({ message: "good job" }) }))

app.listen(PORT, async () => {
    await connectDb().catch(console.dir);
    console.log(`Express API started: http://localhost:${PORT}`);
});