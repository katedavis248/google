const path = require("path");
// const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
apiRoutes.use("/api", apiRoutes);


module.exports = apiRoutes;