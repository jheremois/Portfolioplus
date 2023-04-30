interface enviromentsTypes {
    app: {
        port: number
        secret: string
        allowOrigin: string
        message: string
        host: string
    },
    db: {
        port: number
        host: string
        database: string
        user: string
        password: string
    }
    jwt: {
        secret: string
    }
    google: {
        clientId: string
        clientSecret: string
    }
}

//import dotenv from 'dotenv'
/*
dotenv.config({
    path: './.env'
})
*/

const enviroments: enviromentsTypes = {
    app: {
        port: parseInt(process.env.APP_PORT || "0"),
        secret: process.env.CLIENT_SECRET || "",
        allowOrigin: process.env.ALLOW_ORIGIN || "",
        host: process.env.APP_HOST || "",
        message: process.env.MESSAGE || ""
    },
    db: {
        database: process.env.DB_DATABASE || "",
        host: process.env.DB_HOST || "",
        password: process.env.DB_PASSWORD || "",
        port: parseInt(process.env.DB_PORT || "0"),
        user: process.env.DB_USER || ""
    },
    jwt: {
        secret: process.env.JWT_CLIENT_SECRET || "lapara01"
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }
}

export default enviroments