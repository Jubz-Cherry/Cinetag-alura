import { createContext } from "react";
import { useState } from 'react';
import { useContext } from 'react';


export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({ children }) {

    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritosContext.Provider 
        value={{favorito, setFavorito}}>
        {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext(){
    const{favorito, setFavorito} = useContext(FavoritosContext)

    function adicionarFavorito(novoFavorito){
        const favoritoRpetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRpetido){
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

       novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista)

    }

     return{
        favorito,
        adicionarFavorito
    }
} 
