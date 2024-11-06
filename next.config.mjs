/** @type {import('next').NextConfig} */


const nextConfig = {
    output: "export",
    trailingSlash:true,
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js'
    },
};

export default nextConfig;
