import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";


import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import {
     Popover,
     PopoverContent,
     PopoverTrigger,
} from "@/components/ui/popover"

const FormCalendar = ({ name, value, className, minDate, autoComplete, required, isFocused, handleChange, labelText, error, showYearPicker, dateFormat }) => {
     const [open, setOpen] = React.useState(false)
     const [date, setDate] = React.useState(undefined)
     const input = useRef(null);
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     const parsedDate = value ? new Date(value) : undefined;

     return (

          <>
               <Field className="grid grid-cols-3">

                    <FieldLabel htmlFor="date" >{labelText}</FieldLabel>
                    <div className="col-span-2">
                         
                         <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger asChild>
                                   <Button
                                        variant="outline"
                                        id="date"
                                        className="justify-start font-normal w-64"
                                   >
                                       {parsedDate
                                ? parsedDate.toLocaleDateString()
                                : "Select date"}
                                   </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-full overflow-hidden p-0 bg-white" align="start">
                                   <Calendar
                                        mode="single"
                                        selected={date}
                                        defaultMonth={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                           
                                            handleChange(date)
                                            
                                             setOpen(false)
                                        }}
                                   />
                              </PopoverContent>
                         </Popover>
                    </div>

               </Field>
             

          </>

     );
}

export default FormCalendar;