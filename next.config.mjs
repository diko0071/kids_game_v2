/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
};

export default nextConfig;
