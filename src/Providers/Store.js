import { createContext, useEffect, useState } from "react";
import { getMovies } from "../Services/Movies";

export const StoreContext = createContext()

export function StoreProvider(props) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies)
        })
    }, [])

    return (
        <StoreContext.Provider value={{
            count: movies.length,
            movies: movies,
            setMovies: setMovies
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}