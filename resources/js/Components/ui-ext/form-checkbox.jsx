import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"

export default function FormCheckboxGroup({ name, label, options, value, handleChange }) {

    return (
        <FieldSet>
            <FieldLegend variant="label">
                Relation
            </FieldLegend>
            {/* <FieldDescription>
                {label}
            </FieldDescription> */}
            <FieldGroup className="gap-3 grid grid-cols-2  "  >

                {options.map((option, index) => {

                    const isChecked = value.includes(option.value)
                    const id = `${name}_${option.value}`
                    return (<Field orientation="horizontal">



                        <Checkbox
                            id={id}
                            checked={isChecked}
                            
                            onCheckedChange={(checked) => {
                                let updatedList = []

                                if (checked) {
                                    updatedList = [...value, option.value]
                                } else {
                                    updatedList = value.filter(
                                        (item) => item !== option.value
                                    )
                                }

                                handleChange(updatedList)
                            }}
                        />



                        <FieldLabel
                            htmlFor={id}
                            className="font-normal"
                        >
                            {option.value}
                        </FieldLabel>
                    </Field>)
                })}



            </FieldGroup>
        </FieldSet>
    )
}
