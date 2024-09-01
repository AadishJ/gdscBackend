const express = require( "express" );
const app = express();
const homeRouter = require( "./routes/HomeRoute" );
const SubmissionsRouter = require("./routes/SubmissionsRoute")
const bodyParser = require('body-parser');
const cors = require('cors');
const connectMongoDB = require( './config/connect' );
const PORT = 5000;
connectMongoDB( "mongodb://localhost:27017/gdsc" ).then( () => console.log( "MongoDB connected" ) )
app.use( express.urlencoded( { extended: false } ) );
app.use( cors() );
app.use(bodyParser.json());
app.use( express.json() );
app.use( "/", homeRouter );
app.use( "/submissions", SubmissionsRouter );
app.listen( PORT, () => console.log( "Server started" ) );