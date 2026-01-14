export default function Footer() {
    return (
        <>
            <style>{`
                @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                * {
                    font-family: "Poppins", sans-serif;
                }
            `}</style>

            {/* FULL WIDTH FOOTER */}
            <footer className="bg-white border-t border-[#E8E3D5]">
                
                {/* CONTENT WRAPPER (same as navbar width) */}
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

                        {/* Brand */}
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h1 className="text-2xl font-bold text-slate-800">
                                Apply<span className="text-[#F83002]">X</span>
                            </h1>

                            <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-white via-[#E8E3D5] to-white"></div>

                            <p className="text-sm text-slate-600 mt-6 max-w-sm leading-relaxed">
                                ApplyX is a modern job hunting platform built with the MERN stack,
                                helping job seekers connect with recruiters faster and smarter.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-sm font-medium text-slate-800">
                                Quick Links
                            </h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="/" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
                                <a href="/jobs" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Find Jobs</a>
                                <a href="/about" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">About Us</a>
                                <a href="/dashboard" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Dashboard</a>
                                <a href="/contact" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
                            </div>
                        </div>

                        {/* For Users */}
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-sm font-medium text-slate-800">
                                For Users
                            </h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="/login" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Login</a>
                                <a href="/register" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Register</a>
                                <a href="/post-job" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Post a Job</a>
                                <a href="/applications" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">My Applications</a>
                            </div>
                        </div>

                        {/* Subscribe */}
                        <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-sm font-medium text-slate-800">
                                Stay Updated
                            </h3>

                            <div className="flex items-center gap-2 h-12 max-w-80 w-full rounded-full overflow-hidden mt-4 border border-[#E8E3D5] bg-white">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full h-full pl-6 outline-none text-sm bg-transparent text-slate-700 placeholder-slate-400"
                                />
                                <button
                                    className="bg-[#6A38C2] hover:bg-indigo-700 active:scale-95 transition w-36 h-9 rounded-full text-sm text-white mr-1.5"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* INNER DIVIDER (content width only) */}
                    <div className="w-full h-px mt-16 mb-4 bg-[#E8E3D5]"></div>

                    {/* Bottom */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-500">
                            © 2026 ApplyX. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="#" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                                Terms & Conditions
                            </a>
                            <div className="w-px h-4 bg-[#E8E3D5]"></div>
                            <a href="#" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
