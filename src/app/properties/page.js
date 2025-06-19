import PropertyCard from "components/components/PropertyCard";

const properties = Array.from({ length: 20 }).map((_, i) => ({
    title: `Property ${i + 1}`,
    price: `$${(1_000_000 + i * 50_000).toLocaleString()}`,
    address: `${100 + i} Main Street, City, Country`,
    bedrooms: 3 + (i % 5),
    bathrooms: 2 + (i % 3),
    area: 120 + i * 10,
    floors: 1 + (i % 3),
    parking: 1 + (i % 4),
}));

export default function PropertiesPage() {
    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-emerald-800 mb-10">Property Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {properties.map((property, idx) => (
                    <PropertyCard key={idx} {...property} />
                ))}
            </div>
        </section>
    );
} 