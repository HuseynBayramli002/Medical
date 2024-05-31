import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectOne = (props) => {
    const { selectData, selectValue, selectWidth, onSelect, disabled } = props;

    return (
        <div className="flex gap-5 ">
            <Select onValueChange={onSelect} disabled={disabled}>
                <SelectTrigger className="bg-neutral-200 border-none rounded-[7px]" style={{ width: selectWidth }} >
                    <SelectValue placeholder={selectValue} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="max-h-48">
                        {selectData?.map((data) => (
                            <SelectItem key={data} value={data}>
                                {data}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectOne;