"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if (res.ok) {
            router.push("/profile");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <section className="container mx-auto px-4 py-16 flex justify-center">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-gray-100">
                <h1 className="text-2xl font-bold text-emerald-800 mb-6">Sign In</h1>
                {error && <div className="mb-4 text-red-600">{error}</div>}
                <div className="mb-4">
                    <label className="block text-emerald-800 font-semibold mb-2" htmlFor="email">Email</label>
                    <input
                        className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-emerald-800 font-semibold mb-2" htmlFor="password">Password</label>
                    <input
                        className="w-full px-4 py-2 border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition" type="submit">
                    Sign In
                </button>
            </form>
        </section>
    );
} 