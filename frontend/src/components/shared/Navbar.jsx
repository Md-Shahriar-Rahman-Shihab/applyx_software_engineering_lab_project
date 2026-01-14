import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="bg-[#FFFBEA]">
            <div className="relative flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold">
                        Apply<span className="text-[#F83002]">X</span>
                    </h1>
                </div>

                {/* CENTER MENU (Student / Guest) */}
                {(!user || user.role !== "recruiter") && (
                    <ul className="absolute left-1/2 -translate-x-1/2 flex font-medium items-center gap-8">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/learn">Learn</Link></li>
                    </ul>
                )}

                {/* Recruiter Menu (unchanged behavior) */}
                {user?.role === "recruiter" && (
                    <ul className="flex font-medium items-center gap-6">
                        <li><Link to="/admin/companies">Companies</Link></li>
                        <li><Link to="/admin/jobs">Jobs</Link></li>
                    </ul>
                )}

                {/* Right Side */}
                <div>
                    {!user ? (
                        <div className="flex items-center gap-2">
                            <Link to="/login">
                                <Button variant="outline">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                                    Signup
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} />
                                </Avatar>
                            </PopoverTrigger>

                            <PopoverContent className="w-80">
                                <div className="flex gap-3 items-center">
                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium">{user?.fullname}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {user?.profile?.bio}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col gap-2 text-gray-600">
                                    {user?.role === "student" && (
                                        <Link to="/profile" className="flex items-center gap-2">
                                            <User2 size={18} /> View Profile
                                        </Link>
                                    )}

                                    <button
                                        onClick={logoutHandler}
                                        className="flex items-center gap-2"
                                    >
                                        <LogOut size={18} /> Logout
                                    </button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

            </div>
        </div>
    );
};


export default Navbar