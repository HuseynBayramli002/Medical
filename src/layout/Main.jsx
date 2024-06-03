import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hospitalsEndpoints } from '@/services/api/endpoints';
import { getData } from '@/services/api/requests';
// import Services from './Services';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import SelectPlus from '@/common/SelectPlus';

const Main = () => {
    const [hospitals, setHospitals] = useState([]);
    const [selectedHospitals, setSelectedHospitals] = useState([]);

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
    const methods = useForm();
    const handleHospitalSelect = (value) => {
        setSelectedHospitals(prevSelected => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter(h => h !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    // const ServicesData = async () => {
    //     try {
    //         const data = {
    //             hospital_ids: =,
    //             annotate_type: "", 
    //             service_id: , 
    //             dates: {
    //                 year: ,
    //                 month:,
    //                 day: 
    //             }
    //         };
    //         const response = await postData('/compare', data); 
    //         console.log("Compare response:", response);
    //     } catch (error) {
    //         console.error("Error comparing hospitals:", error);
    //     }
    // };

    return (
        <div className="container mt-5 flex w-full gap-5 items-stretch h-[500px]">
            <div className='flex flex-col bg-slate-100 w-2/5 p-4 rounded-xl'>
                <p className="text-cyan-600 w-full text-center text-sm">Compare hospitals by all services based on price</p>
                <div className="bg-slate-50 flex flex-col">
                    <SelectPlus placeholder="Hospitals" selectedItems={selectedHospitals} handleItemSelect={handleHospitalSelect} item={hospitals} />
                </div>
            </div>
            <div className='bg-slate-100 w-full p-4 rounded-xl'>
                <p className='text-cyan-600 w-full text-center text-sm'>Compare hospitals by selected services based on price</p>
                {/* <SelectPlus placeholder={Services} /> */}
            </div>
        </div>
    );
};

export default Main;
