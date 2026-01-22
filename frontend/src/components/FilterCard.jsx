import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { MapPin, Briefcase, Wallet } from 'lucide-react'

const filterData = [
    {
        filterType: "Location",
        icon: <MapPin className="h-4 w-4 text-indigo-600" />,
        array: ["Dhaka", "Rajshahi", "Rangpur", "Sylhet"],
    },
    {
        filterType: "Industry",
        icon: <Briefcase className="h-4 w-4 text-emerald-600" />,
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        filterType: "Salary",
        icon: <Wallet className="h-4 w-4 text-rose-600" />,
        array: ["0-40k", "42k-1 Lakh", "1 Lakh - 5 Lakh"]
    },
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue, dispatch]);

    return (
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-5 sticky top-24">
            <h1 className="text-xl font-bold text-gray-900 mb-4">
                Filter Jobs
            </h1>

            <RadioGroup
                value={selectedValue}
                onValueChange={setSelectedValue}
                className="space-y-6"
            >
                {filterData.map((data, index) => (
                    <div key={index} className="space-y-3">
                        {/* Section Title */}
                        <div className="flex items-center gap-2">
                            {data.icon}
                            <h2 className="text-md font-semibold text-gray-800">
                                {data.filterType}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="space-y-2 pl-1">
                            {data.array.map((item, idx) => {
                                const itemId = `filter-${index}-${idx}`;
                                return (
                                    <Label
                                        key={itemId}
                                        htmlFor={itemId}
                                        className={`flex items-center gap-3 rounded-lg border px-3 py-2 cursor-pointer transition-all
                                        ${selectedValue === item
                                                ? 'border-indigo-500 bg-indigo-50'
                                                : 'border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <RadioGroupItem value={item} id={itemId} />
                                        <span className="text-sm text-gray-700">
                                            {item}
                                        </span>
                                    </Label>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterCard
