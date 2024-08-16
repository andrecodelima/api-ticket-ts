import sqlite3 from 'sqlite3'
import {open, Database} from 'sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export 
    async function openDb():Promise<Database<sqlite3.Database, sqlite3.Statement>>{
        return open (
            {
                filename: path.resolve(__dirname, '../persistence/database.db.js'),
                driver:sqlite3.Database
            }
        )
    }


