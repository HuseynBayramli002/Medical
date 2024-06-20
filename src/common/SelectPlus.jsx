import React from 'react';
import { Controller } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelectPlus = ({ handleItemSelect, selectedItems, placeholder, items, control }) => {
    return (
        <div className="container mt-5 w-full gap-5 items-stretch h-[500px]">
            <div>
                <Controller
                    name="selectedHospitals"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                        <Select onValueChange={(value) => {
                            const updatedSelected = handleItemSelect(value);
                            field.onChange(updatedSelected);
                        }}>
                            <SelectTrigger className="w-[180px] text-center">
                                <SelectValue placeholder={placeholder}>
                                    {placeholder}
                                </SelectValue>
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                    {items?.map((item) => (
                                        <SelectItem key={item.id} value={item.id}>
                                            {Array.isArray(selectedItems) && selectedItems.includes(item.id) && "✓ "}
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>
            <div>
                <div className="list-disc list-inside mt-3">
                    {Array.isArray(selectedItems) && selectedItems.length === 0 && items?.map((item) => (
                        <p key={item.id} className="text-gray-800 pb-2 pl-3">
                            {item.name}
                        </p>
                    ))}
                    {Array.isArray(selectedItems) && selectedItems.map((hospitalId, index) => (
                        <p key={index} className="text-gray-800 pb-2 pl-3">
                            {items?.find(hospital => hospital.id === hospitalId)?.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectPlus;
