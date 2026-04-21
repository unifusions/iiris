import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { RenderMedicineType } from "../FormFields/Helper";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import { CirclePlus, Pen, Pill } from "lucide-react";
import { LinkButton } from "@/Components/ui-ext/LinkButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Badge } from "@/Components/ui/badge";

const getStatusVariant = (status) => {
     switch (status) {
          case 'Ongoing': return 'success'
          case 'Discontinued': return 'danger'
          default: return 'outline'
     }
}


export default function MedicationsData({ id, hasMedication, medications, role, linkUrl, enableActions }) {
     return (

          <Card  >

               <CardHeader className="border-b border-gray-200">

                    <CardTitle>
                         <div className="flex items-center justify-between">
                              <div className='flex items-center gap-2 font-bold'>
                                   <Pill className="h-5 w-5 text-primary/70" />    Medications
                              </div>

                              {!enableActions &&
                                   <>
                                        {role.coordinator &&
                                             <>
                                                  {hasMedication === null ?
                                                       <div className="flex gap-2 items-center"> <span className="text-sm text-foreground/70">Medications status is null. Update with Yes/No</span>
                                                            <LinkButton href={linkUrl}> <Pen /> Update</LinkButton>
                                                       </div> : <>
                                                            {hasMedication ?
                                                                 <LinkButton href={linkUrl} ><CirclePlus />  Add Medication</LinkButton> :
                                                                 <LinkButton variant="secondary" href={linkUrl}  > <Pen />  Edit</LinkButton>}
                                                       </>
                                                  }
                                             </>
                                        }
                                   </>
                              }

                         </div></CardTitle>



               </CardHeader>
               <CardContent>

 
                    <div className="border border-gray-200 rounded-xl w-full">
                         {hasMedication === null ? <span className="text-foreground/70">Medication Data has not been updated. Go ahead and update one.</span> : <>
                              {hasMedication ? <>
                                      
                                   {medications.length > 0 ?
                                        <Table className="w-full text-sm">
                                             <TableHeader >
                                                  <TableRow className="border-gray-200 bg-muted">

                                                       <TableCell>Medication</TableCell>
                                                       <TableCell>Indication</TableCell>
                                                       <TableCell>Medicine Type</TableCell>
                                                       <TableCell>Status</TableCell>
                                                       <TableCell>Start Date</TableCell>
                                                       <TableCell>Stop Date</TableCell>
                                                       <TableCell>Dosage</TableCell>
                                                       <TableCell>Reason</TableCell>
                                                  </TableRow>

                                             </TableHeader>
                                             <TableBody>
                                                  {medications.map((medication, index) => <TableRow className="mb-2" key={index}>
                                                       {/* <TableCell>{index + 1}</TableCell> */}
                                                       <TableCell>{medication.medication}</TableCell>
                                                       <TableCell>{medication.indication}</TableCell>
                                                       <TableCell> {medication.medicine_type === 'others' ? medication.medicine_type_others : <RenderMedicineType medicineType={medication.medicine_type} />} </TableCell>
                                                       <TableCell>
                                                            <Badge variant={getStatusVariant(medication.status)} >
                                                                 {medication.status}
                                                            </Badge>
                                                       </TableCell>
                                                       <TableCell>{medication.start_date !== null && new Date(medication.start_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', })}</TableCell>
                                                       <TableCell>{medication.stop_date !== null && new Date(medication.stop_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', })}</TableCell>
                                                       <TableCell>{medication.dosage}</TableCell>
                                                       <TableCell>{medication.reason}</TableCell>

                                                  </TableRow>)}
                                             </TableBody>
                                        </Table>
: <div className="p-2"><SectionNoData title="Medications" /></div>
                                   }
                              </> : <SectionNoData title="Medications" />}
                         </>}

                    </div>


               </CardContent>
          </Card>
     )
}
