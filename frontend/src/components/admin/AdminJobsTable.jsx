import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Edit2, Eye } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector(store => store.job)
  const [filterJobs, setFilterJobs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const filtered = allAdminJobs.filter(job => {
      if (!searchJobByText) return true
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase())
      )
    })
    setFilterJobs(filtered)
  }, [allAdminJobs, searchJobByText])

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
      <Table>
        <TableCaption className="text-slate-500 py-4">
          Recently posted jobs
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-10 text-slate-500"
              >
                No jobs found
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map(job => (
              <TableRow
                key={job._id}
                className="hover:bg-slate-50 transition"
              >
                <TableCell className="font-medium">
                  {job?.company?.name}
                </TableCell>

                <TableCell>
                  <Badge variant="outline">{job?.title}</Badge>
                </TableCell>

                <TableCell className="text-slate-500">
                  {job?.createdAt?.split('T')[0]}
                </TableCell>

                {/* ACTION BUTTONS */}
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        navigate(`/admin/companies/${job._id}`)
                      }
                      className="flex items-center gap-1"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center gap-1 bg-[#6A38C2] hover:bg-[#5b2fb3]"
                    >
                      <Eye className="w-4 h-4" />
                      Applicants
                    </Button>

                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminJobsTable
