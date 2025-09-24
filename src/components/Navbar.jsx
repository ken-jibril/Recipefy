import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="flex gap-10 my-4 py-2 px-4 text-xl bg-black shadow-xl items-center justify-between rounded-4xl max-w-fit mx-auto"> 
       
            <Link to='/' style={{color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold'}}>Home</Link>
            <Link to='/recipes' style={{color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold'}}>Recipes</Link>
        </nav>
     );
}

export default Navbar;