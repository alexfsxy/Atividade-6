import tradutor from '../assets/tradutor.png';
import './FooterForm.css';

const FooterForm = () => {
    return (
        <footer>
            <p>Dúvidas? Ligue para <a href="#" className='a'>0800 591 2876</a></p>
            <div id='linksRodape'>
                <div className='links'>
                    <a href="#" className='a'>Perguntas frequentes</a>
                    <a href="#" className='a'>Relações com investidores</a>
                    <a href="#" className='a'>Formas de assistir</a>
                    <a href="#" className='a'>Informações corporativas</a>
                    <a href="#" className='a'>Só na Netflix</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Central de Ajuda</a>
                    <a href="#" className='a'>Carreiras</a>
                    <a href="#" className='a'>Termos de Uso</a>
                    <a href="#" className='a'>Entre em contato</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Conta</a>
                    <a href="#" className='a'>Resgatar cartão pré-pago</a>
                    <a href="#" className='a'>Privacidade</a>
                    <a href="#" className='a'>Teste de velocidade</a>
                </div>
                <div className='links'>
                    <a href="#" className='a'>Media Center</a>
                    <a href="#" className='a'>Comprar cartão pré-pago</a>
                    <a href="#" className='a'>Preferências de cookies</a>
                    <a href="#" className='a'>Avisos legais</a>
                </div>
            </div>
            <div id='select'>
                <img src={tradutor} alt="" id='imagem' />
                <select name="language" id="language">
                    <option value="Português">Português</option>
                    <option value="English">English</option>
                </select>
            </div>
            <p>Netflix Brasil</p>
        </footer>
    )
}

export default FooterForm;
