// import React, { useState, useEffect } from 'react';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useForm, FormProvider, Controller } from 'react-hook-form';

// const SelectPlus = (props) => {
//     const [selectedHospitals, setSelectedHospitals] = useState([]);

    
//     const handleHospitalSelect = (value) => {
//         setSelectedHospitals(prevSelected => {
//             if (prevSelected.includes(value)) {
//                 return prevSelected.filter(h => h !== value);
//             } else {
//                 return [...prevSelected, value];
//             }
//         });
//     };
//     return (
//         <div className="bg-slate-50 flex flex-col">
//                 <form>
//                     <div>
//                         <Controller
//                             name="selectedHospitals"
//                             control={methods.control}
//                             defaultValue={[]}
//                             render={({ field }) => (
//                                 <Select onValueChange={(value) => {
//                                     const updatedSelected = handleHospitalSelect(value);
//                                     field.onChange(updatedSelected);
//                                 }}>
//                                     <SelectTrigger className="w-[180px] text-center">
//                                         <SelectValue>
//                                             {"Hospitals"}
//                                         </SelectValue>
//                                     </SelectTrigger>

//                                     <SelectContent>
//                                         <SelectGroup>
//                                             {hospitals?.map((hospital) => (
//                                                 <SelectItem key={hospital.id} value={hospital.id}>
//                                                     {selectedHospitals.includes(hospital.id) && "✓ "}
//                                                     {hospital.name}
//                                                 </SelectItem>
//                                             ))}
//                                         </SelectGroup>
//                                     </SelectContent>
//                                 </Select>
//                             )}
//                         />
//                     </div>
//                 </form>
            
//             <div>
//                 <div className="list-disc list-inside mt-3">

//                     {selectedHospitals.length === 0 && hospitals.map((hospital) => (
//                         <p key={hospital.id} className="text-gray-800 pb-2 pl-3">
//                             {hospital.name}
//                         </p>
//                     ))}
//                     {selectedHospitals.map((hospitalIds, index) => (
//                         <p key={index} className="text-gray-800 pb-2 pl-3">
//                             {hospitals.find(hospital => hospital.id === hospitalIds)?.name}
//                         </p>
//                     ))}

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default SelectPlus