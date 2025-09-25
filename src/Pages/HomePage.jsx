function HomePage() {
    return ( 
        <>
            <div className="mx-auto my-11">
                <h1 className="text-white text-6xl font-bold text-center my-15">Healthy meals, zero fuss</h1>
                <p className="text-white text-3xl font-bold my-9 text-center">Discover whole-food recipes that you can cook anytime <br /> no processed junk, no guesswork.</p>
            </div>    
            <div className="bg-white w-3/4 h-160 rounded-xl mx-auto overflow-hidden">
                <img src="/src/assets/aakash-malik-kLVOlYLGBFE-unsplash.jpg" className="w-full h-full mx-auto object-cover" alt="Ingredients on the table" />
            </div>
                <h2 className="text-white hover:text-shadow-xl text-center md:text-6xl my-25 sm:text-3xl">What you'll get</h2>
            <div className="flex justify-around my-15">
               <div className="bg-white w-90 h-70 items-center flex flex-col px-3 py-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out">
                <img src="/05dbafde-b769-43ad-909e-a3ab5f6dd7ea.jpg" alt="food icon" className="w-20 h-20 py-1"/>
                <h3 className="text-green-800 text-2xl py-4 font-bold">Whole-food recipes</h3>
                <p className="text-green-600 font-bold">Each dish uses everyday, unprocessed ingredients.</p>
               </div>
               <div className="bg-white w-90 h-70 items-center flex flex-col px-3 py-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out">
                <img src="/time_17931316.png" alt="Clock icon" className="w-16 h-16"/>
                <h3 className="text-green-800 text-2xl py-4 font-bold">Minimum fuss</h3>
                <p className="text-green-600 font-bold">All recipes are designed to make eating healthy, quick and easy to make.</p>
               </div>
               <div className="bg-white w-90 h-70 items-center flex flex-col px-3 py-4 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out">
                <img src="/search-engine_8163236.png" alt="Search icon" className="w-16 h-16"/>
                <h3 className="text-green-800 text-2xl py-4 font-bold">Search in seconds</h3>
                <p className="text-green-600 font-bold">Filter by name or ingredient and jump straight to the recipe you need.</p>
               </div>
            </div>
                <hr className="border-gray-500 w-8/9 mx-auto border-t my-10 outline-0"/>

            <div className="flex justify-center items-center gap-25 my-30">
              <div className="flex flex-col bg-white text-center rounded-2xl w-[600px] h-[440px] hover:shadow-2xl justify-cente">
                 <h2 className="text-green-800 text-5xl py-4 font-bold my-8 text-left mx-5 sm:text-4xl md:4xl">Built for real life</h2>
                 <p className="text-green-700 font-bold leading-9 text-base px-1.5 py-1">We have hundreds of tasty recipes from quick snacks to full family dinners so you'll never run out of ideas. Whether you're a beginner or a seasoned cook, we've got step-by-step guides to help you turn simple ingredients into mouth-watering meals.</p>  
              </div> 
              <div className="flex w-[600px] h-[440px] rounded-xl overflow-hidden object-cover hover:shadow-2xl">
                <img src="/jonathan-borba-15E3Hx-VabE-unsplash.jpg" alt="A cook cutting ingredients on a chopping board." className="w-full h-full rounded-2xl" />  
              </div>   
            </div>  
            <div className="flex justify-center items-center my-50">
                <div className="relative w-3/4 h-[40rem]">
                    <img src="/sun-koh-6yy5bZNOsec-unsplash.jpg" alt="Cutlery image" className="w-full h-full rounded-3xl object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold bg-black/50 px-6 py-3 rounded-lg">Ready to cook smarter?</h2>
                </div>
            </div>  
        </>

    );
}

export default HomePage;