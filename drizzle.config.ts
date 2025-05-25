import 'dotenv/config';
import { defineConfig } from "drizzle-kit"

const dbUrl = process.env.DATABASE_URL;
if(!dbUrl){
    throw new Error("database url is missing");
}

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: dbUrl,
    },
})
