import { Link } from 'react-router-dom';
import banner from './banner-home.png'
import styles from './Rodape.module.css';
import Rodape from "componentes/Rodape";

function Rodape() {
    return(
     <footer className={styles.rodape}>
            <h2>Assista os melhores filmes aqui!</h2>
            <Rodape to="./">
                <img src={banner} alt="Banner do cinetag"/>
            </Rodape>
            
        </footer>
    )
}

export default Rodape;