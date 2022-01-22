import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <Link to={ `/blogs/${blog.id}` } >
                    <div class="card" key={blog.id}>
                        <div class="card-body">
                            <h5 class="card-title">{blog.title}</h5>
                        </div>
                    </div> 
                </Link>
            ))}
        </div>
    );
}
 
export default BlogList;