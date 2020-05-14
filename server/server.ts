import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors());

app.get('/api', async (req, res) => {
    return res.send('coucou promo 4');
});


app.listen(3015, function () {
    console.log('API listening on http://localhost:3015/api/ !');
});


