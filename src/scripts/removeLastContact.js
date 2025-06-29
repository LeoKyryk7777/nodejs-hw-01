import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.lentgth === 0) {
      console.log('Немає контактів для видалення');
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log('Останній контакт видалено');
  } catch (error) {
    console.error(' Помилка при видаленні контакту:', error);
  }
};

removeLastContact();
