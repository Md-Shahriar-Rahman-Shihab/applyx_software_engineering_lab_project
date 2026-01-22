import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany = companies.filter((company) => {
      if (!searchCompanyByText) return true;
      return company?.name
        ?.toLowerCase()
        .includes(searchCompanyByText.toLowerCase());
    });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="rounded-lg max-w-6xl overflow-hidden">
      <Table>
        <TableCaption className="text-gray-500 mt-4">
          A list of your registered companies
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterCompany?.map((company) => (
            <TableRow
              key={company._id}
              className="hover:bg-gray-50 transition"
            >
              <TableCell>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>

              <TableCell className="font-medium">
                {company.name}
              </TableCell>

              <TableCell className="text-gray-600">
                {company.createdAt.split("T")[0]}
              </TableCell>

              <TableCell className="text-right">
                <Button
                  size="sm"
                  className="bg-[#6A38C2] hover:bg-[#5a2fb0] text-white"
                  onClick={() =>
                    navigate(`/admin/companies/${company._id}`)
                  }
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
