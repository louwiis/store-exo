import { useContext } from "react"
import { StoreContext } from "../Providers/Store"

export default function Home() {
    const { movies, setMovies } = useContext(StoreContext)

    const newMovie = () => {
        const newTitle = prompt("Enter a new title")
        const newCategory = prompt("Enter a new category")
        const newMovie = {
            id: movies.length + 1,
            title: newTitle,
            category: newCategory,
            image: 'https://dummyimage.com/640x360'
        }
        setMovies([...movies, newMovie])
    }

    return (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => newMovie()}>New Movie</button>
    )

}