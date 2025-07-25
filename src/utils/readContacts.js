import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contact = JSON.parse(data);
    return contact;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw error;
  }
};
