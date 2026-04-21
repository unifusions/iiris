//TBD
// 
import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { FAMILY_HISTORY_FIELDS } from "../FormFields/Helper";
import { CirclePlus, Dna, Group, Pencil, Users } from "lucide-react";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { LinkButton } from "@/Components/ui-ext/LinkButton";


export default function PredefinedFamilyHistoryData({id, isFamHis, predefinedfamilyhistory, role, linkUrl, enableActions }) {
    return (

        <Card id={id} className="mb-3 shadow-sm scroll-section">

                <CardHeader className="border-b border-gray-200">

             
        <CardTitle>
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-2 font-bold'>
                <Dna className="h-5 w-5 text-primary/70" />       {SECTION_TITLE}
            </div>

           
                    {!enableActions &&
                        <>
                            {role.coordinator &&
                                <>
                                    {isFamHis === null ?
                                        <div>  
                                            <LinkButton href={linkUrl}   > <CirclePlus />Add {SECTION_TITLE} </LinkButton>
                                        </div> : <>
                                            {isFamHis ?
                                                <LinkButton href={linkUrl}   > <CirclePlus />Add {SECTION_TITLE} </LinkButton>:
                                                <LinkButton href={linkUrl} variant="secondary" ><Pencil /> Edit {SECTION_TITLE}</LinkButton>}
                                        </>
                                    }

                                </>
                            }
                        </>
                    }

        </div></CardTitle>
          </CardHeader>
                
                <CardContent>
  {isFamHis === null ? <SectionNoData title={SECTION_TITLE} /> : <>
                    {isFamHis ? <>


                        {predefinedfamilyhistory !== null ?

                           <Table className="w-full text-sm">
                                        <TableHeader >
                                             <TableRow className="border-gray-200 bg-muted">
 
                                             <TableCell>Diagnosis</TableCell>
                                             <TableCell>History</TableCell>
                                             <TableCell>Relation</TableCell>
                                             
                                             </TableRow>
                                           
                                        </TableHeader>
                                     <TableBody>

                                {FAMILY_HISTORY_FIELDS.map((field, index) =>
                                    <TableRow className="mb-2" key={index}>
                                        <TableCell>{field.labelText} </TableCell>
                                        <TableCell>{predefinedfamilyhistory[field.fieldName] === 1 ? 'Yes' : 'No'}</TableCell>
                                        <TableCell> {predefinedfamilyhistory[field.fieldName + '_relation'].map((relation) => <>{relation}, </>)}</TableCell>

                                    </TableRow>)
                                }
                                </TableBody>
                                </Table>

                            : 'Family history has to be recorded yet!'}

                    </> :<SectionNoData title={SECTION_TITLE} />}

                </>}

                </CardContent>
           
              
              

           
        </Card>
    )
}
