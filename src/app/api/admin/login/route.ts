import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSessionToken, setSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password || typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const normalizedUsername = username.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: { username: normalizedUsername },
    });

    // Use a generic error to avoid leaking which field was wrong.
    const invalidCredentials = () =>
      NextResponse.json({ error: "Invalid username or password" }, { status: 401 });

    if (!user) {
      return invalidCredentials();
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return invalidCredentials();
    }

    const token = await createSessionToken({
      userId: user.id,
      username: user.username,
    });
    await setSessionCookie(token);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
