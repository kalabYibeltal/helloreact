import { useState } from "react";
import { useHistory } from "react-router-dom";






const Create = () => {
    const [title, settitle]= useState();
    const [body, setbody]= useState();
    const [author, setauthor]= useState('mario');
    const [ispending, setpending] = useState(false)
    const previouspage = useHistory();

   



    
    const handlesub =(e) =>{
      e.preventDefault();  
      const blog={title, body,author};
      setpending(true)
     fetch('http://localhost:8000/blogs/', {
         method:'POST',
         headers: {"Content-Type":"application/json"},
         body: JSON.stringify(blog) 
     }).then(() => {
        console.log('new blog added')
        setpending(false)
        //previouspage.go(-1);
        previouspage.push('/')
        })
    }
    return (  
        
        <div className="create"> 
            <h2>Add a new blog</h2>
            <form onSubmit={handlesub}>
                <label> blog title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> settitle(e.target.value) }
                />
                <label> blog body</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setbody(e.target.value) }
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setauthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!ispending && <button>Add Blog</button>}
                {ispending && <button disabled>Adding blog...</button>}
    
            </form>
        </div>
    );
}
 
export default Create;