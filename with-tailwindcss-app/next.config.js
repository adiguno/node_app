/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: "build",
  // async headers() {
  //   return [
  //     {
  //       source: "/events",
  //       headers: [
  //         {
  //           key: "Content-Type",
  //           value: "text/event-stream",
  //         },
  //         {
  //           key: "Cache-Control",
  //           value: "no-cache",
  //         },
  //         {
  //           key: "Connection",
  //           value: "keep-alive",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
