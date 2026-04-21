import { CardContent, CardFooter } from "@/Components/ui/card";
import SurgicalHistoryPreForm from "./surgical-history-pre-form";
import { Button } from "@/Components/ui/button";
import { CheckCircle } from "lucide-react";
import SurgicalHistoryFormDialog from "./surgical-history-form-dialog";
import SurgicalHistoryDataTable from "./surgical-history-data-table";

export default function SurgicalHistoryForm({crf, entity, entityType,surgicalhistories, onCancel}) {
    return (
         <>
            <CardContent className=" mb-6" >
                {(entity?.hasSurHis === undefined || hasSurHis === null) && <SurgicalHistoryPreForm
                    crf={crf}
                    entity={entity}
                    entityType={entityType}
                    onCancel={onCancel}
                />}


                <div className="grid grid-cols-4 mt-3">
                    <div className="col-span-3">

                        <SurgicalHistoryDataTable surgicalhistories={surgicalhistories} crf={crf}
                            entity={entity}
                            entityType={entityType} deletable={true} />
                    </div>
                    <div className="text-right">
                        {
                            entity.physical_activity === 1 && <SurgicalHistoryFormDialog
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