import Navbar from "./shared/Navbar";

export default function AboutApplyX() {
    return (
        <>
            <Navbar/>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <h1 className="text-3xl font-semibold text-center mx-auto pt-16">
                About Apply<span className="text-[#F83002]">X</span>
            </h1>

            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                ApplyX is a modern job hunting platform that connects job seekers with the right opportunities faster and smarter.
            </p>

            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">

                <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-white"></div>

                {/* Feature 1 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Fast Job Search
                        </h3>
                        <p className="text-sm text-slate-500">
                            Quickly find relevant jobs using smart filters and real-time listings.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Clean & Modern UI
                        </h3>
                        <p className="text-sm text-slate-500">
                            A simple, user-friendly interface designed for both recruiters and candidates.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Easy Application Process
                        </h3>
                        <p className="text-sm text-slate-500">
                            Apply to jobs in just a few clicks with a streamlined application flow.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Company Insights
                        </h3>
                        <p className="text-sm text-slate-500">
                            Learn about companies, job roles and requirements before applying.
                        </p>
                    </div>
                </div>

                {/* Feature 5 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Recruiter Dashboard
                        </h3>
                        <p className="text-sm text-slate-500">
                            Employers can easily post jobs, manage applications and hire talent.
                        </p>
                    </div>
                </div>

                {/* Feature 6 */}
                <div>
                    <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png" alt="" />
                    </div>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-base font-medium text-slate-600">
                            Secure & Reliable
                        </h3>
                        <p className="text-sm text-slate-500">
                            Authentication, role-based access and secure data handling built-in.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
