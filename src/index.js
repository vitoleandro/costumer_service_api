const express    = require('express');
const mongoose   = require('mongoose');
const cors       = require('cors');
const bodyParser = require('body-parser');

// mongodb+srv://<username>:<password>@cluster0-svcab.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://fisioteravida:fisioteravida@cluster0-svcab.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('./routes/v1.js'));

app.listen(3333);