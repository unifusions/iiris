import React from "react";

import Authenticated from "@/Layouts/Authenticated";

import { Head, Link, usePage } from "@inertiajs/react";
import { GetAge } from "../CaseReportForm/FormFields/HelperFunctions";
import { LinkButton } from "@/Components/ui-ext/LinkButton";
import { DownloadIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";




export default function Index() {
     const { crf } = usePage().props;
     return (
          <Authenticated
               pageTitle="Reports"


          >
               <div className="flex justify-between items-center mb-3">
                    <h1>Download Reports</h1>
                    <LinkButton href={route('crf.create')}   >  <DownloadIcon /> Download Report</LinkButton>
               </div>
               <Head title="Case Report Form" />

               <Table className='w-full' >
                    <TableHeader>
                         <TableRow className="border-gray-200 bg-muted" >

                              <TableHead>Subject ID </TableHead>
                              <TableHead>UHID </TableHead>
                              <TableHead>Facility</TableHead>
                              <TableHead>Demography</TableHead>
                              <TableHead>Date of Consent</TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {
                              crf?.map((crf) =>
                                   <TableRow key={crf.id}>

                                        <TableCell>{crf.subject_id}</TableCell>
                                        <TableCell>{crf.uhid}</TableCell>
                                        <TableCell>{crf.facility.name}</TableCell>
                                        <TableCell><GetAge birthDate={crf.date_of_birth} /> / {crf.gender}</TableCell>
                                        <TableCell>{crf.date_of_consent}</TableCell>
                                   </TableRow>)
                         }
                    </TableBody>

               </Table>




          </Authenticated >
     )
}

