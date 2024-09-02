const express = require( "express" );
const {handleGetRequest, handlePostRequest} = require("../controllers/HomeControl")
const router = express.Router();

router
    .route( "/" )
    .post( ( req, res ) => handlePostRequest( req, res ) );


module.exports = router;