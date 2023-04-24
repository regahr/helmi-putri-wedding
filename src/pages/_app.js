import '@/styles/globals.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  }, []); 
  return <Component {...pageProps} />
}
