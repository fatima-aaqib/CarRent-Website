"use client"
import Image from "next/image";

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Car, 
  LineChart, 
  Receipt, 
  MessageSquare, 
  Calendar, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Menu,
  X,
  
} from 'lucide-react';

function Adminpage () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold text-blue-600">CarRent</h1>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 mb-2">MAIN MENU</div>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </a>
            {[
              { icon: <Car size={20} />, text: 'Car Rent' },
              { icon: <LineChart size={20} />, text: 'Insight' },
              { icon: <Receipt size={20} />, text: 'Reimburse' },
              { icon: <MessageSquare size={20} />, text: 'Inbox' },
              { icon: <Calendar size={20} />, text: 'Calendar' },
            ].map((item, index) => (
              <a key={index} href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                {item.icon}
                <span>{item.text}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 space-y-1">
            <div className="text-xs font-semibold text-gray-400 mb-2">PREFERENCES</div>
            {[
              { icon: <Settings size={20} />, text: 'Settings' },
              { icon: <HelpCircle size={20} />, text: 'Help & Center' },
            ].map((item, index) => (
              <a key={index} href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
                {item.icon}
                <span>{item.text}</span>
              </a>
            ))}
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50">
              <LogOut size={20} />
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-xl font-bold text-blue-600">CarRent</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Details Rental */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Details Rental</h2>
          <Image src='/Maps.png' 
          width={500}
          height={272}
          
          alt='Map' className='w-[500px] h-[272px] object-cover rounded-lg  mb-4 m-5'
            
            />
           
            
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/View%201.png" 
                alt="Nissan GT-R" 
                width={100}
                height={100}
                className="w-24 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">Nissan GT-R</h3>
                <p className="text-gray-500">Sport Car</p>
              </div>
              <span className="ml-auto text-gray-500">#9761</span>
            </div>

            <div className="space-y-4">
              {['Pick-Up', 'Drop-Off'].map((type, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
                    <span className="font-medium">{type}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm text-gray-500">Locations</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>Kota Semarang</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-gray-500">Date</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>{index === 0 ? '20 July 2022' : '21 July 2022'}</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm text-gray-500">Time</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>{index === 0 ? '07:00' : '01:00'}</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">Total Rental Price</p>
                  <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
                </div>
                <p className="text-2xl font-bold">$80.00</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top 5 Car Rental */}
            <div className="bg-white  p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
              <Image
                src='/Top%205%20Car%20Rental.png'
                alt='Top 5 Car Rental'
                width={524}
                height={270}
                className='w-[524px] h-[270px] '
                
                
                />
               
            </div>
            </div>

            {/* Recent Transaction */}
            <div className="bg-white  p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Transaction</h2>
                <button className="text-blue-600 text-sm">View All</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Nissan GT-R', imge:'car%20(1).jpg', type: 'Sport Car', price: '$80.00', date: '20 July' },
                  { name: 'Koegnigsegg',imge:'car%20(10).jpg', type: 'Sport Car', price: '$99.00', date: '19 July' },
                  { name: 'Rolls-Royce', imge:'Car%20(2).jpg', type: 'Sport Car', price: '$96.00', date: '18 July' },
                  { name: 'CR-V',imge:'Car%20(1).png', type: 'SUV', price: '$80.00', date: '17 July' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Image
                      src={`/${item.imge}`}
                      alt={item.name}
                      width={134}
                      height={60}
                      className="w-[134px] h-[60px] -m-3"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.price}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Adminpage;
