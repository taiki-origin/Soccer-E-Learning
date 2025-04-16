function TopPageFooter() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
                <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} Soccer Learning. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline hover:text-green-300 transition">Privacy Policy</a>
                    <a href="#" className="hover:underline hover:text-green-300 transition">Terms</a>
                    <a href="#" className="hover:underline hover:text-green-300 transition">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default TopPageFooter;
