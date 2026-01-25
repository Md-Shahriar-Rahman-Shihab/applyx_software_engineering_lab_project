import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }

    return (
        <section className=" pt-24 pb-12 ">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Badge */}
                <span className="inline-block px-5 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm">
                    No. 1 Job Hunt Website
                </span>

                {/* Heading */}
                <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Search, Apply & <br />
                    Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
                </h1>

                {/* Description */}
                <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed px-2">
                    ApplyX is a MERN-based job hiring and project management platform that helps companies
                    hire talent, manage projects, and collaborate efficiently, while enabling candidates
                    to apply for jobs and track their work in one unified system.
                </p>

                {/* Search Box */}
                <div className="mt-10 flex items-center max-w-xl mx-auto bg-white border border-gray-200 rounded-full shadow-md px-4 py-2">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 outline-none border-none text-sm px-2"
                    />
                    <Button
                        onClick={searchJobHandler}
                        className="rounded-full bg-[#6A38C2] hover:bg-[#5b2fb3]"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
