/**
 * Create an admin user in the database.
 *
 * Usage:
 *   npm run create-user
 *
 * You can also pass flags to skip interactive prompts:
 *   npx tsx scripts/create-user.ts --username george
 *
 * The script will always prompt for a password securely (hidden input).
 */
import { createInterface } from "readline";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
require("dotenv").config();

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";

// ── Prisma setup ─────────────────────────────────────────────────────────────
const pool = new Pool({ connectionString: process.env.DATABASE_URL?.trim() });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ── CLI helpers ───────────────────────────────────────────────────────────────
const rl = createInterface({ input: process.stdin, output: process.stdout });

function prompt(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

function promptPassword(question: string): Promise<string> {
  return new Promise((resolve) => {
    process.stdout.write(question);
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    let password = "";
    const onData = (char: string) => {
      if (char === "\u0003") {
        process.stdout.write("\n");
        stdin.setRawMode(false);
        stdin.removeListener("data", onData);
        process.exit(1);
      } else if (char === "\r" || char === "\n") {
        process.stdout.write("\n");
        stdin.setRawMode(false);
        stdin.removeListener("data", onData);
        resolve(password);
      } else if (char === "\u007f") {
        if (password.length > 0) {
          password = password.slice(0, -1);
          process.stdout.write("\b \b");
        }
      } else {
        password += char;
        process.stdout.write("*");
      }
    };

    stdin.on("data", onData);
  });
}

function cleanupStdin() {
  try {
    if (process.stdin.isTTY) process.stdin.setRawMode(false);
  } catch {
    /* ignore */
  }
  process.stdin.pause();
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--") && args[i + 1] && !args[i + 1].startsWith("--")) {
      result[args[i].slice(2)] = args[i + 1];
      i++;
    }
  }
  return result;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const flags = parseArgs();

  console.log("\n🔐  Corbin Admin User Creation Script\n");

  // Username
  const username = (flags.username ?? (await prompt("Username: "))).toLowerCase().trim();
  if (!username || username.length < 3) {
    console.error("❌  Username must be at least 3 characters.");
    process.exit(1);
  }
  if (!/^[a-z0-9_.-]+$/.test(username)) {
    console.error("❌  Username may only contain letters, numbers, underscores, hyphens, and dots.");
    process.exit(1);
  }

  // Check for duplicate username
  const existingByUsername = await prisma.user.findUnique({ where: { username } });
  if (existingByUsername) {
    console.error(`❌  A user with username "${username}" already exists.`);
    process.exit(1);
  }

  // Password
  rl.close();
  const password = await promptPassword("Password: ");
  const confirm = await promptPassword("Confirm password: ");
  cleanupStdin();

  if (password !== confirm) {
    console.error("❌  Passwords do not match.");
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("❌  Password must be at least 8 characters.");
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { username, password: hashedPassword },
  });

  console.log(`\n✅  User created successfully!`);
  console.log(`    ID:       ${user.id}`);
  console.log(`    Username: ${user.username}\n`);
}

main()
  .catch((err) => {
    console.error("❌  Error:", err.message ?? err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
    process.exit(process.exitCode ?? 0);
  });
