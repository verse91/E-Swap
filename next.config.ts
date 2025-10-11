/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },

            {
                protocol: "https",
                hostname: "cdn.rareblocks.xyz",
            },
        ],
    },
};

export default nextConfig;
