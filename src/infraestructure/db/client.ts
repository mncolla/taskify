import Database from 'better-sqlite3';
const db = new Database(__dirname+'/clockify.db');

export default db
