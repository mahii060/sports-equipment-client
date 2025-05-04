import React from 'react';

const Delivery = () => {
    return (
        <div className="bg-black rounded-xl md:h-40 my-5 md:p-6 flex flex-col md:flex-row justify-evenly items-center gap-6 text-center md:text-left">

            {/* Feature 1 */}
            <div className="flex items-center gap-4">
                <img
                    src="https://img.icons8.com/ios-filled/50/fa314a/delivery.png"
                    alt="Free Delivery"
                    className="w-20 h-20"
                />
                <div>
                    <p className="text-gray-50 font-semibold leading-snug">
                        Free<br />delivery
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-gray-500"></div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
                <img
                    src="https://img.icons8.com/ios-filled/50/fa314a/money.png"
                    alt="Cash on Delivery"
                    className="w-20 h-20"
                />
                <div>
                    <p className="text-gray-50 font-semibold leading-snug">
                        Cash on<br />delivery
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-12 w-px bg-gray-500"></div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
                <img
                    src="https://img.icons8.com/ios-filled/50/fa314a/return-purchase.png"
                    alt="Return Opportunity"
                    className="w-20 h-20"
                />
                <div>
                    <p className="text-gray-50 font-semibold leading-snug">
                        Return<br />opportunity
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;