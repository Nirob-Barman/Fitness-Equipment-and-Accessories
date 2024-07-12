const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors());
app.use(express.json());


const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }
    // bearer token
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: true, message: 'unauthorized access' })
        }
        req.decoded = decoded;
        next();
    })
}

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xceqs5c.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const productsCollection = client.db("Fitness-Equipment-and-Accessories").collection("products");

        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            try {
                const result = await productsCollection.insertOne(newProduct);
                res.status(201).send(result);
            } catch (error) {
                res.status(500).send({ error: 'Failed to add product' });
            }
        });

        app.get('/products', async (req, res) => {
            try {
                const products = await productsCollection.find().toArray();
                res.status(200).send(products);
            } catch (error) {
                console.error('Error fetching products:', error);
                res.status(500).send({ error: 'Failed to fetch products' });
            }
        });

        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            try {
                const product = await productsCollection.findOne({ _id: new ObjectId(id) });
                if (!product) {
                    return res.status(404).send({ error: 'Product not found' });
                }
                res.status(200).send(product);
            } catch (error) {
                console.error('Error fetching product:', error);
                res.status(500).send({ error: 'Failed to fetch product' });
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Fitness equipment and accessories server is running');
})

app.listen(port, () => {
    console.log(`Fitness equipment and accessories server is listening on ${port}`);
})
