import { LinkButton } from "@/Components/ui-ext/LinkButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { CirclePlus, Pencil, SportShoe } from "lucide-react"
import PhysicalActivityPreForm from "./physical-activity-pre-form"
import PhysicalActivityData from "./physical-activity-data"
import PhysicalActivityForm from "./physical-activity-form"
import { Button } from "@/Components/ui/button"

const SECTION_TITLE = "Physical Activity"
export default function PhysicalActivity(
   { crf, entity, entityType, physicalactivites,
    isPhyAct, role, enableActions, isEditing, onEdit, onCancel}) {
    return (
        <Card>

            <CardHeader className="border-b border-gray-200">
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-2 font-bold'>
                            <SportShoe className="h-5 w-5 text-primary/70" />     {SECTION_TITLE}
                        </div>


 
                        {!enableActions &&
                            <>

                                {isPhyAct === undefined ?

                                    <Button onClick={onEdit} > <CirclePlus /> Update {SECTION_TITLE} Status </Button>
                                    :

                                    <Button variant={isPhyAct ? 'secondary' : 'default'} onClick={onEdit}  ><CirclePlus />
                                        {isPhyAct ? 'Edit' : 'Add'} {SECTION_TITLE}
                                    </Button>


                                }
                            </>
                        }

                    </div>
                </CardTitle>

              
            </CardHeader>




              {isEditing ? <>

 
                  <PhysicalActivityForm   crf={crf}
                        entity={entity}
                        entityType={entityType}   onCancel = {onCancel} physicalactivites={physicalactivites}/>
                </> : <PhysicalActivityData crf={crf}
                        entity={entity}
                        entityType={entityType}  physicalactivites={physicalactivites}/>}

               
        </Card>
    )

}