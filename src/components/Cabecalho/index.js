import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"/>
            </Link>
                <h2>Desenvolvido por Alura.</h2> 
                <p/>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <p/>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav> 
            
        </header>
    )
}


export default Cabecalho; 