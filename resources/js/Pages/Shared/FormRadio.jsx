import React from "react";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Field, FieldLabel } from "@/Components/ui/field";

const FormRadio = ({
    labelText,
    name,
    options = [],
    layout = "column",
    optionsLayout = "vertical",
    columns = 2,
    value,
    handleChange,
    disabled,
    error,
    others
}) => {

    const isRow = layout === "row";

    const getOptionsClass = () => {
        switch (optionsLayout) {
            case "horizontal":
                return "flex flex-row gap-4 flex-wrap items-center";
            case "grid":
                return `grid grid-cols-${columns} gap-3`;
            default:
                return "flex flex-col gap-2"; // vertical
        }
    };

    return (
        <Field className={isRow
            ? "grid grid-cols-3 items-start gap-4"
            : "flex flex-col gap-2"
        }>
            <FieldLabel className={isRow ? "col-span-1  " : ""}>{labelText}</FieldLabel>

            <div className={isRow ? "col-span-2" : ""}>    <RadioGroup
                value={value}
                onValueChange={handleChange}
                className={getOptionsClass()}
            >
                {options.map((option) => {
                    const id = `${name}-${option.value}`;

                    return (
                        <div key={id} className="flex items-center gap-2">
                            <RadioGroupItem
                                value={option.value}
                                id={id}
                                disabled={disabled || option.disabled}
                            />
                            <Label htmlFor={id} className="whitespace-nowrap">
                                {option.labelText}
                            </Label>
                        </div>
                    );
                })}
                   {others && others} 

            </RadioGroup>
            </div>

            {error && (
                <div className="text-sm text-red-500">
                    {error}
                </div>
            )}
        </Field>
    );
};

export default FormRadio;