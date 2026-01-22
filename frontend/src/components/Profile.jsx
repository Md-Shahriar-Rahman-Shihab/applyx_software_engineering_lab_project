import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import { motion } from 'framer-motion';

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* PROFILE CARD */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto mt-10 px-4"
            >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-[1px] shadow-2xl">
                    <div className="bg-white rounded-3xl p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-28 w-28 ring-4 ring-violet-200">
                                    <AvatarImage
                                        src={
                                            user?.profile?.profilePhoto ||
                                            "https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                                        }
                                        alt="profile"
                                    />
                                </Avatar>

                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">
                                        {user?.fullname}
                                    </h1>
                                    <p className="text-gray-600 mt-1 max-w-md">
                                        {user?.profile?.bio || "No bio added yet"}
                                    </p>
                                </div>
                            </div>

                            <Button
                                onClick={() => setOpen(true)}
                                variant="outline"
                                className="rounded-xl px-6 py-5 hover:bg-gray-100"
                            >
                                <Pen className="mr-2 h-4 w-4" />
                                Edit Profile
                            </Button>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Info icon={<Mail />} text={user?.email} />
                            <Info icon={<Contact />} text={user?.phoneNumber || "Not added"} />
                        </div>

                        {/* SKILLS */}
                        <div className="mt-10">
                            <h2 className="font-semibold text-lg mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {user?.profile?.skills?.length > 0 ? (
                                    user.profile.skills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            className="bg-violet-100 text-violet-700 px-4 py-1 text-sm font-medium"
                                        >
                                            {skill}
                                        </Badge>
                                    ))
                                ) : (
                                    <span className="text-gray-500">No skills added</span>
                                )}
                            </div>
                        </div>

                        {/* RESUME */}
                        <div className="mt-10 bg-gray-50 rounded-2xl p-6">
                            <Label className="text-base font-semibold">Resume</Label>
                            {user?.profile?.resume ? (
                                <a
                                    href={user.profile.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-2 text-indigo-600 hover:underline font-medium"
                                >
                                    {user.profile.resumeOriginalName}
                                </a>
                            ) : (
                                <p className="text-gray-500 mt-2">No resume uploaded</p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* APPLIED JOBS */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-5xl mx-auto mt-14 px-4"
            >
                <div className="bg-white rounded-3xl shadow-xl p-8">
                    <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>
                    <AppliedJobTable />
                </div>
            </motion.div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
};

const Info = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-gray-700">
        <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
        <span className="font-medium">{text}</span>
    </div>
);

export default Profile;
