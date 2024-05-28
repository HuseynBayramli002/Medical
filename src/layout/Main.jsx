import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hospitalsEndpoints } from '@/services/api/endpoints';
import { getData } from '@/services/api/requests';
import SelectAll from '@/common/SelectAll';

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
        } else { // Seçili değilse ekle
            setSelectedHospitals([...selectedHospitals, hospital]);
        }
    };

    return (
        <div className="container mt-5">
            <div className='flex flex-col bg-slate-100 w-1/3 p-4 rounded-xl'>
                <p className="text-cyan-600 w-full text-center">Compare hospitals by all services based on price</p>
                <div className="h-[406px]">
                    <Select>
                        <SelectTrigger className="w-[180px] text-center">
                            <SelectValue placeholder="Hospitals" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {hospitals?.map((hospital, index) => (
                                    <SelectItem key={index} value={hospital.name} onClick={() => handleHospitalSelect(hospital.name)}>
                                        {hospital.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <div>
                    <div>Hospitals</div>
                    <SelectAll/>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Main;