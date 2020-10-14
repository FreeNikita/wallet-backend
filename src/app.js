import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// graphQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphQL';

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.get('/', (req, res) => {
    res.send('ok')
})

const listen = async () => {
    try {
        await mongoose.connect(process.env.BD_HOST, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
        })
    } catch(error) {
        console.log("Error Run Project: ", error )
    }
}

listen().catch(err => {
    console.error(err.message);
    process.exit(1);
});

export default app;
