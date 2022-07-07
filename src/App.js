import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './context';
import {
  Home, Biography, Wrapper, Card 
} from './pages';

function App() {
  const [items, setItems] = useState([]);
  const [features, setFeatures] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, featuresResponse, worksResponse] = await Promise.all([
          axios.get('https://618115078bfae60017adfe03.mockapi.io/items'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/arrFeatures'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/works'),
        ]);

        setFeatures(featuresResponse.data);
        setItems(itemsResponse.data);
        setWorks(worksResponse.data);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Помилка при запиті даних :(');
        
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ items, features, works }}>
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
