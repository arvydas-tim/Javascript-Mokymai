import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

if (localStorage.getItem("watchlistArray")==null) {
  localStorage.setItem("watchlistArray", "");
}
function App() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [cardsDiv, setCardsDiv] = useState(null);
  const [watchlistDiv, setwatchlistDiv] = useState(null);
  const [genre, setGenre] = useState(null);
  const [page, setPage] = useState(1);
  const [watchlist, setWatchlist] = useState(
    localStorage.getItem("watchlistArray").split(",")
  );

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDhhODVlYTdjMWQ3NTcyZTE4NDFlYjMwNWRlZTVjOSIsIm5iZiI6MTczMDI5NzM5Ny42NTA3MzY4LCJzdWIiOiI2NzIxZDk3MjE4ODI3YTkzMjlmMTZkMjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MPtvmaKH0GODNNZrT1Yif5-5SkcS0stAkWaAZDBsc9o",
    },
  };

  useEffect(() => {
    const searchRequest = (searchText) => {
      setTimeout(() => {
        if (searchText.length >= 2) {
          const url =
            "https://api.themoviedb.org/3/search/movie?query=" +
            searchText +
            "&include_adult=false&language=en-US&page=1";
          axios(url, options)
            .then((response) => {
              setMovies(response.data.results);
              setError(null);
            })
            .catch(setError);
        }
      }, 1000);
    };

    searchRequest(searchText);
    return () => clearTimeout(searchRequest);
  }, [searchText]);

  useEffect(() => {
    if (movies) {
      let moviesSliced = movies.slice(0, 10);
      let cardsHTML = moviesSliced.map((movie) => {
        return (
          <div className="card" id={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={
                "https://image.tmdb.org/t/p/w220_and_h330_face" +
                movie.poster_path
              }
              alt={movie.title + " poster"}
            />
            <p>Score:{movie.vote_average}</p>
            <p>{movie.overview}</p>
            <button
              onClick={(e) => watchLaterHandler(movie.title, e)}
              id={movie.id + "button"}
            >
              Watch later
            </button>
          </div>
        );
      });
      setCardsDiv(cardsHTML);
    }
  }, [movies]);

  useEffect(() => {
    const searchRequest = (genre) => {
      setTimeout(() => {
        const url =
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=" +
          page +
          "&sort_by=popularity.desc&with_genres=" +
          genre;
        axios(url, options)
          .then((response) => {
            setMovies(response.data.results);
            setError(null);
          })
          .catch(setError);
      }, 1000);
    };

    searchRequest(genre);
    return () => clearTimeout(searchRequest);
  }, [genre, page]);

  useEffect(() => {
    localStorage.setItem("watchlistArray", watchlist);
  }, [watchlist]);

  useEffect(() => {
    if (watchlist) {
      let titles = watchlist;
      let watchlistHTML = titles.map((title) => {
        if (title) {
          return (
            <div className="watchlist-item">
              <p>{title}</p>
              <button
                onClick={(e) => watchlistDeleteItemHandler(title)}
                className="deleteButton"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </div>
          );
        }
      });
      setwatchlistDiv(watchlistHTML);
    }
  }, [watchlist]);

  const watchlistDeleteItemHandler = (title, e) => {
    let temp = watchlist;
    console.log(temp);
    temp = temp.filter((e) => e !== title);
    setWatchlist(temp);
  };
  const watchLaterHandler = (title, e) => {
    if (watchlist) {
      setWatchlist((a) => [...a, title]);
    } else {
      setWatchlist([title]);
    }
  };

  const clearWatchlist = () => {
    localStorage.clear();
    setWatchlist([]);
  };

  return (
    <>
      <div>
        <form>
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="search"
            value={searchText}
            className="search-bar"
            placeholder="Search"
          />
          <label htmlFor="genres-select">Browse by genre:</label>
          <select
            name="genres-select"
            id="genres-select"
            onChange={(event) => setGenre(event.target.value)}
          >
            <option selected="selected" value="">
              Genres
            </option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="35">Comedy</option>
            <option value="14">Fantasy</option>
          </select>
        </form>
        <div className="main-container">
          <div className="movie-cards">{cardsDiv}</div>
          <div className="watchlist-container">
            {watchlistDiv}
            <button onClick={clearWatchlist}>Clear watchlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
