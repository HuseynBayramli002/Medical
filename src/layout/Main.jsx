import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hospitalsEndpoints } from '@/services/api/endpoints';
import { getData } from '@/services/api/requests';
import Services from './Services';
// import SelectAll from '@/common/SelectOne';
const Main = () => {
    const monthData = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospitals, setSelectedHospitals] = useState([]); // Seçili hastaneleri tutacak state

    const handleHospitals = async () => {
        try {
            const response = await getData(hospitalsEndpoints.hospitals);
            setHospitals(response);
        } catch (error) {
            console.error("Error fetching hospitals:", error);
        }
    };

    useEffect(() => {
        handleHospitals();
    }, []);

    const handleHospitalSelect = (hospital) => {
        if (selectedHospitals.includes(hospital)) { // Zaten seçiliyse kaldır
            setSelectedHospitals(selectedHospitals.filter(h => h !== hospital));
            console.log(`Removed hospital: ${hospital}`);
        } else { // Seçili değilse ekle
            setSelectedHospitals([...selectedHospitals, hospital]);
            console.log(`Added hospital: ${hospital}`);
        }
    };

    return (
        <div className="container mt-5 flex w-full gap-5 items-stretch h-[500px]">
            <div className='flex flex-col bg-slate-100 w-2/5 p-4 rounded-xl'>
                <p className="text-cyan-600 w-full text-center text-sm">Compare hospitals by all services based on price</p>
                <div className=" bg-slate-50 flex flex-col">
                    <Select onValueChange={handleHospitalSelect}>
                        <SelectTrigger className="w-[180px] text-center">
                            <SelectValue  placeholder="Hospitals" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='z-[-100]'>
                                {hospitals?.map((hospital, index) => (
                                    <SelectItem key={index} value={hospital.name}>
                                        {hospital.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div> <ul className="list-disc list-inside">
                        {selectedHospitals.map((hospital, index) => (
                            <li key={index} className="text-gray-800">{hospital}</li>
                        ))}
                    </ul></div>
                </div>
            </div>
            <Services />
            
        </div>
    );
};

export default Main;
