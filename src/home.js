// import { useState,useEffect} from 'react'
import Bloglist from './bloglist'
import useFetch from './use'



const Home = () => {
    // let name = "kalab";
    
    const {data: blogs, ispending, error} = useFetch('http://localhost:8000/blogs/')
    // const [age, setage] = useState(15)
    // const handleDelete= (id) =>{
    //     const newBlogs= blogs.filter(blog => blog.id  !== id)
    //     setblogs(newBlogs)
    // }
    
    //  [age])
    // const handleclicker = (e) => {
        // setName("tebush")
    // }
    // const handleclicker2 = (name, e) => { 
    //     // name="tebush";
    // }
    return ( 
    <div className="Home">
        {error &&  <p>{error}</p>}
        {ispending && <p> loading..</p>}
        {blogs && <Bloglist blogs={blogs} title={"my blogs"} /> }
        {/* <Bloglist blogs={blogs.filter((blog) => blog.author=== "mario")} title={"mario's blogs"} handleDelete={handleDelete}/> */}
        {/* <button onClick={() => setage(age+1)}> agger changer</button> */}
        {/* <p>{ age}</p> */}
        {/* <p>{ name}</p> */}
        {/* <button onClick={handleclicker}>clicker</button> */}
        {/* <button onClick={(e) =>handleclicker2("mario",e)}>clickerlegend</button> */}
    </div> );
}
 
export default Home;