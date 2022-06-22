import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './context';
import { Home, Biography, Wrapper } from './pages';

function App() {
  const [items, setItems] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, featuresResponse] = await Promise.all([
          axios.get('https://618115078bfae60017adfe03.mockapi.io/items'),
          axios.get('https://618115078bfae60017adfe03.mockapi.io/arrFeatures'),
        ]);

        setFeatures(featuresResponse.data);
        setItems(itemsResponse.data);
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
    <AppContext.Provider value={{ items, features }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="home" element={<Home />} />
          <Route path="biography" element={<Biography />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
