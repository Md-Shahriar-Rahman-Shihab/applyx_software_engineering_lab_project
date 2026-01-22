import React from 'react'
import { Badge } from './ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/description/${job._id}`)}
            className="group bg-white border border-gray-200 rounded-xl p-5 cursor-pointer
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
            {/* Company Info */}
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border">
                    <AvatarImage src={job?.company?.logo} alt={job?.company?.name} />
                    <AvatarFallback>
                        {job?.company?.name?.charAt(0)}
                    </AvatarFallback>
                </Avatar>

                <div>
                    <h1 className="font-semibold text-base text-gray-800">
                        {job?.company?.name}
                    </h1>
                    <p className="text-xs text-gray-500">Bangladesh</p>
                </div>
            </div>

            {/* Job Info */}
            <div className="mt-4">
                <h2 className="font-bold text-lg text-gray-900 group-hover:text-[#6A38C2] transition">
                    {job?.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {job?.description}
                </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
                <Badge variant="outline" className="text-blue-700 font-medium">
                    {job?.position} Positions
                </Badge>

                <Badge variant="outline" className="text-[#F83002] font-medium">
                    {job?.jobType}
                </Badge>

                <Badge variant="outline" className="text-[#7209b7] font-medium">
                    {job?.salary} LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
