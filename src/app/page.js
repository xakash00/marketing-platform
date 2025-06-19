import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const myCookie = cookieStore.get('accessToken');
  console.log({ myCookie })
  return (
    <section className="relative flex-grow">
      <div className="absolute inset-0 bg-emerald-900 opacity-50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
        <div className="py-24 md:py-32 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-lg text-emerald-100 mb-8">
            Discover the perfect home from our curated selection of premium properties across the country.
          </p>
          <div className="flex space-x-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition">
              Browse Properties
            </button>
            <button className="bg-white hover:bg-gray-100 text-emerald-800 px-6 py-3 rounded-md font-medium transition">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
