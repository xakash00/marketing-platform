import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

export default async function ProfilePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token');
    console.log({ token }, "hello");

    const user = {
        name: "Alex Johnson",
        email: "alex.johnson@email.com",
        phone: "+1 234 567 8901",
        address: "123 Main Street, Springfield, USA",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        memberSince: "January 2022",
    };

    return (
        <section className="container mx-auto px-4 py-16 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src={user.avatar}
                        width={24}
                        height={24}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-emerald-200 mb-4 object-cover"
                    />
                    <h2 className="text-2xl font-bold text-emerald-800 mb-1">{user.name}</h2>
                    <p className="text-emerald-600">{user.email}</p>
                </div>
                <div className="space-y-4">
                    <div>
                        <span className="block text-gray-500 text-sm">Phone</span>
                        <span className="text-gray-800 font-medium">{user.phone}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-sm">Address</span>
                        <span className="text-gray-800 font-medium">{user.address}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-sm">Member Since</span>
                        <span className="text-gray-800 font-medium">{user.memberSince}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}


