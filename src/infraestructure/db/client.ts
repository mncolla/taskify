import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from 'better-sqlite3';
const sqlite = new Database(__dirname+'/clockify.db');

export const db = drizzle(sqlite);