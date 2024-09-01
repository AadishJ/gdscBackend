const express = require( "express" );
const {handleGetRequest, handlePostRequest} = require("../controllers/HomeControl")
const router = express.Router();

router
    .route( "/" )
    .get( ( req, res ) => handleGetRequest( req, res ) )
    .post( ( req, res ) => handlePostRequest( req, res ) );


module.exports = router;