import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="navbar" style={{
        display: 'flex', 
        gap: '20px',
        padding: '10px', 
        color: 'white', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#333', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
        borderRadius: '50px', 
        marginBottom: '20px', 
        fontFamily: 'Arial, sans-serif', 
        maxWidth: 'fit-content', 
        paddingLeft: '30px', 
        paddingRight: '30px', 
        margin: 'auto'}}>
            <Link to='/' style={{color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold'}}>Home</Link>
            <Link to='/recipes' style={{color: 'white', textDecoration: 'none', fontSize: '1.1em', fontWeight: 'bold'}}>Recipes</Link>
        </nav>
     );
}

export default Navbar;