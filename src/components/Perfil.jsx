import Imgperfil1 from '../assets/img-perfil-1.png';
import Imgperfil2 from '../assets/img-perfil-2.png';
import Imgperfil3 from '../assets/img-perfil-3.png';

import './Perfil.css';
import { Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

const Perfil = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.body.style.background = `#141414`;
    }, []);

    function handlePerfil(string) {

        localStorage.setItem('perfil', string);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to='/' />;
    }
    return (
        <div id='perfil'>
            <h1>Quem está assistindo?</h1>
            <div id='usuario'>
                <div className='usuario' onClick={() => handlePerfil(3)}>
                    <img src={Imgperfil3} className='usuarioImagem' />
                    <p>SEIYA</p>
                </div>
                
                <div className='usuario' onClick={() => handlePerfil(1)}>
                    <img src={Imgperfil1} className='usuarioImagem' />
                    <p>JOHN</p>
                </div>
                <div className='usuario' onClick={() => handlePerfil(2)}>
                    <img src={Imgperfil2} className='usuarioImagem' />
                    <p>GOKU</p>
                </div>
            </div>
            <button type='button' id='gerenciarPerfil'>Gerenciar perfil</button>
        </div>
    );
};

export default Perfil;
