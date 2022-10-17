import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('PUT to the database');
const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({ id: 1, jateContent: content })
const result = await request;
console.log('🚀 - data saved to the database', result);
};


// Add logic for a method that gets all the content from the database
export const getDb = async () => { 
  // console.error('getDb not implemented');
  console.log('GET from the databases');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  // Slack helped
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  // Slack helped
  return result?. value
};
initdb();
