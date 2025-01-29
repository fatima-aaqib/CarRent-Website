
import Image from 'next/image';
import { Bell, Heart, Search } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return (

        <header className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 lg:px-6">
                {/* logo */}
                <div className="flex items-center gap-12">
                
                    <h3 className="text-xl font-bold text-blue-600 sm:text-2xl"><Link href={"/"}>MORENT</Link></h3>
                    {/* search bar */}
                    <div className="relative hidden md:block">
                        <input type="search"
                            placeholder="Search something here"
                            className="w-[280px] rounded-lg border bg-gray-50 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-blue-600 lg:w-[400px]" />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />

                    </div>
                </div>
                {/* Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* search icons mobile only */}
                    <button className="rounded-full p-2 hover:bg-gray-100 md:hidden">
                        <Search className="h-6 w-6 text-gray-600" />
                    </button>
                    {/* other icons on sm screen */}
                    <button className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
                        <Heart className="h-6 w-6 text-gray-600" />
                    </button>
                    <button className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
                        <Bell className="h-6 w-6 text-gray-600" />
                    </button>
                    {/* profile picture*/}
                    <button className="rounded-full p-2 hover:bg-gray-100">
                        <div className="h-8 w-8 rounded-full bg-gray-200">
                           
                            <Image src="/Profill.png" alt="Profile Picture" width={32} height={32}
                            className="rounded-full" />
                        </div>
                    </button>
                </div>
            </div>
            {/* mobile search bar-only shown on mobile */}
            <div className="border-t p-4 md:hidden">
                <div className="relative">
                    <input type="search"
                        placeholder="Search something here"
                        className="w-full rounded-lg border bg-gray-50 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-blue-600" />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

        </header>

    )
}