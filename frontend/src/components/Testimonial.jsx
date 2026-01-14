export default function Testimonial() {
    return (
        <section className="py-4 mb-20">
            <div className="flex flex-col items-center text-gray-800">

                <p className="text-red-600 font-medium mb-2">
                    3940+ Happy ApplyX Users
                </p>

                <p className="text-4xl font-bold mb-16 text-center">
                    Don't just take our words
                </p>

                <div className="flex flex-wrap items-center justify-center gap-52">

                    {/* Testimonial 1 */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <img
                            className="h-60 w-44 rounded-lg object-cover"
                            src="https://i.ibb.co.com/WvJJMppg/pic1.jpg"
                            alt="userImage1"
                        />

                        <div className="flex flex-col justify-between h-60">
                            <div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="#FF532E"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="max-w-[280px] text-gray-500 mt-6">
                                    “A modern platform that actually works. ApplyX helped me track applications and connect with recruiters smoothly.”
                                </p>
                            </div>

                            <p className="text-lg font-medium">
                                Samin Sharaf Somik
                            </p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <img
                            className="h-60 w-44 rounded-lg object-cover"
                            src="https://i.ibb.co.com/DD2jNkBR/480415708-4047724975459891-2062878420763418973-n.jpg"
                            alt="userImage2"
                        />

                        <div className="flex flex-col justify-between h-60">
                            <div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="#FF532E"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="max-w-[280px] text-gray-500 mt-6">
                                    “ApplyX made job hunting incredibly easy. The interface is clean, fast, and I found relevant jobs within days. Highly recommended!”
                                </p>
                            </div>

                            <p className="text-lg font-medium">
                                Fahim Hafiz
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
