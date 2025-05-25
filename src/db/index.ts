import {drizzle} from 'drizzle-orm/postgres-js'
import postgres from "postgres"

declare global {
    var myDbInstance :ReturnType<typeof drizzle> | undefined;
}

const dbUrl = process.env.DATABASE_URL;

if(!dbUrl){
    throw new Error('Missing DATABASE_URL');
}

const client =postgres(dbUrl,{max :1});
export const db = global.myDbInstance ?? drizzle(client);

if(!global.myDbInstance){
    global.myDbInstance = db;
}
