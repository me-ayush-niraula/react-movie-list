import "./App.css";
import { Title } from "./components/Title";
import { Search } from "./components/Search";
import { Moviebanner } from "./components/Moviebanner";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);
  const [input, setInput] = useState([]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  // const [finalMovie, setMovieList] = useState([]);
  const renderMovie = async () => {
    const movieApi = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c4e6e476&s=${input}`);
    const data = await movieApi.json();
    const forMap = data.Search;
    const ayush = forMap.map((eachElement) => {
      const lol = { movieName: eachElement.Title, type: eachElement.Type, poster: eachElement.Poster, year: eachElement.Year };
      return lol;
    });
    let uuu = [...ayush];
    setMovie(uuu);
    console.log(movie);
  };

  return (
    <div className="App">
      <div className="container">
        <Title />
        <Search renderMovie={renderMovie} changeHandler={changeHandler} />

        {movie.map((eachElement) => {
          return <Moviebanner movieName={eachElement.movieName} moviePoster={eachElement.poster} movieType={eachElement.type} movieYear={eachElement.year} />;
        })}
      </div>
    </div>
  );
}

export default App;
