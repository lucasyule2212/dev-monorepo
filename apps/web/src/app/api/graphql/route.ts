import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const POST = withApiAuthRequired(async function POST(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(req, res);

  return httpProxyMiddleware(req, res, {
    target: "http://localhost:3332/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
});

export { POST };
