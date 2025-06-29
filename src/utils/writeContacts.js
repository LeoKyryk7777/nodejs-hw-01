import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const contact = await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
    );
    return contact;
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw error;
  }
};
