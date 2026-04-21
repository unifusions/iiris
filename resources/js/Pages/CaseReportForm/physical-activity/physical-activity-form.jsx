import SectionFooter from "@/Components/ui-ext/section/section-footer";
import { CardContent, CardFooter } from "@/Components/ui/card";
import PhysicalActivityPreForm from "./physical-activity-pre-form";

import { Button } from "@/Components/ui/button";
import { CheckCircle, CircleX } from "lucide-react";
import PhysicalActivityFormDialog from "./physical-acitivity-form-dialog";
import PhysicalActivityTable from "./physical-activity-table";

export default function PhysicalActivityForm({ crf, entity, entityType, isPhyAct, onCancel, physicalactivites }) {
    return (

        <>
            <CardContent className=" mb-6" >
                {(isPhyAct === undefined || isPhyAct === null) && <PhysicalActivityPreForm
                    crf={crf}
                    entity={entity}
                    entityType={entityType}
                    onCancel={onCancel}
                />}


                <div className="grid grid-cols-4 mt-3">
                    <div className="col-span-3">

                        <PhysicalActivityTable physicalactivities={physicalactivites} crf={crf}
                            entity={entity}
                            entityType={entityType} deletable={true} />
                    </div>
                    <div className="text-right">
                        {
                            entity.physical_activity === 1 && <PhysicalActivityFormDialog
                                crf={crf}
                                entity={entity}
                                entityType={entityType}
                            />
                        }
                    </div>
                </div>





            </CardContent>


            <CardFooter className="border-t border-gray-200  ">
                <Button type="button" variant="secondary" className="gap-3"
                    onClick={onCancel}> <CheckCircle />
                    Finish Editing </Button>
            </CardFooter>
        </>
    )
}