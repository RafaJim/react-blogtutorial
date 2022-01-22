import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h3>Written by { blog.author }</h3>
                    <div className="parrafo">{ blog.body }</div>
                    <button className="btn btn-danger" onClick={ handleDelete }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;