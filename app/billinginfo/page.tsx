
import RentalForm from "../components/rentalform";
import { Car } from "../types";
import Image from 'next/image';


const cars: Car[] = [
  {
    id: '1',
    name: 'Nissan GT-R',
    image: '/View%201.png',
    rating: 4,
    reviews: 440,
    price: 80.00,
  },
  // Add more cars as needed
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Premium Car Rental Service
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RentalForm />
          </div>
          <div className="space-y-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md p-6 space-y-4"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-${
                            i < car.rating ? 'yellow' : 'gray'
                          }-400`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500">
                      {car.reviews} Reviews
                    </span>
                  </div>
                  <p className="text-2xl font-bold">${car.price.toFixed(2)}/day</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}