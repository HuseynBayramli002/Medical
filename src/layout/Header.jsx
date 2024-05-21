import { Button } from "@/components/ui/button";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, { useState } from 'react';
const Header = () => {
    const monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    return (
        <div className="container mt-4 flex justify-between">
            <div className="flex gap-5">
                <Button
                    className="py-1 px-2 rounded-[7px] outline-none text-emerald-600 border border-neutral-300"
                >
                    Hospitals
                </Button>
                <Button
                    className="py-1 px-2 rounded-[7px] outline-none bg-emerald-600 border border-emerald-600 text-white "
                >
                    Services
                </Button>
            </div>
            <div className="flex gap-5 ">
                <Select onValueChange={(value) => setYear(value)}>
                    <SelectTrigger className="bg-neutral-200 border-none rounded-[7px] w-20">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={(value) => setMonth(value)}
                    disabled={!year}

                >
                    <SelectTrigger className="bg-neutral-200 border-none rounded-[7px] w-28">
                        <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="h-48">
                            {
                                monthData.map((month, index) => {
                                    return (
                                        <SelectItem key={index} value={index}>{month}</SelectItem>
                                    )
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    disabled={!month}
                >
                    <SelectTrigger className="bg-neutral-200 border-none rounded-[7px] w-16">
                        <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="h-48">
                            {
                                dayData.map((day, index) => {
                                    return (
                                        <SelectItem key={index} value={index}>{day}</SelectItem>
                                    )
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-5">
                <Button className="py-1 px-3 rounded-[7px] outline-none bg-cyan-600 text-white border">
                    Price
                </Button>
                <Button className="py-1 px-3 rounded-[7px] outline-none border">
                    Count
                    <HiOutlineDocumentSearch className="ml-2" />
                </Button>
                <Button className="py-1 px-3 rounded-[7px] outline-none border">
                    Number of patients
                    <MdOutlinePerson className="ml-2"/>
                </Button>
            </div>
        </div>
    )
}

export default Header