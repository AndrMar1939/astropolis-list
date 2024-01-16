import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Home, List } from './pages';
import { DEFAULT_FILTER } from './shared';

function App() {
  const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);

  return (
    <Routes>
      <Route
        element={
          <Layout
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List activeFilter={activeFilter} />} />
      </Route>
    </Routes>
  );
}

export default App;
