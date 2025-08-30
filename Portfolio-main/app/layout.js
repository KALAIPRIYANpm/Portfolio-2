// layout.js
import './globals.css';
import { DarkModeProvider } from './components/DarkModeContext';

export const metadata = {
  title: 'Kalaipriyan',
  description: 'A portfolio styled with Funnel Display',
  icons:"/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
