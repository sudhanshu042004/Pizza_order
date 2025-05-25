import NextAuth, { AuthOptions } from "next-auth"
import Google from 'next-auth/providers/google'
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import {db} from '@/src/db/index'
import { accounts, sessions, users } from "@/src/db/schema";

const googleId = process.env.NEXT_AUTH_GOOGLE_ID;
const googleSecret = process.env.NEXT_AUTH_GOOGLE_SECRET;

if(!googleId || !googleSecret){
    throw new Error("Missing google Id or google Secret")
}

const authOptions:AuthOptions = {
    adapter: DrizzleAdapter(db,{
      usersTable : users,
      accountsTable : accounts,
      sessionsTable : sessions
    }),
    providers: [
      Google({
        clientId: googleId,
        clientSecret: googleSecret,
      }),
    ],
    session : {
        strategy : "database",
    },
  }

const authHandler = NextAuth(authOptions)

export const handlers = {
  GET: authHandler,
  POST: authHandler,
}

export { authOptions }
