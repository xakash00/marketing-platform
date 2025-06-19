import React from "react";

export default function ContactUs() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-emerald-800 mb-6">Contact Us</h1>
            <p className="text-lg text-emerald-900 mb-8 max-w-2xl">
                Have questions or want to get in touch? Fill out the form below and our team will get back to you as soon as possible.
            </p>
            <form className="bg-emerald-50 p-8 rounded-lg shadow max-w-xl">
                <div className="mb-4">
                    <label className="block text-emerald-800 font-semibold mb-2" htmlFor="name">Name</label>
                    <input className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" type="text" id="name" name="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-emerald-800 font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" type="email" id="email" name="email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-emerald-800 font-semibold mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400" id="message" name="message" rows={5} required></textarea>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition" type="submit">
                    Send Message
                </button>
            </form>
        </section>
    );
} 