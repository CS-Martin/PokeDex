/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'assets.pokemon.com',
            },
        ] 
    }
};

export default nextConfig;