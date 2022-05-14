import { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import Biography from './pages/Biography/Biography';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://618115078bfae60017adfe03.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);
  
  return (
    <AppContext.Provider value={{ items }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper />} />
                <Route path="home" element={<Home />} />
                <Route path="biography" element={<Biography />} />
            </Routes>
        </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
