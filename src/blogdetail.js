import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./use";

const Blogdetails = () => {
    const {id} =useParams();
    const {data: blog, error, ispending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handelclick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
     }
    return ( 
        <div className="blog-details">
            { ispending && <div> loading.. </div>}
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <p>written by {blog.author}</p>
                    <button onClick = {handelclick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Blogdetails;