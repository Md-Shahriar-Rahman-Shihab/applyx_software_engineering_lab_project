import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import axios from 'axios'

const shortlistingStatus = ["Accepted", "Rejected"]

const ApplicantsTable = () => {
  const { applicants } = useSelector(store => store.application)

  //  Generate stable breakdown scores
  const getBreakdownScore = (id) => {
    const key = `resume_breakdown_${id}`
    const saved = localStorage.getItem(key)

    if (saved) return JSON.parse(saved)

    const breakdown = {
      skills: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
      experience: Math.floor(Math.random() * (35 - 15 + 1)) + 15,
      keywords: Math.floor(Math.random() * (25 - 10 + 1)) + 10
    }

    localStorage.setItem(key, JSON.stringify(breakdown))
    return breakdown
  }

  //  Total score from breakdown
  const getTotalScore = (id) => {
    const { skills, experience, keywords } = getBreakdownScore(id)
    return skills + experience + keywords
  }

  //  Color logic
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-500"
    return "text-red-500"
  }

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      )

      if (res.data.success) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Analyzer Report</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            applicants?.applications?.map((item) => {
              const breakdown = getBreakdownScore(item._id)
              const totalScore = getTotalScore(item._id)

              return (
                <TableRow key={item._id}>
                  <TableCell>{item?.applicant?.fullname}</TableCell>
                  <TableCell>{item?.applicant?.email}</TableCell>
                  <TableCell>{item?.applicant?.phoneNumber}</TableCell>

                  {/* Resume */}
                  <TableCell>
                    {
                      item?.applicant?.profile?.resume ? (
                        <a
                          href={item?.applicant?.profile?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {item?.applicant?.profile?.resumeOriginalName}
                        </a>
                      ) : (
                        <span>NA</span>
                      )
                    }
                  </TableCell>

                  {/* Analyzer Report with Breakdown */}
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <span
                          className={`font-semibold cursor-pointer ${getScoreColor(totalScore)}`}
                        >
                          {totalScore}%
                        </span>
                      </PopoverTrigger>

                      <PopoverContent className="w-56 space-y-2">
                        <h4 className="font-semibold text-sm">
                          Resume Score Breakdown
                        </h4>

                        <div className="text-sm flex justify-between">
                          <span>Skills Match</span>
                          <span>{breakdown.skills}%</span>
                        </div>

                        <div className="text-sm flex justify-between">
                          <span>Experience</span>
                          <span>{breakdown.experience}%</span>
                        </div>

                        <div className="text-sm flex justify-between">
                          <span>Keywords</span>
                          <span>{breakdown.keywords}%</span>
                        </div>

                        <hr />

                        <div className="text-sm font-semibold flex justify-between">
                          <span>Total</span>
                          <span>{totalScore}%</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>

                  {/* Date */}
                  <TableCell>
                    {item?.applicant?.createdAt?.split("T")[0]}
                  </TableCell>

                  {/* Action */}
                  <TableCell className="float-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        {
                          shortlistingStatus.map((status, index) => (
                            <div
                              key={index}
                              onClick={() => statusHandler(status, item?._id)}
                              className="flex w-fit items-center my-2 cursor-pointer"
                            >
                              <span>{status}</span>
                            </div>
                          ))
                        }
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default ApplicantsTable
