import Image from 'next/image';
import { ChevronDown } from "lucide-react"

export default function CarRental(){
    return(
        <><div className="flex gap-1 m-2 py-3 ">

            <Image src="/Ads%201.jpg" alt="Advertisement"
            width={638}
            height={360}
                className="lg:w-[638px] lg:h-[360px] sm:w-12 sm:h-[40px] rounded-lg object-cover" />
            <Image src="/Ads%202.jpg" alt="Advertisement"
            width={638}
            height={360}
                className="lg:w-[630px] lg:h-[360px]   rounded-lg object-cover hidden sm:block md:block" />

        </div><div>
            
                <div className=" bg-slate-100 rounded-3xl p-6 shadow-lg">
                    <div className="grid md:grid-cols-7 gap-4 items-center">
                        {/* Pick-Up Section */}
                        <div className="md:col-span-3 space-y-4">
                            <div className="flex items-center gap-2">
                                <input type="radio" id="pickup" name="type" className="text-blue-600" defaultChecked />
                                <label htmlFor="pickup" className="text-lg font-medium">Pick - Up</label>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                                    <div className="relative">
                                        <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Select your city</option>
                                            <option>Karachi</option>
                                            <option>Islamabad</option>
                                            <option>Lahore</option>
                                            <option>peshawar</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                                    <div className="relative">
                                        <select  className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Enter your date</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                                    <div className="relative">
                                        <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Enter your time</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {/* Switch Button */}
                        <div className="flex justify-center md:col-span-1">
                            <button className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </button>
                        </div>

                        {/* Drop-Off Section */}
                        <div className="md:col-span-3 space-y-4">
                            <div className="flex items-center gap-2">
                                <input type="radio" id="dropoff" name="type" className="text-blue-600" />
                                <label htmlFor="dropoff" className="text-lg font-medium">Drop - Off</label>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                                    <div className="relative">
                                        <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Select your city</option>
                                            <option>Karachi</option>
                                            <option>Islamabad</option>
                                            <option>Lahore</option>
                                            <option>peshawar</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                                    <div className="relative">
                                        <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Enter your date</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                                    <div className="relative">
                                        <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                                            <option>Enter your time</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
     
    )
}