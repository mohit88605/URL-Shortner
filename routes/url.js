const express = require("express");
const router = express.Router();
const {handledGenerateNewShortUrl , handleGetAnalytics}  = require("../controllers/url");

router.post("/" , handledGenerateNewShortUrl);
router.get("/analytics/:shortId" ,handleGetAnalytics);

module.exports = router;
