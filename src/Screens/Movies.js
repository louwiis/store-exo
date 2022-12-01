import { useContext } from "react"
import { StoreContext } from "../Providers/Store"

export default function Home() {
    const { movies, setMovies } = useContext(StoreContext)

    // remove one movie from the list
    const removeMovie = (id) => {
        const newMovies = movies.filter((movie) => movie.id !== id)
        setMovies(newMovies)
    }

    const editMovie = (id) => {
        // prompt the user to enter a new title
        const newTitle = prompt("Enter a new title")
        // find the movie to edit
        const movieToEdit = movies.find((movie) => movie.id === id)
        // update the title
        movieToEdit.title = newTitle
        // update the list of movies
        setMovies([...movies])     
    }
    
    return (
        <div className="flex flex-wrap bg-gray-100">
            {movies.map((movie) => (
                <div className="p-4">
                    <div className="bg-white rounded shadow p-4 h-full">
                        <img className="rounded w-[640px] h-[360px] object-cover mb-6" src={movie.image} alt={movie.title} />
                        <div className="mb-6">
                            <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                            <p className="text-grey-darker text-base">{movie.category}</p>
                        </div>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeMovie(movie.id)}>Remove</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => editMovie(movie.id)}>Edit</button>
                    </div>
                </div>
            ))}

        </div>
    )

}