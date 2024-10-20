import React from 'react';

function Aboutus(props) {
    return (
        <section class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div class="max-w-lg">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                    <p class="mt-4 text-gray-600 text-lg">S.S. Institute of pharmacy is a renounced institute with the main aims and objectives of providing educational (both medical and paramedical) facilities to the needy and deserving population of the society. S.S. Institute of Nursing has been conceptualized as a “Centre of Excellence” in Medicare, education, training, and research. S.S. Institute of pharmacy, enjoys the patronage and support of some well-known academicians in the medical fraternity, we are committed to serve mankind.</p>
                    <div class="mt-8">
                        <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span class="ml-2">&#8594;</span></a>
                    </div>
                </div>
                <div class="mt-12 md:mt-0">
                    <img src='https://images.unsplash.com/photo-1531973576160-7125cd663d86' alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Aboutus;