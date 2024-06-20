import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { MdOutlinePerson } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useFormContext } from 'react-hook-form';
import SelectOne from "@/common/SelectOne";

const Header = () => {
    const yearData = ["2023", "2024"];
    const monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useFormContext();

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    const handleLogout = () => {
        localStorage.clear();
        console.log("Logged out and local storage cleared");
        navigate("/");
    };

    const onSubmit = (data) => {
        const formData = {
            services_ids: [], // formdaki hizmet ID'lerini buraya ekleyin
            annotate_type: "price", // veya "count"
            hospital_id: 1, // hastane ID'si burada belirtin
            dates: {
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay
            }
        };

        console.log(formData);
    };

    const handleSelectYear = (year) => {
        setSelectedYear(year);
        setValue("year", year); // form durumunu güncelle
    };

    const handleSelectMonth = (month) => {
        setSelectedMonth(month);
        setValue("month", month); // form durumunu güncelle
    };

    const handleSelectDay = (day) => {
        setSelectedDay(day);
        setValue("day", day); // form durumunu güncelle
    };

    return (
        <form className="container mt-4 flex justify-between" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-5">
                <Button className="py-1 px-2 rounded-[7px] outline-none text-emerald-600 border border-neutral-300">
                    Hospitals
                </Button>
                <Button className="py-1 px-2 rounded-[7px] outline-none bg-emerald-600 border border-emerald-600 text-white">
                    Services
                </Button>
            </div>
            <div className="flex gap-5">
                <SelectOne 
                    selectData={yearData} 
                    selectValue={'Yıl'} 
                    selectWidth={'80px'} 
                    onSelect={handleSelectYear}
                />
                <SelectOne 
                    selectData={monthData} 
                    selectValue={'Ay'} 
                    selectWidth={'112px'} 
                    onSelect={handleSelectMonth}
                    disabled={!selectedYear}
                />
                <SelectOne 
                    selectData={dayData} 
                    selectValue={'Gün'} 
                    selectWidth={'64px'} 
                    onSelect={handleSelectDay}
                    disabled={!selectedYear || !selectedMonth}
                />
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
                    <MdOutlinePerson className="ml-2" />
                </Button>
            </div>
            <Button className="py-1 px-3 rounded-[7px] outline-none border" onClick={handleLogout}>
                Log out
                <CiLogout className="ml-2"/>
            </Button>
            <Button type="submit" className="py-1 px-3 rounded-[7px] outline-none border">
                Submit
            </Button>
        </form>
    )
}

export default Header;
