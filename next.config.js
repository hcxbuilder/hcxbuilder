/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    distDir: 'out',
    basePath: "/hcxbuilder",
}

module.exports = nextConfig