import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from './context';
import withApp from './hoc/withApp';
import {
  Home, Biography, Wrapper, Card 
} from './pages';
import './i18n';

function App({ value }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

App.propTypes = {
  value: PropTypes.shape({}),
};

App.defaultProps = {
  value: {},
};

export default withApp(App);
