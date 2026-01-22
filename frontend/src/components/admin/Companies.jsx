import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";
import { Plus } from "lucide-react";

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Companies</h1>
            <p className="text-sm text-gray-500">
              Manage registered companies here
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <Input
              className="w-64"
              placeholder="Filter by company name"
              onChange={(e) => setInput(e.target.value)}
            />

            <Button
              onClick={() => navigate("/admin/companies/create")}
              className="flex items-center gap-2 bg-[#6A38C2]"
            >
              <Plus size={16} />
              New Company
            </Button>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
};

export default Companies;
