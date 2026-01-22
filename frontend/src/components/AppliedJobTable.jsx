import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const statusStyle = {
  rejected: "bg-red-100 text-red-600",
  pending: "bg-yellow-100 text-yellow-600",
  accepted: "bg-green-100 text-green-600",
};

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <Table>
        <TableCaption className="text-gray-500">
          A list of jobs you have applied for
        </TableCaption>

        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {allAppliedJobs?.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-400 py-6">
                You haven't applied for any job yet
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob._id}
                className="hover:bg-gray-50 transition"
              >
                <TableCell>
                  {appliedJob?.createdAt
                    ? new Date(appliedJob.createdAt).toLocaleDateString()
                    : "N/A"}
                </TableCell>

                <TableCell className="font-medium">
                  {appliedJob?.job?.title || "N/A"}
                </TableCell>

                <TableCell>
                  {appliedJob?.job?.company?.name || "N/A"}
                </TableCell>

                <TableCell className="text-right">
                  <Badge
                    className={`capitalize px-3 py-1 ${
                      statusStyle[appliedJob?.status] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {appliedJob?.status || "unknown"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
