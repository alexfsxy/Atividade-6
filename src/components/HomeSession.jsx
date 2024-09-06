import { useState, useEffect } from "react";
import styled from "styled-components"
import "./HomeSession.css"

import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import destaque from "../assets/hq720.jpg"
import MoviesTitles from "./MoviesTitles";
import Carroussel from './Carroussel';
import axios from 'axios'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`
const Destaque = styled.div`
    max-width: 100%;
    position: static;
    padding-top: 10rem;
    padding-bottom: 10rem;
    background-repeat: no-repeat;
    background: linear-gradient(90deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0) 70%), url(${destaque}) no-repeat;
    background-size: 100%;
    padding-left: 3rem;
    background-size: cover;
    @media only screen and (max-width: 1200px) {
        padding-top: 5rem;
        padding-left: 2rem; 
        padding-bottom: 5rem;
    }
    @media only screen and (max-width: 950px) {
        padding-top: 5rem;
        padding-left: 2rem; 
        padding-bottom: 5rem;
    }
    @media only screen and (max-width: 600px) {
        padding-top: 3rem;
        padding-left: 1rem; 
        padding-bottom: 3rem;   
    }

`
const ImgDestaque = styled.img`
    width: 30rem;
    height: auto;
    @media only screen and (max-width: 950px) {
        width: 18rem;    
    }
    @media only screen and (max-width: 700px) {
        width: 10rem;    
    }
`
const H2 = styled.h2`
    color: white;
    width: 50%;
    font-size: 1.2rem;
    font-weight: 600;
    @media only screen and (max-width: 950px) {
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 700px) {
        font-size: 0.8rem;    
    }
`
const DivDestaque = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 30%;
    gap: 0.8rem;
`
const ButtonAssistir = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 30%;
    @media only screen and (max-width: 950px) {
        font-size: 0.9rem;
        width: 20rem;
    }
    @media only screen and (max-width: 700px) {
        font-size: 0.7rem;    
    }

`
const ButtonMaisInformacoes = styled.button`
    color: white;
    background-color: rgba(94, 93, 93, 0.5);
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    width: 60%;
    @media only screen and (max-width: 950px) {
        font-size: 0.9rem;
        width: 40rem;
    }
    @media only screen and (max-width: 700px) {
        font-size: 0.7rem; 
        width: 30rem;   
    }
`
const H3 = styled.h3`
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 6rem;
    @media only screen and (max-width: 700px) {
        text-align: center;
        margin-left: 0;
    }
`

const HomeSession = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    const [animationMovies, setAnimationMovies] = useState([]);

    const getMovies = async (topurl, nowurl, popurl, animationurl) => {
        const topres = await fetch(topurl);
        const topdata = await topres.json();
        setTopMovies(topdata.results);

        const nowres = await fetch(nowurl);
        const nowdata = await nowres.json();
        setNowMovies(nowdata.results);

        const popres = await fetch(popurl);
        const popdata = await popres.json();
        setPopularMovies(popdata.results);

        

        const animationres = await fetch(animationurl);
        const animationdata = await animationres.json();
        setAnimationMovies(animationdata.results);
    }
    useEffect(() => {
        document.body.style.background = `#141414`;
        const search = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=66454b59bba5c852cc6095ba5746725e&language=pt-BR&page=1`)
                setTopMovies(response.data.results)
            } catch (error) {
                alert(error)
                return
            }
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=66454b59bba5c852cc6095ba5746725e&language=pt-BR&page=2`)
                setNowMovies(response.data.results)
            } catch (error) {
                alert(error)
                return
            }
        }
            const movies = async () => {
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=66454b59bba5c852cc6095ba5746725e&language=pt-BR&page=1`)
                    setPopularMovies(response.data.results)
                } catch (error) {
                    alert(error)
                    return
                }
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=66454b59bba5c852cc6095ba5746725e&language=pt-BR&page=1`)
                    setAnimationMovies(response.data.results)
                } catch (error) {
                    alert(error)
                    return
                }
        }
        search();
        movies();
    }, []);
 return(
        <Container id="home">
            <Destaque id="destaque">
                <H2>Um Tira da Pesada 4</H2>
                <p> 2024 | 16 | 1h 57min | Ação </p>
                <p>Não recomendado para menos de 16 anos.</p>
                <H2>Quarenta anos depois de seu primeiro caso em Beverly Hills,
                 o policial Axel Foley estrelado por Eddie Murphy está de volta para fazer aquilo que ele mais ama:
                resolver crimes. E causar, óbvio.
                </H2>
                <p>Estrelando: Eddie Murphy, Joseph Gordon-Levitt, Taylour Paige.</p>
                <p>Direção: Mark Molloy</p>
                <p>Roteiro: Tom Gormican, Will Beall</p>
                <p>Título original Beverl hills Cop: Axel Foley</p> 
                
                <DivDestaque>
                    <ButtonAssistir><FaPlay className='play' /><strong>Assistir</strong></ButtonAssistir>
                    <ButtonMaisInformacoes><IoIosInformationCircleOutline className='info' /><strong>Mais Informações</strong></ButtonMaisInformacoes>
                </DivDestaque>
            </Destaque>
            
 <H3>Melhores Avaliados</H3>
<Carroussel movies={nowMovies} />
<H3>Em Cartaz</H3>
<Carroussel movies={topMovies} />
<H3>Mais populares</H3>
<Carroussel movies={popularMovies} />

<H3>Filmes de Animação</H3>
<Carroussel movies={animationMovies} />
</Container>
         )
                }
export default HomeSession;
