import FormRadio from "@/Pages/Shared/FormRadio";
import { BOOLYESNO } from "../Helper";
 
import FormInput from "@/Pages/Shared/FormInput";
import FormRadioRow from "@/Pages/Shared/FormRadioRow";
import { Card, CardContent } from "@/Components/ui/card";


export default function MedicalHistoryField({ labelText, fieldName, handleFieldData,
    errorfieldData, selectedValue,
    duration, handleDuration, errorDuration,
    treatment, handleTreatementChange, errorTreatment,
    othersValue, handleOthersValue
}) {
 

    return (
        <div className="mt-3 space-y-3 border-b border-gray-200" >
            <FormRadioRow
                type="radio"
                labelText={labelText}
                options={BOOLYESNO}
                name={fieldName}
                handleChange={handleFieldData}
                selectedValue={selectedValue !== null && selectedValue}
                error={errorfieldData}
                className={`${errorfieldData ? 'is-invalid' : ''}`}
            />
            {selectedValue === '1' && (
                <Card className="mb-3" >
                    <CardContent>
                     
                    <div className="grid grid-cols-2 gap-3 ">
                        {fieldName === 'others' && (
                            <FormInput
                                labelText='Specify'
                                name={`${fieldName}_specify`}
                                value={othersValue}
                                onChange={handleOthersValue}
                                error={errorDuration}
                                className={`${errorDuration ? 'is-invalid' : ''}`}
                            />
                        )}

                        <FormInput
                            labelText='Duration'
                            value={duration}
                            name={`${fieldName}_duration`}
                            onChange={handleDuration} />

 
                        <FormRadio
                            labelText="On Treatment?"
                            options={BOOLYESNO}
                            name={fieldName + '_treatment'}
                            handleChange={handleTreatementChange}
                            value={treatment}
                            error={errorTreatment}
                            className={`${errorTreatment ? 'is-invalid' : ''}`}
                        />
                        </div>
                     
</CardContent>
                </Card>

            )

            }
        </div>
    );

}