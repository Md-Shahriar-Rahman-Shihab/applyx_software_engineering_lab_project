import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import { Plus } from 'lucide-react'

const AdminJobs = () => {
  useGetAllAdminJobs()
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSearchJobByText(input))
  }, [input])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            
            {/* Search */}
            <div className="w-full sm:w-72">
              <Input
                placeholder="Search by job title or role..."
                onChange={(e) => setInput(e.target.value)}
                className="h-11 rounded-lg"
              />
            </div>

            {/* Button */}
            <Button
              onClick={() => navigate('/admin/jobs/create')}
              className="h-11 rounded-lg bg-[#6A38C2] hover:bg-[#5a2fb0] flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Job
            </Button>

          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <AdminJobsTable />
        </div>
      </div>
    </div>
  )
}

export default AdminJobs
