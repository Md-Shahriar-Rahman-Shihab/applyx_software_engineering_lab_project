import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import { Building2 } from "lucide-react";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        navigate(`/admin/companies/${res.data.company._id}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex items-center justify-center mt-16 px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-indigo-100 text-[#6A38C2]">
              <Building2 />
            </div>
            <div>
              <h1 className="text-xl font-bold">Create Company</h1>
              <p className="text-sm text-gray-500">
                You can update company details anytime
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <Label className="text-gray-700">Company Name</Label>
              <Input
                type="text"
                placeholder="e.g. JobHunt, Microsoft"
                className="mt-2"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-8">
            <Button
              variant="outline"
              className="border-gray-300"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>

            <Button
              className="bg-[#6A38C2] hover:bg-[#5a2fb0] text-white"
              onClick={registerNewCompany}
              disabled={!companyName}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
