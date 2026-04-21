import { Field, FieldDescription, FieldLabel } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import React, { useRef } from "react";

const FormInput = ({ labelText, id, fieldDescription, layout, ...props }) => {

     const isRow = layout === "row";

     return (

          <Field className={isRow ? "grid grid-cols-3 items-center gap-4" : "flex flex-col gap-2"}>
               <FieldLabel htmlFor={id}>{labelText}</FieldLabel>
               <div className={isRow ? "col-span-2" : ""}>
                    <Input id={id} {...props} />
                    {fieldDescription && <FieldDescription>{fieldDescription}
                    </FieldDescription>}</div>








          </Field>
     );
}

export default FormInput;