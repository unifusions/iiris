import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { CirclePlus, Pencil, SportShoe } from "lucide-react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/Components/ui/table";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { LinkButton } from "@/Components/ui-ext/LinkButton";


const SECTION_TITLE = "Physical Activity"
export default function PhysicalActivityData({ id, physicalactivites, isPhyAct, role, linkUrl, enableActions }) {
     return (

          <Card  >


             
       
              
               <CardContent >
                    {isPhyAct === null ? <SectionNoData title={SECTION_TITLE} /> : <>
                         {isPhyAct ? <>
                              {physicalactivites.length > 0 &&
                                   <Table>
                                        <TableHeader>
                                             <TableRow className="border-gray-200 bg-muted">
                                                  <TableCell>#</TableCell>
                                                  <TableCell>Activity Type</TableCell>
                                                  <TableCell>Duration</TableCell>
                                             </TableRow>

                                        </TableHeader>

                                        <TableBody>
                                             {physicalactivites.map((physicalactivity, index) => <TableRow className="mb-2" key={index}>
                                                  <TableCell>{index + 1}</TableCell>
                                                  <TableCell>{physicalactivity.activity_type}</TableCell>
                                                  <TableCell>{physicalactivity.duration} hrs/week</TableCell>

                                             </TableRow>)

                                             }
                                        </TableBody>
                                   </Table>
                              }
                         </> : <SectionNoData title={SECTION_TITLE} />
                         }
                    </>
                    }
               </CardContent>



          </Card>
     )
}
