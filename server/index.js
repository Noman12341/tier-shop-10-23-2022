const express = require('express');
// import bodyParser from 'body-parser';
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const productsRoutes = require('./routes/products');


app.use('/products', productsRoutes);
app.use('/static', express.static('assets'))

const CONNECTION_URL = 'mongodb+srv://noman12341:Noman1234@cluster0.irspub7.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    }).catch(error => {
        console.log(error.message);
    });

// mongoose.set('useFindAndModify', false);