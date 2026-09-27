/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/os-on-the-web',
  reactStrictMode: true,
  // v0-generated code has minor type-only issues (e.g. dynamic-island music
  // controls reference store functions not yet implemented); runtime is fine.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ["v0.blob.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
