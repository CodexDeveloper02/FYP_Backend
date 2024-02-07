import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import AdminRouter from './routers/AdminRouter';
import FeedbackRouter from './routers/FeedbackRouter';
import MRIRouter from './routers/MRIRouter';
import ResultRouter from './routers/ResultRouter';
import UserRouter from './routers/UserRouter';

try {
    await mongoose.connect('mongodb://localhost:27017/neuroai', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connection succesful')
} catch (e) {
    console.log(e)
    console.log('Not connected')
}

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/feedback", FeedbackRouter);
app.use("/mri", MRIRouter);
app.use("/result", ResultRouter);

app.get('/', (req, res) => {
    res.json({ 
        status: 200,
        message: 'Response from server'
    });
});

app.get('/collection', async (req, res) => {
    const collections = await mongoose.connection.db.collections();
    const collectionNames = collections.map(collection => collection.collectionName);
    res.send(collectionNames);
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
