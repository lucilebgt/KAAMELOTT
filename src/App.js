import './index.scss';
import { useState, useEffect } from 'react';
import logo from './Kaamelott_Logo.png';
function App() {
  const [quote, setQuote] = useState(null)

  async function getQuote() {

    try {

      const response = await fetch('https://kaamelott.reiter.tf/quote/random');

      const data = await response.json();
      setQuote(data);

    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    console.log('Le useEffect est appelee');
    getQuote();
  }, [])
  return (
    <section className="widget">
      <img src={logo} className='logo' alt="logo de Kaamelott" />
      <button onClick={getQuote} type="button" className="button">Nouvelle citation</button>
      <p className="widget-content">{quote?.citation}</p>
      <p className="widget-content cite">{quote?.infos?.personnage} - {quote?.infos?.episode} - {quote?.infos?.saison}</p>
    </section>
  );
}

export default App;
