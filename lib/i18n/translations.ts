import { id } from './locales/id';
import { en } from './locales/en';

// Export type for TypeScript autocomplete
export type TranslationKeys = typeof id;

// Export translations object
export const translations = {
  id,
  en,
};
