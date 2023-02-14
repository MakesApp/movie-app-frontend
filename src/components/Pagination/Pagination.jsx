import { Link } from "react-router-dom"
import { MOVIES_PER_PAGE } from "./moviesPerPage"
const Paginton=({totalpage,page,movielist})=>{
    return(
        <>
        <Link to={`${movielist}/${parseInt(page)-1}`}><button disabled={parseInt(page)-1 <= 0}>Previous</button></Link>
        {[...Array(Math.ceil(totalpage/MOVIES_PER_PAGE))].map((x, i) => (
            <Link key={i} style={{color: parseInt(page) -1 === i ? "red" : "blue"}} className="button" to={`${movielist}/${i+1}`}>{i+1}</Link>
        ))}
        <Link to={`${movielist}/${parseInt(page)+1}`}><button disabled={parseInt(page)+1 > Math.ceil(totalpage / 10)}>Next</button></Link>

        </>
                    

    )
}
export default Paginton