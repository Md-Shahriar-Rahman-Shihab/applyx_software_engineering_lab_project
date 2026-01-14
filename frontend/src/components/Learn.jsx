import { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";

export default function Learn() {
    const [activeVideo, setActiveVideo] = useState(null);

    const courses = [
        { title: "HTML Full Course", videoId: "kUMe1FH4CHE" },
        { title: "CSS Full Course", videoId: "OXGznpKZ_sA" },
        { title: "JavaScript Full Course", videoId: "PkZNo7MFNFg" },
        { title: "React Full Course", videoId: "bMknfKXIFA8" },
        { title: "Next.js Full Course", videoId: "6aP9nyTcd44" },
    ];

    // Handle browser back button
    useEffect(() => {
        const handleBack = () => {
            setActiveVideo(null);
        };

        window.addEventListener("popstate", handleBack);
        return () => window.removeEventListener("popstate", handleBack);
    }, []);

    const openVideo = (videoId) => {
        setActiveVideo(videoId);
        window.history.pushState({ video: true }, "");
    };

    const closeVideo = () => {
        setActiveVideo(null);
        window.history.back();
    };

    return (
        <>
        <Navbar/>
        <section className="max-w-6xl mx-auto px-6  pb-24 mt-16">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-semibold text-slate-800">
                    Learn with Apply<span className="text-[#F83002]">X</span>
                </h1>
                <p className="text-slate-500 mt-2">
                    Click a course → watch video → press back to return.
                </p>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        onClick={() => openVideo(course.videoId)}
                        className="cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="relative aspect-video">
                            <img
                                src={`https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="size-16 bg-black/70 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="p-5">
                            <h2 className="text-lg font-semibold text-slate-800">
                                {course.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">

                        {/* Back Button */}
                        <button
                            onClick={closeVideo}
                            className="absolute -top-10 left-0 text-white text-sm hover:text-red-400"
                        >
                            ← Back
                        </button>

                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="Course Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

        </section>
        </>
    );
}
