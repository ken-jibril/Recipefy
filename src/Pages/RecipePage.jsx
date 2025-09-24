

function RecipePage() {
    return ( 
        <>
      
        <h1>Recipe Details</h1>
                <div className="search" style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '10px',
            marginTop: '20px'
        }}>
            <input type="search" placeholder="Chicken fry" required className="px-3 py-5 rounded-2xl" />
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

export default RecipePage;