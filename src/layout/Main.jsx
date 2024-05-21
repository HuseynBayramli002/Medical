import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Main = () => {
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
                                <SelectItem value="apple"></SelectItem>
                                
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default Main