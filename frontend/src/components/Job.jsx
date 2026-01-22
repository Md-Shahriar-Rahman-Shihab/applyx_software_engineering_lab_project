import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    };

    return (
        <div
            className="
                bg-white border border-gray-200 rounded-2xl shadow-sm
                p-5 h-full flex flex-col justify-between
                hover:shadow-lg transition-shadow duration-300
            "
        >
            {/* Top */}
            <div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                        {daysAgoFunction(job?.createdAt) === 0
                            ? "Today"
                            : `${daysAgoFunction(job?.createdAt)} days ago`}
                    </span>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-gray-100"
                    >
                        <Bookmark className="h-4 w-4" />
                    </Button>
                </div>

                {/* Company */}
                <div className="flex items-center gap-3 mt-4">
                    <Avatar className="h-12 w-12 border">
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>

                    <div>
                        <h1 className="font-semibold text-base">
                            {job?.company?.name}
                        </h1>
                        <p className="text-xs text-gray-500">Bangladesh</p>
                    </div>
                </div>

                {/* Job Info */}
                <div className="mt-4">
                    <h2 className="font-bold text-lg line-clamp-1">
                        {job?.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {job?.description}
                    </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary" className="text-blue-700 font-semibold">
                        {job?.position} Positions
                    </Badge>
                    <Badge variant="secondary" className="text-rose-600 font-semibold">
                        {job?.jobType}
                    </Badge>
                    <Badge variant="secondary" className="text-violet-600 font-semibold">
                        {job?.salary} LPA
                    </Badge>
                </div>
            </div>

            {/* Actions (Bottom aligned) */}
            <div className="flex gap-3 mt-6">
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className="w-full"
                >
                    Details
                </Button>
                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Job;
