import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";


const Create = () => {

    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title</label>
                <input type="text"
                className="form-control"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

                <label>Blog body</label>
                {/* <textarea 
                className="form-control"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} /> */}

                <TextareaAutosize 
                className="form-control"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog author</label>
                <input type="text"
                className="form-control"
                required 
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />

                { !isPending && <button className="btn btn-success">Add blog</button> }
                { isPending && <button className="btn btn-success">Loading...</button> }
            </form>
        </div>
    );
}
 
export default Create;