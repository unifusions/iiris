import { CardContent } from "@/Components/ui/card";

import SectionNoData from "@/Components/ui-ext/SectionNoData";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/Components/ui/table";
import { FAMILY_HISTORY_FIELDS } from "../FormFields/Helper";

const SECTION_TITLE="Family History";

export default function FamilyHistoryDataTable({isFamHis,familyhistory }) {
    return (
        <CardContent>
          
  {isFamHis === null ? <SectionNoData title={SECTION_TITLE} /> : <>
                    {isFamHis ? 
                    
                    <>


                        {familyhistory !== null ?

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
                                        <TableCell>{familyhistory[field.fieldName] === 1 ? 'Yes' : 'No'}</TableCell>
                                        <TableCell> {familyhistory[field.fieldName + '_relation'].map((relation) => <>{relation}, </>)}</TableCell>

                                    </TableRow>)
                                }
                                </TableBody>
                                </Table>

                            : 'Family history has to be recorded yet!'}

                    </> :<SectionNoData title={SECTION_TITLE} />}

                </>}

                </CardContent>
           
              
              

      
    )
}