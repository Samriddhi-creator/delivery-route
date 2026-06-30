export default function Navbar() {
    return (
        <div className="flex flex-col md:flex-row md:h-12 py-3 md:py-0 border border-white w-full shadow-[4px_2px_4px_4px_#000000] justify-between items-center bg-black text-white transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] px-5 gap-3 md:gap-0">
            <h1 className="text-xl md:text-2xl font-bold">FLIPKART</h1>
            <div className="flex flex-row gap-6 text-sm md:text-lg font-medium">
                <p className="hover:text-red-500 cursor-pointer transition-colors">Activity</p>
                <p className="hover:text-red-500 cursor-pointer transition-colors">Program</p>
                <p className="hover:text-red-500 cursor-pointer transition-colors">Acquitions</p>
            </div>
        </div>
    );
}