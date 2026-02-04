import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './i18n/LanguageContext.tsx';
import { DarkModeProvider } from './theme/DarkModeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </DarkModeProvider>
  </StrictMode>,
);
