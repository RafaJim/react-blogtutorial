import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="notFound">
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            <Link to="/" >Home Page</Link>
        </div>
    );
}
 
export default PageNotFound;