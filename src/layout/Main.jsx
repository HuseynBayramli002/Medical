import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hospitalsEndpoints } from '@/services/api/endpoints';
import { getData } from '@/services/api/requests';
import Services from './Services';
import { useForm, FormProvider, Controller } from 'react-hook-form';

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

    return (
        <div className="container mt-5 flex w-full gap-5 items-stretch h-[500px]">
            <div className='flex flex-col bg-slate-100 w-2/5 p-4 rounded-xl'>
                <p className="text-cyan-600 w-full text-center text-sm">Compare hospitals by all services based on price</p>
                <div className="bg-slate-50 flex flex-col">
                    <FormProvider {...methods}>
                        <form>
                            <div>
                                <Controller
                                    name="selectedHospitals"
                                    control={methods.control}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                        <Select onValueChange={(value) => {
                                            const updatedSelected = handleHospitalSelect(value);
                                            field.onChange(updatedSelected);
                                        }}>
                                            <SelectTrigger className="w-[180px] text-center">
                                                <SelectValue>
                                                    {"Hospitals"}
                                                </SelectValue>
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectGroup>
                                                    {hospitals?.map((hospital) => (
                                                        <SelectItem key={hospital.id} value={hospital.id}>
                                                            {selectedHospitals.includes(hospital.id) && "✓ "}
                                                            {hospital.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                        </form>
                    </FormProvider>
                    <div>
                        <div className="list-disc list-inside mt-3">

                            {selectedHospitals.length === 0 && hospitals.map((hospital) => (
                                <p key={hospital.id} className="text-gray-800 pb-2 pl-3">
                                    {hospital.name}
                                </p>
                            ))}
                            {selectedHospitals.map((hospitalIds, index) => (
                                <p key={index} className="text-gray-800 pb-2 pl-3">
                                    {hospitals.find(hospital => hospital.id === hospitalIds)?.name}
                                </p>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* <Services selectedHospitals={selectedHospitals} /> */}
        </div>
    );
};

export default Main;
