import { useFavoritosContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }){
    const{ favorito, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;  

    return(
        <div className={styles.container}>
            <Link className={styles.Link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img src={icone}
            alt="Favoritar filme"
            className={styles.favoritar} 
            onClick={() => {
                adicionarFavorito({id, titulo, capa})
            }}/>
        </div>
    )
}

export default Card;
