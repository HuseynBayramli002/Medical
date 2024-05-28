<div className="sector w-[15%]">
    <FormField
        control={form.control}
        name="sector"
        render={({ field }) => (
            <FormItem className="flex flex-col ">
                <Popover >
                    <PopoverTrigger asChild >
                        <FormControl >
                            <Button className=" dropDownBtn w-full bg-[#fafafa] border [&>svg]:data-[state=open]:rotate-180 [&>svg]:data-[state=open]:text-white [&>svg]:data-[state=open]:hover:text-white data-[state=open]:bg-orange249 data-[state=open]:border-orange249 data-[state=open]:text-white text-[#1F3751] border-solid border-[#eceded] transition-all duration-300 relative flex justify-between group hover:border-orange249 hover:text-orange249 hover:bg-white" variant="outline"
                            >Sector
                                <TiArrowSortedDown className="text-[#D4D4D4] text-xl transition-all duration-300 group-hover:text-orange249 " />
                            </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full bg-white p-0  rounded-none">
                        <Command className=" bg-white">
                            <CommandList className="bg-white">
                                <CommandGroup className="  p-0">
                                    {Sector?.map((item) => (
                                        <CommandItem
                                            className={cn(" group flex justify-between rounded-none border-b  px-4 h-10 ",
                                                field.value.includes(item.id) ? 'text-blue31' : 'text-black'
                                            )}
                                            value={item.id?.toString()}
                                            key={item.id}
                                            onSelect={() => {
                                                const selectvalue = form.watch('sector')
                                                if (!selectvalue.includes(item.id)) {
                                                    form.setValue('sector', [...selectvalue, item.id])
                                                } else {
                                                    form.setValue('sector', selectvalue.filter(value => value !== item.id));
                                                }
                                            }
                                            }
                                        >
                                            {item.name}
                                            <div className=" border bg-white border-[#D4D4D4] h-5 w-5 text-center ">
                                                <FaCheck
                                                    className={cn("mr-2 h-4 w-4  group-hover:text-[#D4D4D4]",
                                                        field.value.includes(item.id) ? 'text-blue31 group-hover:text-blue31' : 'text-white'
                                                    )}
                                                />
                                            </div>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <FormMessage />
            </FormItem>
        )}
    />
</div>