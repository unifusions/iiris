import { LinkButton } from "@/Components/ui-ext/LinkButton"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { CirclePlus, Dna, Pencil } from "lucide-react"

import { Button } from "@/Components/ui/button"
import FamilyHistoryForm from "./family-history-form"
import FamilyHistoryDataTable from "./family-history-data-table"

const SECTION_TITLE = "Family History"


export default function FamilyHistory(
    {
        crf, entity, entityType, isFamHis,
        familyhistory, role, enableActions, isEditing, onEdit, onCancel
    }
) {
    return (
        <Card>
            <CardHeader className="border-b border-gray-200">
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-2 font-bold'>
                            <Dna className="h-5 w-5 text-primary/70" />       {SECTION_TITLE}
                        </div>
                        {!enableActions &&
                            <>

                                {isFamHis === undefined ?

                                    <Button onClick={onEdit} > <CirclePlus /> Update {SECTION_TITLE} Status </Button>
                                    :

                                    <Button variant={isFamHis ? "secondary" : "default"} onClick={onEdit} size="sm"  ><CirclePlus />
                                        {isFamHis ? 'Edit' : 'Add'} {SECTION_TITLE}
                                    </Button>


                                }
                            </>
                        }
                    </div>
                </CardTitle>

 
            </CardHeader>



                {isEditing ? <FamilyHistoryForm
                    crf={crf}
                    entity={entity}
                    entityType={entityType} onCancel={onCancel} familyhistory={familyhistory}
                    editMode={familyhistory === null? 'store' : 'update'}

                /> : <FamilyHistoryDataTable 
                isFamHis={isFamHis}
                    crf={crf}
                        entity={entity}
                        entityType={entityType}  familyhistory={familyhistory}
                
                />

            }

        </Card>
    )
}