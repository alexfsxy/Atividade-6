import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from 'react';
import MovieCard from "./MoviesTitles";
import './Carroussel.css';

const Carroussel = ({ movies }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);


    return <div className='carroussel'>
        <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            itemsToShow={8}
            itemsToScroll={1}
            forwardBtnProps={{
                className: "navigate",
                children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
                className: "navigate",
                children: <span>{`<`}</span>,
            }}
            responsiveProps={[
                { minWidth: 1200, maxWidth: 1400, itemsToShow: 6 },
                { minWidth: 900, maxWidth: 1200, itemsToShow: 4 },
                { minWidth: 700, maxWidth: 900, itemsToShow: 3 },
                { maxWidth: 700, itemsToShow: 1 }
            ]}
            speed={400}
            easing="linear"
            className="carrossel"
        >
            {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </ReactSimplyCarousel>
    </div>
}

export default Carroussel;
