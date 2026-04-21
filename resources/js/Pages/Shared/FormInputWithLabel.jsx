import React, { useEffect, useRef } from "react";

import { Field, FieldLabel } from "@/components/ui/field"
import {
     InputGroup,
     InputGroupAddon,
     InputGroupInput,
     InputGroupText,
} from "@/components/ui/input-group"
const FormInputWithLabel = ({ units, labelText, layout,
     remarks, ...props }) => {


     const isRow = layout === "row";
     return (
          <>

               <Field className={isRow ? "grid grid-cols-3 items-center gap-4" : "flex flex-col gap-2"}>
                    <FieldLabel htmlFor="input-group-url">{labelText}</FieldLabel>
                    <div className={isRow ? "col-span-2 max-w-64" : ""}>
                         <InputGroup>
                              <InputGroupInput  {...props} />



                              {/* <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon> */}
                              <InputGroupAddon align="inline-end">
                                   {units && <span className="text-foreground/50 font-light">{units}</span>}
                              </InputGroupAddon>
                         </InputGroup>
                    </div>
               </Field>


               
          </>


     );
}

export default FormInputWithLabel;