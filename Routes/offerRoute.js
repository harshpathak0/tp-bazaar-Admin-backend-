const express = require ("express");
const { postOffer, getOffer, updateOffer } = require("../Controller/Admin/offer");
const offerRoute = express.Router();

offerRoute.post("/createoffer", postOffer)
offerRoute.get("/viewoffer", getOffer)
offerRoute.patch("/updateoffer/:offer_id", updateOffer)

module.exports = offerRoute;