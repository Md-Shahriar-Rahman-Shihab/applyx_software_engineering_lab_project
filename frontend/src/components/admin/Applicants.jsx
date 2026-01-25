import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(
                    `${APPLICATION_API_END_POINT}/${params.id}/applicants`,
                    { withCredentials: true }
                );
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-6">
                <Navbar />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                Applicants
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                All candidates who applied for this job
                            </p>
                        </div>

                        {/* Count Badge (NOT button) */}
                        <div className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                            Total: {applicants?.applications?.length || 0}
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-2xl shadow-sm border p-4">
                    <ApplicantsTable />
                </div>
            </div>
        </div>
    )
}

export default Applicants
