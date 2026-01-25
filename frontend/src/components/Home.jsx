import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Marquee from './Marqueee'
import Testimonial from './Testimonial'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
return (
  <div className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient.png')] bg-cover text-sm text-gray-800 max-md:px-4 text-center h-[785px] pt-6">
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <Marquee/>
      <LatestJobs />
      <Testimonial/>
      <Footer />
    </div>
  )
}

export default Home