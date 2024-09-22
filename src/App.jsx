import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/MovieList/TvDetails";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
         
        </Route>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/tv/:id" element={<TvDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
