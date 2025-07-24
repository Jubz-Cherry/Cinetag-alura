import styles from './Player.module.css';
import Banner from '../../components/Banner';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import videos from 'json/db.json';

function Player() {
  const parametros = useParams();
  const video = videos.find((video) => video.id === Number(parametros.id));

  // Se o vídeo ainda não foi encontrado, retorna só a estrutura segura
  if (!video) {
    return (
      <>
        <Banner imagem="player" />
        <Titulo>
          <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
          <p>Vídeo não encontrado.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <h2>{video.titulo}</h2>
    <iframe width="100%" height="100%" 
    src={video.link} 
    title={video.titulo} 
    frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>
    </>
  );
}

export default Player;
