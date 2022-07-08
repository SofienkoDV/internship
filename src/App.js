import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './context';
import {
  Home, Biography, Wrapper, Card 
} from './pages';

function App() {
  const [items, setItems] = useState([]);
  const [features, setFeatures] = useState([]);
  const [works, setWorks] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, featuresResponse, worksResponse, teamResponse] = await Promise.all([
          axios.get('https://618115078bfae60017adfe03.mockapi.io/items'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/arrFeatures'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/works'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/arrTeam')
        ]);

        setFeatures(featuresResponse.data);
        setItems(itemsResponse.data);
        setWorks(worksResponse.data);
        setTeam(teamResponse.data);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Помилка при запиті даних :(');
        
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const value = useMemo(() => ({
    items,
    features,
    works,
    team,
  }), [items, features, works, team]);

  return (
    <AppContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="home" element={<Home />} />
          <Route path="biography" element={<Biography />} />
          <Route path="card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
