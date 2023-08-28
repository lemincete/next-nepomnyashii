require('dotenv').config({ path: './config/.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL
    }
}

module.exports = nextConfig
