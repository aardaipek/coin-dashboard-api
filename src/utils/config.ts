require("dotenv").config();

export const appConfig = {
    nodeEnv:process.env.NODE_ENV,
    port: parseInt(process.env.PORT)
}

export const PolygonConfig = {
    apiKey: process.env.POLYGON_API_KEY,
    baseUrl: process.env.POLYGON_BASE_URL,
}