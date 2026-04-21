import React from "react";

import Authenticated from "@/Layouts/Authenticated";

import { Head, Link, usePage } from "@inertiajs/react";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { LinkButton } from "@/Components/ui-ext/LinkButton";
import { PlusCircle } from "lucide-react";



export default function Index() {
     const { facilities } = usePage().props;
     return (
          <Authenticated

               pageTitle="Facility"
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Facility</h2>
                         <Link href={route('facility.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>
                    </div>

               }

          >


               <div className=' flex justify-between items-center mb-3'>
                    <div className='w-1/2'>
                         <h1 className="text-xl font-bold">Facility</h1>

                    </div>



                    <LinkButton href={route('facility.create')}> <PlusCircle /> Add Facility</LinkButton>

               </div>

               <Table hover responsive size="sm">
                    <TableHeader >
                         <TableRow className="bg-muted border-gray-200">
                              <TableHead>Facility ID</TableHead>
                              <TableHead>Facility Name</TableHead>
                              <TableHead>Location</TableHead>
                              <TableHead>Users</TableHead>
                              {/* <TableHead>Actions</TableHead> */}

                         </TableRow>
                    </TableHeader>
                    <tbody>
                         {facilities.map((facility) => <TableRow key={facility.id} >
                              <TableCell>{facility.uid}</TableCell>
                              <TableCell>{facility.name}</TableCell>
                              <TableCell>{facility.city} - {facility.pin_code}</TableCell>
                              <TableCell>{facility.userCount}</TableCell>
                              {/* <TableCell><Link href={route('facility.edit', { facility: facility })} className='btn btn-warning btn-sm'> Edit </Link></TableCell> */}
                         </TableRow>)}
                    </tbody>
               </Table>


               {/* <TablePagination links={this.props.facilities.links} /> */}






          </Authenticated >
     )
}

