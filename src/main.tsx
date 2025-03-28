
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n.ts'

// Wait for i18n to initialize before rendering the app
import i18n from './i18n/i18n.ts';

i18n.on('initialized', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});

// Fallback if i18n takes too long
setTimeout(() => {
  createRoot(document.getElementById("root")!).render(<App />);
}, 1000);
