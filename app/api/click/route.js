// pages/api/click.js
import Database from 'better-sqlite3';

export async function POST(req, res) {
    const db = new Database('clicks.sqlite', { verbose: console.log });
    const stmt = db.prepare('UPDATE clicks SET count = count + 1');
    const info = stmt.run();
    db.close();
    return new Response(JSON.stringify({ count: info.changes }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function GET(req, res) {
    const db = new Database('clicks.sqlite', { verbose: console.log });
    const stmt = db.prepare('SELECT count FROM clicks');
    const count = stmt.get();
    db.close();
    return new Response(JSON.stringify(count), {
        headers: { 'Content-Type': 'application/json' },
    });
}
