import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full md:h-screen">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className="flex w-full">
                    {/* Image: Half Width */}
                    <img
                        src="https://i.pinimg.com/736x/56/33/9f/56339f6ed785143370111d323f0450f8.jpg"
                        className="w-full md:w-1/2 md:object-cover"
                        alt="Slide 1"
                    />
                    {/* Content: Half Width */}
                    <div className="w-1/2 p-10 flex flex-col justify-center items-center bg-black text-red-500 space-y-6">
                        <h2 className="text-7xl text-justify font-extrabold leading-tight text-red-700 drop-shadow-md">
                            <span className='text-red-50'>Gear Up</span> <br /> for Greatness!
                        </h2>
                        <p className="text-lg font-medium text-gray-50 max-w-md">
                            Push your limits with elite gear made for speed, strength, and victory. Built for athletes, powered by passion.
                        </p>
                        <button className="btn px-6 py-6 text-lg border-0 font-semibold rounded-lg bg-red-600 text-black hover:bg-red-700 transition-all shadow-lg w-fit">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* navigation button */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle text-red-600 hover:bg-red-500 hover:text-gray-50">❮</a>
                    <a href="#slide2" className="btn btn-circle text-red-600 hover:bg-red-500 hover:text-gray-50">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="flex w-full">
                    {/* Image: Half Width */}
                    <img
                        src="https://i.pinimg.com/736x/da/03/16/da0316b424eb1d2ec027a5448d8069be.jpg"
                        className="w-1/2 object-cover"
                        alt="Slide 1"
                    />
                    {/* Content: Half Width */}
                    <div className="w-1/2 p-10 flex flex-col justify-center items-center bg-black text-red-500 space-y-6">
                        <h2 className="text-7xl text-justify font-extrabold leading-tight text-red-700 drop-shadow-md">
                            <span className="text-gray-50">Train Hard</span><br /> Conquer Limits
                        </h2>
                        <p className="text-lg font-medium text-gray-50 max-w-md mt-4">
                            Fuel your grind with high-performance gym gear. Power, precision, and durability — made for the relentless.
                        </p>
                        <button className="btn px-6 py-6 text-lg border-0 font-semibold rounded-lg bg-red-600 text-black hover:bg-red-700 transition-all shadow-lg w-fit">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* navigation button */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle hover:bg-red-500 hover:text-gray-50">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-red-500 hover:text-gray-50">❯</a>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="flex w-full">
                    {/* Image: Half Width */}
                    <img
                        src="https://i.pinimg.com/736x/61/5c/d2/615cd2c7933fe4755808ebb5659d8b06.jpg"
                        className="w-1/2 object-cover"
                        alt="Slide 1"
                    />
                    {/* Content: Half Width */}
                    <div className="w-1/2 p-10 flex flex-col justify-center items-center bg-black text-red-500 space-y-6">
                        <h2 className="text-6xl font-extrabold leading-tight text-gray-50 drop-shadow-lg">
                            <span className="text-red-600">Ride Fast</span><br /> Stay Ahead
                        </h2>
                        <p className="text-lg font-medium text-gray-50 max-w-md mt-4">
                            Discover cycling gear built for speed, endurance, and comfort. Whether on roads or trails — conquer every mile in style.
                        </p>
                        <button className="btn px-6 py-6 text-lg border-0 font-semibold rounded-lg bg-red-600 text-black hover:bg-red-700 transition-all shadow-lg w-fit">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* navigation button */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div className="flex w-full">
                    {/* Image: Half Width */}
                    <img
                        src="https://i.pinimg.com/736x/44/60/d7/4460d7e025d5fc00c67b2e504ed589a7.jpg"
                        className="w-1/2 object-cover"
                        alt="Slide 1"
                    />
                    {/* Content: Half Width */}
                    <div className="w-1/2 p-10 flex flex-col justify-center items-center bg-black text-red-500 space-y-6">
                        <h2 className="text-6xl font-extrabold leading-tight text-gray-50 drop-shadow-lg">
                            <span className="text-red-600">Train Fierce</span><br /> Fight Fearless
                        </h2>
                        <p className="text-lg font-medium text-gray-50 max-w-md mt-4">
                            Step into the cage with confidence. Our MMA gear is forged for power, precision, and domination. Built for warriors.
                        </p>
                        <button className="btn px-6 py-6 text-lg border-0 font-semibold rounded-lg bg-red-600 text-black hover:bg-red-700 transition-all shadow-lg w-fit">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* navigation button */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;