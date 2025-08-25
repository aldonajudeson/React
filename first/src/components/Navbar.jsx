import {Link} from "react-router-dom"
function Navbar(){

    return(
        <>
        <h2>NAVBAR</h2>
        <Link to='/'>Home</Link><br />
        <Link to='/contact'>Contact</Link><br />
        <Link to='/counter'>Counter</Link><br />
        <Link to='/child'>Child</Link><br />
        </>
    )
}
export default Navbar