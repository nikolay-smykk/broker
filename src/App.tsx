import './App.less';
import { useTranslation } from 'react-i18next';
import { Shared } from './shared';

const App = () => {
  const { t } = useTranslation();
  return <Shared.Layout>{t('Headers.Hello')}</Shared.Layout>;
};

export default App;
