"use client"

import React from 'react'
import { FiCalendar, FiDroplet, FiHome, FiLayers, FiMapPin } from 'react-icons/fi';

const PropertyCard = ({
    title = "Luxury Villa",
    price = "$2,264,000",
    address = "18 New Street Miami, OR 97219",
    bedrooms = 8,
    bathrooms = 8,
    area = 545,
    floors = 3,
    parking = 6,
    imageUrl = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
}) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}></div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <span className="text-emerald-600 font-bold">{price}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                    <FiMapPin className="mr-2" />
                    <span>{address}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                        <FiCalendar className="mr-2 text-emerald-600" />
                        <span className="text-gray-700">{bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                        <FiDroplet className="mr-2 text-emerald-600" />
                        <span className="text-gray-700">{bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                        <FiHome className="mr-2 text-emerald-600" />
                        <span className="text-gray-700">{area}m<sup>2</sup></span>
                    </div>
                    <div className="flex items-center">
                        <FiLayers className="mr-2 text-emerald-600" />
                        <span className="text-gray-700">{floors} Floors</span>
                    </div>
                    <div className="flex items-center">
                        {/* <FiCar className="mr-2 text-emerald-600" /> */}
                        <span className="text-gray-700">{parking} spots</span>
                    </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300">
                    Schedule a visit
                </button>
            </div>
        </div>
    );
};

export default PropertyCard