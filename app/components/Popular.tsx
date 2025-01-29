import { client } from '@/sanity/lib/client';

import Link from 'next/link';

import Image from 'next/image';
import { Car } from '../typing';

async function fourproducts() {
  const query = `*[_type == "car"] [0..15] {
  name,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "imageUrl": image.asset->url
}`;
  
  return client.fetch(query, {}, {
    
  });
}

export default async function Home() {
  const cars = await fourproducts();

  return (
    
    <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-1xl  text-gray-600 mb-8">popularcar</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars?.map((car:Car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">

                {car.imageUrl && (
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    width={400}
                    height={400}
                    className="w-[232px] h-[80px] object-cover m-5" />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{car.brand} {car.name}</h2>
                  <p className="text-gray-500 mt-2">{car.type}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-blue-600">{car.pricePerDay}</p>
                    <Link href="/category">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      
                  Rent Now
                    </button>
                    </Link>
                  
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">👥</span>
                      {car.seatingCapacity} 
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⚙️</span>
                      {car.transmission}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⛽</span>
                      {car.fuelCapacity}
                      {car.tags}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Show More
            </button>
          </div>
        </div>
      </main>
  );
}