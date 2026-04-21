
import { Badge } from "@/Components/ui/badge";
import { NotAvailable, PREDEFINED_MEDICAL_HISTORY_FIELDS, RenderBoolYesNo } from "../Helper";

export default function DisplayFieldData({ medicalhistory }) {

    return (
        <>
            {
                PREDEFINED_MEDICAL_HISTORY_FIELDS.map((field) => {
                    const treatment = medicalhistory[`${field.fieldName}_treatment`];

                    return (
                        <>
                            <div className='grid grid-cols-5'>
                                <div className='text-foreground/70 col-span-2'>
                                    {field.labelText}
                                </div>
                                <div className="col-span-3">
                                    <div className="grid grid-cols-2  ">
                                        <div >

                                            <div className="flex items-center gap-2">

                                                {field.fieldName === 'others' && medicalhistory[field.fieldName] === 1   ? <> 
                                                <span className="font-bold">Yes</span>     
                                                <span className="italics">{medicalhistory[`${field.fieldName}_specify`]}</span> 
                                                </> 
                                                    : <RenderBoolYesNo boolValue={medicalhistory[field.fieldName]} />
                                                }
 
                                                {medicalhistory[field.fieldName] === 1 && treatment != null && (
                                                    <Badge variant={treatment === 1 ? "success" : "destructive"}>
                                                        {treatment === 1 ? "On Treatment" : "Not on Treatment"}
                                                    </Badge>
                                                )}
                                            </div>


                                        </div>

                                        <div  >

                                            {medicalhistory[`${field.fieldName}_duration`] &&

                                                <>Duration : {medicalhistory[`${field.fieldName}_duration`] !== null ? medicalhistory[`${field.fieldName}_duration`] : <NotAvailable />}</>}

                                        </div>

                                    </div>

                                </div>
                            </div>


                        </>)
                }
                )


            }

        </>)
}
