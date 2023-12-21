/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
                pathname: `/${process.env.CLOUDINARY_CLOUD_NAME}/**`
            }
        ]
    }
};

module.exports = nextConfig;
