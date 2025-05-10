import { createCivicAuthPlugin } from "@civic/auth/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "1f2e8224-a30c-457c-9f96-9b158bd62580"
});

export default withCivicAuth(nextConfig)