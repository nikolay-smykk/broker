import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
  ru: {
    translation: {
      Headers: {
        Hello: 'Welcome to React and react-i18next',
        AboutUs: 'О Нас',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
