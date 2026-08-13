import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRouter from './routes/AppRouter';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <AppRouter />;
}

export default App;
