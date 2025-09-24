function HomePage() {
    return ( 
        <>
        <div className="mx-auto my-11">
            <h1 className="text-white text-6xl font-bold text-center">Healthy meals, zero fuss</h1>
            <p className="text-white text-3xl font-bold my-9 text-center">Discover whole-food recipes that you can cook anytime <br /> no processed junk, no guesswork.</p>
        </div>    
            <div className="bg-white w-3/4 h-160 rounded-xl mx-auto overflow-hidden">
                <img src="/src/assets/aakash-malik-kLVOlYLGBFE-unsplash.jpg" className="w-full h-full mx-auto object-cover" alt="Ingredients on the table" />
            </div>
        </>

    );
}

export default HomePage;