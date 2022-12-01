import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';

import MoviesScreen from './Screens/Movies';
import NewMovieScreen from './Screens/NewMovie';


function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path='/movies' element={<MoviesScreen />}></Route>
          <Route path='/movies/create' element={<NewMovieScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
  
function Navigation () {
  const { count } = useContext(StoreContext)
    
  return (
    <nav>
      <ul className="flex gap-3">
        <li className="bg-blue-500 hover:bg-blue-300 px-2"><Link to='/'>Home</Link></li>
        <li className="bg-blue-500 hover:bg-blue-300 px-2"><Link to="/movies">Tous les films</Link> </li>
        <li className="bg-blue-500 hover:bg-blue-300 px-2"><Link to="/movies/create">Créer un nouveau film</Link> </li>
      </ul>

      There is actually {count} movies
    </nav>
  )
}
  
export default App;
    