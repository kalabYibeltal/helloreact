import { Link } from "react-router-dom";

const Pagenon = () => {
    return (
        <div className="notfount">
            <h2>Sorry</h2>
            <p>page is on of the unfounded</p>
            <Link to="/">back to where u belong!</Link>
        </div>
      );
}
 
export default Pagenon;