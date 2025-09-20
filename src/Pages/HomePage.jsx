function HomePage() {
    return ( 
        <>
        <h1>Recipefy🥧</h1>
        <div className="search" style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px',
            marginTop: '20px'
        }}>
            <input type="search" placeholder="Chicken fry" required style={{
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
                width: '300px',
                fontSize: '1em',
                border: 'none',
                outline: 'none', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}/>
            <button type="submit" style={{
                padding: '10px 20px', 
                borderRadius: '5px', 
                border: 'none',
                backgroundColor: '#92FF32', 
                color: 'black', 
                fontSize: '1em', 
                cursor: 'pointer'
            }}>SEARCH</button>
        </div>
        </>

    );
}

export default HomePage;