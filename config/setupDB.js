const Database = require('better-sqlite3');
const db = new Database('clicks.sqlite', { verbose: console.log });

const createTable = `
CREATE TABLE IF NOT EXISTS clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  count INTEGER DEFAULT 0
);`;

// Initialize with a row if not exists
db.exec(createTable);
db.prepare("INSERT INTO clicks (count) SELECT 0 WHERE NOT EXISTS (SELECT 1 FROM clicks)").run();
db.close();
