 
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { CirclePlus, SquareActivity } from "lucide-react";
import SurgicalHistoryForm from "./surgical-history-form";
import SurgicalHistoryDataTable from "./surgical-history-data-table";


const SECTION_TITLE = "Surgical History";
export default function SurgicalHistory({

    crf, entity, entityType, 
    id, hasSurHis, surgicalhistories, role,  enableActions,
    isEditing, onEdit, onCancel
}){
    return (
        <Card>
             <CardHeader className="border-b border-gray-200">
                 <CardTitle>
                         <div className="flex items-center justify-between">
                              <div className='flex items-center gap-2 font-bold'>
                                   <SquareActivity className="h-5 w-5 text-primary/70" />   {SECTION_TITLE}
                              </div>

 
                              {!enableActions &&
                                   <>
                                        {role.coordinator &&
                                             <>
                                                  {hasSurHis === null ?
                                                       
                                                            <Button onClick={onEdit} > <CirclePlus /> Update {SECTION_TITLE} Status </Button>
                                                        :  <Button variant={hasSurHis ?"secondary" : "default"} onClick={onEdit}  ><CirclePlus />
                                                                                                {hasSurHis ? 'Edit' :   'Add' } {SECTION_TITLE}
                                                                                            </Button>
                                                  }
                                             </>
                                        }
                                   </>
                              }

                         </div></CardTitle>


                        
             </CardHeader>

            
 {isEditing ? <SurgicalHistoryForm 
 surgicalhistories={surgicalhistories}
                         crf={crf}
                         entity={entity}
                         entityType={entityType} 
                         onCancel={onCancel}/> : <CardContent>
                                <SurgicalHistoryDataTable 
                                  crf={crf}
                         entity={entity}
                         entityType={entityType} 
                         surgicalhistories={surgicalhistories}
                                    deletable={false}
                                />
                            </CardContent>}

        </Card>
      
    )
}