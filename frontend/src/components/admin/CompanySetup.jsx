import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2, Building2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
  const { id } = useParams()
  useGetCompanyById(id)

  const { singleCompany } = useSelector(store => store.company)

  const [input, setInput] = useState({
    name: '',
    description: '',
    website: '',
    location: '',
    file: null,
  })

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const changeEventHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = e => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submitHandler = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', input.name)
    formData.append('description', input.description)
    formData.append('website', input.website)
    formData.append('location', input.location)
    if (input.file) formData.append('file', input.file)

    try {
      setLoading(true)
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        }
      )

      if (res.data.success) {
        toast.success(res.data.message)
        navigate('/admin/companies')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (singleCompany) {
      setInput({
        name: singleCompany.name || '',
        description: singleCompany.description || '',
        website: singleCompany.website || '',
        location: singleCompany.location || '',
        file: null,
      })
    }
  }, [singleCompany])

  return (
    <div className="min-h-screen bg-white">
    
      <div className="pt-6">
          <Navbar />
      </div>

      <div className="max-w-3xl mx-auto mt-10 px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/admin/companies')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <h1 className="text-xl font-semibold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#6A38C2]" />
            Company Setup
          </h1>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label>Company Name</Label>
                <Input
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <Label>Location</Label>
                <Input
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                  placeholder="Company location"
                />
              </div>

              <div>
                <Label>Website</Label>
                <Input
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <Label>Logo</Label>
                <Input type="file" accept="image/*" onChange={changeFileHandler} />
              </div>
            </div>

            <div>
              <Label>Description</Label>
              <Input
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="Short company description"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#6A38C2] hover:bg-[#5b2fb3]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Company'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompanySetup
