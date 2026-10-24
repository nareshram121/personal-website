import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kanasu's 5th birthday card game guide: a standalone page printed on the cards as nareshram121.com/kanasu5
  async rewrites() {
    return [{ source: "/kanasu5", destination: "/kanasu5/index.html" }];
  },
  // Unlisted: reachable from the printed cards, but kept out of search results (it shows children's faces and names)
  async headers() {
    return [
      { source: "/kanasu5", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" }] },
      { source: "/kanasu5/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" }] },
    ];
  },
};

export default nextConfig;
