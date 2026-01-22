import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);

    const isInitiallyApplied =
        singleJob?.applications?.some(app => app.applicant === user?._id) || false;

    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const { id: jobId } = useParams();
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(
                `${APPLICATION_API_END_POINT}/apply/${jobId}`,
                { withCredentials: true }
            );

            if (res.data.success) {
                setIsApplied(true);
                dispatch(
                    setSingleJob({
                        ...singleJob,
                        applications: [...singleJob.applications, { applicant: user?._id }]
                    })
                );
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(
                    `${JOB_API_END_POINT}/get/${jobId}`,
                    { withCredentials: true }
                );
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(
                        res.data.job.applications.some(
                            app => app.applicant === user?._id
                        )
                    );
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto my-14 px-4"
        >
            {/* HERO CARD */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-[1px]">
                <div className="bg-white rounded-3xl p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900">
                                {singleJob?.title}
                            </h1>

                            <div className="flex flex-wrap gap-3 mt-6">
                                <Badge className="bg-blue-100 text-blue-700 font-semibold">
                                    {singleJob?.position} Positions
                                </Badge>
                                <Badge className="bg-rose-100 text-rose-700 font-semibold">
                                    {singleJob?.jobType}
                                </Badge>
                                <Badge className="bg-violet-100 text-violet-700 font-semibold">
                                    {singleJob?.salary} LPA
                                </Badge>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: isApplied ? 1 : 1.06 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                onClick={isApplied ? null : applyJobHandler}
                                disabled={isApplied}
                                className={`px-10 py-6 text-lg rounded-2xl font-bold shadow-lg
                                ${isApplied
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-violet-600 hover:to-indigo-600'
                                    }`}
                            >
                                {isApplied ? 'Already Applied' : 'Apply Now'}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* DETAILS */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10">
                    <h2 className="text-2xl font-bold mb-8 border-b pb-4">
                        Job Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Info label="Role" value={singleJob?.title} />
                        <Info label="Location" value={singleJob?.location} />
                        <Info label="Experience" value={`${singleJob?.experienceLevel} yrs`} />
                        <Info label="Salary" value={`${singleJob?.salary} LPA`} />
                        <Info label="Applicants" value={singleJob?.applications?.length} />
                        <Info
                            label="Posted"
                            value={singleJob?.createdAt?.split('T')[0]}
                        />
                    </div>

                    <div className="mt-10">
                        <h3 className="font-semibold text-lg mb-3">Description</h3>
                        <p className="text-gray-700 leading-relaxed text-[15px]">
                            {singleJob?.description}
                        </p>
                    </div>
                </div>

                {/* Right Stats */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl shadow-xl p-10 flex flex-col justify-center">
                    <p className="uppercase tracking-wider text-gray-400 text-sm">
                        Quick Stats
                    </p>

                    <div className="mt-8 space-y-6">
                        <Stat title="Experience" value={`${singleJob?.experienceLevel}+ yrs`} />
                        <Stat title="Salary" value={`${singleJob?.salary} LPA`} />
                        <Stat title="Applicants" value={singleJob?.applications?.length} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Info = ({ label, value }) => (
    <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
);

const Stat = ({ title, value }) => (
    <div className="flex items-center justify-between">
        <p className="text-gray-300">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
    </div>
);

export default JobDescription;
