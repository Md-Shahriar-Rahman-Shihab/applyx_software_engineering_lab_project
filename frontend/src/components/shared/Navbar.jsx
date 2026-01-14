import React, { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, Menu, X, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, {
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    };

    return (
        <header className="mx-auto mt-4 max-w-6xl rounded-full bg-white shadow px-6 py-3 flex items-center justify-between relative">
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
                Apply<span className="text-[#F83002]">X</span>
            </Link>

            {/* CENTER MENU */}
            {(!user || user.role !== "recruiter") && (
                <nav
                    className={`absolute md:static top-full left-0 w-full md:w-auto 
                    bg-white/70 backdrop-blur md:bg-transparent
                    flex flex-col md:flex-row items-center gap-6 md:gap-8
                    transition-all duration-300 overflow-hidden
                    ${open ? "max-h-96 py-6" : "max-h-0 md:max-h-full"}`}
                >
                    <Link className="hover:text-indigo-600" to="/">Home</Link>
                    <Link className="hover:text-indigo-600" to="/jobs">Jobs</Link>
                    <Link className="hover:text-indigo-600" to="/browse">Browse</Link>
                    <Link className="hover:text-indigo-600" to="/about-us">About Us</Link>
                    <Link className="hover:text-indigo-600" to="/learn">Learn</Link>

                    {/* Mobile Close */}
                    <button
                        onClick={() => setOpen(false)}
                        className="md:hidden text-gray-600"
                    >
                        <X />
                    </button>
                </nav>
            )}

            {/* Recruiter Menu */}
            {user?.role === "recruiter" && (
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/admin/companies">Companies</Link>
                    <Link to="/admin/jobs">Jobs</Link>
                </nav>
            )}

            {/* Right Side */}
            <div className="flex items-center gap-3">
                {!user ? (
                    <>
                        <Link to="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700">
                                Sign up
                            </Button>
                        </Link>
                    </>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src={user?.profile?.profilePhoto} />
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className="w-72">
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

                            <div className="mt-4 flex flex-col gap-3 text-gray-600">
                                {user?.role === "student" && (
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-2"
                                    >
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-600"
                >
                    <Menu />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
