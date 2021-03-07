import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]} >
      <Header />
      <Home />
    </CategoryContext.Provider>
  );
}

export default App;
