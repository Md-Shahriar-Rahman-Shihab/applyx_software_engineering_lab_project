import Navbar from "./shared/Navbar";
import { Briefcase, Users, ShieldCheck, Rocket, Search, Layout } from "lucide-react";

export default function AboutApplyX() {
    return (
        <>
            <Navbar />

            <section className="relative bg-white mt-2 pt-20 pb-28">
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h1 className="text-4xl font-bold text-gray-900">
                        About Apply<span className="text-[#F83002]">X</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                        ApplyX is a smart job-hunting platform designed to connect
                        talented candidates with the right opportunities — faster,
                        simpler, and more efficiently.
                    </p>
                </div>

                {/* Glow background */}
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#F83002]/10 blur-[220px] -z-10" />

                {/* Stats */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 px-6">
                    <Stat title="10K+" desc="Job Seekers" />
                    <Stat title="2K+" desc="Active Jobs" />
                    <Stat title="500+" desc="Companies" />
                </div>

                {/* Features */}
                <div className="max-w-6xl mx-auto mt-20 px-6">
                    <h2 className="text-2xl font-semibold text-gray-900 text-center">
                        Why Choose ApplyX?
                    </h2>
                    <p className="text-gray-500 text-center mt-2 max-w-2xl mx-auto">
                        Built with modern technologies to deliver a seamless
                        experience for both candidates and recruiters.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-14">
                        <Feature
                            icon={<Search />}
                            title="Fast Job Discovery"
                            desc="Find relevant jobs instantly using advanced filters and real-time listings."
                        />
                        <Feature
                            icon={<Layout />}
                            title="Modern & Clean UI"
                            desc="A distraction-free interface that keeps your job search smooth and simple."
                        />
                        <Feature
                            icon={<Rocket />}
                            title="Quick Apply"
                            desc="Apply to jobs in seconds with an optimized application process."
                        />
                        <Feature
                            icon={<Briefcase />}
                            title="Recruiter Tools"
                            desc="Powerful dashboards for employers to post jobs and manage applicants."
                        />
                        <Feature
                            icon={<Users />}
                            title="Candidate Profiles"
                            desc="Showcase skills, resume, and experience with a professional profile."
                        />
                        <Feature
                            icon={<ShieldCheck />}
                            title="Secure Platform"
                            desc="JWT authentication, role-based access, and secure data handling."
                        />
                    </div>
                </div>

                {/* Mission */}
                <div className="max-w-5xl mx-auto mt-24 px-6">
                    <div className="bg-white rounded-2xl shadow-md p-10 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
                            Our mission is to reduce the gap between talent and opportunity.
                            ApplyX empowers job seekers with clarity and recruiters with the
                            right tools — creating meaningful career connections.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

/* Reusable Components */

const Feature = ({ icon, title, desc }) => (
    <div className="flex gap-4">
        <div className="p-3 rounded-xl bg-[#F83002]/10 text-[#F83002]">
            {icon}
        </div>
        <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{desc}</p>
        </div>
    </div>
);

const Stat = ({ title, desc }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 mt-1">{desc}</p>
    </div>
);
