import Dexie from 'dexie';

const db = new Dexie('faceitDB');

db.version(1).stores({
    sessions: 'id'
})
db.open();

export default db;
