import netflixlogo from '../assets/Netflix-Logo.png';
import './Heading.css';

const Heading = () => {
    return (
        <>
            <div className="div-logo">
                <img src={netflixlogo} alt="logo da NetFlix" className='logo' />
            </div>
        </>
    )
}

export default Heading;
