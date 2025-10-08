import { useState, useEffect } from "react";


function RecipePage() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");


    return ( 
        <>
      
        <h1 className="text-white text-4xl text-center font-bold py-5">Recipe Details</h1>
                <div className="search flex mx-auto items-center justify-center gap-3 py-4" >
            <input type="search" placeholder="Chicken fry" required className="px-4 py-2.5 rounded-lg bg-white border-0 outline-0" />
            <button type="submit" className="bg-[#92FF32] px-4 py-2.5 rounded-lg font-bold cursor-pointer">SEARCH</button>
        </div>

        <div className="">

        </div>


        {/* <footer>
                <small><p className="text-gray-500 font-bold text-center text-xl gap-0.5 bg-black w-full py-2.5 relative left-0 my-0 bottom-0">&copy; Made with ❤ 2025. All Rights Reserved</p></small>
        </footer> */}
        </>
     );
}

export default RecipePage;