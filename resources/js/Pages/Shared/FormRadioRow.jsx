import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const FormRadioRow = ({ name, selectedValue, options, handleChange, labelText, error }) => {

    
     return (
          <div className="grid grid-cols-4 space-y-3">
               <div className="col-span-3"><Label >{labelText}</Label></div>
               <div >

                    <RadioGroup onValueChange={handleChange} value={selectedValue} className="flex gap-6 justify-between">
                         {options.map((option, index) => (



                              <div
                                   className="flex items-center gap-3"
                                   key={`${name}-${option.value}`}
                              >
                                   <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />


                                   <Label htmlFor={`${name}-${option.value}`}> {option.labelText} </Label>
                              </div>
                         ))}
                    </RadioGroup>

                    {error && <div className="invalid-feedback d-block">{error}</div>}
               </div>
          </div>

     );
}

export default FormRadioRow;