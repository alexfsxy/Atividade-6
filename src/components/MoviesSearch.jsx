import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components"
import MoviesTitles from "./MoviesTitles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 7rem;
`
const H2 = styled.h2`
    padding-left: 2rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 1rem;
`
const Div = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 2rem;
`
const Span = styled.span`
    font-size: 1.5rem;
`

const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

const MoviesSearch = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apikey}&query=${query}&language=pt-BR`;

        getSearchedMovies(searchWithQueryURL);
    }, [query]);

    return (
        <Container>
            <H2>Semelhantes a sua busca: <Span>{query}</Span></H2>
            <Div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MoviesTitles key={movie.id} movie={movie} />)}
            </Div>
        </Container>
    )
} 

export default MoviesSearch;
