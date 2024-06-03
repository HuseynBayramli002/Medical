import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelectPlus = ({ handleItemSelect, selectedItems, placeholder, item }) => {
    const methods = useForm();

    return (
        <div className="container mt-5 w-full gap-5 items-stretch h-[500px]">
            <FormProvider {...methods}>
                <form>
                    <div>
                        <Controller
                            name="selectedHospitals"
                            control={methods.control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <Select onValueChange={(value) => {
                                    const updatedSelected = handleItemSelect(value);
                                    field?.onChange(updatedSelected);
                                }}>
                                    <SelectTrigger className="w-[180px] text-center">
                                        <SelectValue placeholder={placeholder}>
                                            {placeholder}
                                        </SelectValue>
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            {item?.map((item) => (
                                                <SelectItem key={item.id} value={item.id}>
                                                    {selectedItems?.includes(item.id) && "✓ "}
                                                    {item.name}
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
                    {selectedItems?.length === 0 && item.map((item) => (
                        <p key={item.id} className="text-gray-800 pb-2 pl-3">
                            {item.name}
                        </p>
                    ))}
                    {selectedItems?.map((hospitalIds, index) => (
                        <p key={index} className="text-gray-800 pb-2 pl-3">
                            {item?.find(hospital => hospital.id === hospitalIds)?.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectPlus;
