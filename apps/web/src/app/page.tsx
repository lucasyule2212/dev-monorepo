import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function handleAuth(req, res) {
  const session = await getSession(req, res);

  if (!session) {
    redirect("/api/auth/login");
  } else {
    redirect("/home");
  }
}

export default async function Page(req: NextRequest, res: NextResponse) {
  await handleAuth(req, res);

  return <main>Coletando dados...</main>;
}
