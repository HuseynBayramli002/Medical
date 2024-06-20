import React, { useState, useEffect } from 'react';
import { hospitalsEndpoints } from '@/services/api/endpoints';
import { getData } from '@/services/api/requests';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import SelectPlus from '@/common/SelectPlus';

const Main = () => {
    const [hospitals, setHospitals] = useState([]);
    const methods = useForm();
console.log(methods)
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

    const handleHospitalSelect = (value) => {
        const currentSelected = methods.getValues('selectedHospitals') || [];
        const newSelected = currentSelected.includes(value)
            ? currentSelected.filter(id => id !== value)
            : [...currentSelected, value];

        methods.setValue('selectedHospitals', newSelected);
        return newSelected;
    };

    return (
        <FormProvider {...methods}>
            <form className="container mt-5 flex w-full gap-5 items-stretch h-[500px]">
                <div className='flex flex-col bg-slate-100 w-2/5 p-4 rounded-xl'>
                    <p className="text-cyan-600 w-full text-center text-sm">Compare hospitals by all services based on price</p>
                    <div className="bg-slate-50 flex flex-col">
                        <SelectPlus
                            control={methods.control}
                            placeholder="Hospitals"
                            selectedItems={methods.watch('selectedHospitals') || []}
                            handleItemSelect={handleHospitalSelect}
                            items={hospitals}
                        />
                    </div>
                </div>
                <div className='bg-slate-100 w-full p-4 rounded-xl'>
                    <p className='text-cyan-600 w-full text-center text-sm'>Compare hospitals by selected services based on price</p>
                </div>
            </form>
        </FormProvider>
    );
};

export default Main;
