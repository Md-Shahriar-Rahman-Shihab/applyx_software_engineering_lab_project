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

  // 🔹 Stable analyzer score (localStorage based)
  const getAnalyzerScore = (id) => {
    const key = `analyzer_score_${id}`
    const savedScore = localStorage.getItem(key)

    if (savedScore) {
      return Number(savedScore)
    }

    const randomScore =
      Math.floor(Math.random() * (100 - 50 + 1)) + 50

    localStorage.setItem(key, randomScore)
    return randomScore
  }

  // 🎨 Score color logic
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
              const score = getAnalyzerScore(item._id)

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
                          className="text-blue-600 cursor-pointer"
                          href={item?.applicant?.profile?.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item?.applicant?.profile?.resumeOriginalName}
                        </a>
                      ) : (
                        <span>NA</span>
                      )
                    }
                  </TableCell>

                  {/* Analyzer Report */}
                  <TableCell>
                    <span className={`font-semibold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
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
