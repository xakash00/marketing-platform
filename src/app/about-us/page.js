import React from "react";

export default function AboutUs() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-emerald-800 mb-6">About Us</h1>
            <p className="text-lg text-emerald-900 mb-8 max-w-2xl">
                Propera is dedicated to helping you find your dream property. With years of experience and a passion for real estate, our team is committed to providing exceptional service and a seamless property search experience.
            </p>
            <div>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Jane Doe</h3>
                        <p className="text-emerald-700">CEO & Founder</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">John Smith</h3>
                        <p className="text-emerald-700">Lead Agent</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Emily Johnson</h3>
                        <p className="text-emerald-700">Customer Success</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Emily Johnson</h3>
                        <p className="text-emerald-700">Customer Success</p>
                    </div> <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Emily Johnson</h3>
                        <p className="text-emerald-700">Customer Success</p>
                    </div> <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Emily Johnson</h3>
                        <p className="text-emerald-700">Customer Success</p>
                    </div> <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">Emily Johnson</h3>
                        <p className="text-emerald-700">Customer Success</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 