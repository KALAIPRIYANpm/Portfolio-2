// layout.js
import './globals.css';
import { DarkModeProvider } from './components/DarkModeContext';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio styled with Funnel Display',
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
