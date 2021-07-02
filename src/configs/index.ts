import dotenv from 'dotenv';
dotenv.config();

export default {
    environment: process.env.NODE_ENV || 'development',
    host: {
        protocol: process.env.HOST_PROTOCOL || 'http://',
        name: process.env.HOST_NAME || 'localhost',
        port: process.env.HOST_PORT || 6969,
    },
    database: {
        username: process.env.DB_USERNAME || 'postres',
        password: process.env.DB_PASSWORD || '123456',
        url: process.env.DB_URL || 'url',
    },
};
