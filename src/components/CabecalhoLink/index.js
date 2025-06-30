import { Link } from 'react';
import styles from './CabecalhoLink.module.css';

function CabecalhoLink({ url, children }){
    return(
        <Link to={url} className={styles.Link}>
            {children}
        </Link>
    )
}

export default CabecalhoLink;