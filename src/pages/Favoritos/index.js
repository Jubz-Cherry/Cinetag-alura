import Banner from 'components/Banner';
import './Favoritos.module.css';
import Titulo from 'components/Titulo';
import styles from './Favoritos.module.css';
import capybara from './capybara - Copia.png';
import Card from '../../components/Card';


function Favoritos(){
    return(
        <>
        <Banner imagem="favoritos"/>
        <Titulo>
            <h1>Meus favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='capy' capa={capybara}/>
        </section>
        </>
    )
}

export default Favoritos;