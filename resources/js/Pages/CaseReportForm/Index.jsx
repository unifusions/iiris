import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm, router } from '@inertiajs/react';
 


import Select from "react-select";


import { GetAge } from './FormFields/HelperFunctions';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { LinkButton } from '@/Components/ui-ext/LinkButton';
import { Eye, PlusCircle } from 'lucide-react';
import { TablePagination } from '@/Components/ui-ext/table-pagination';
import BadgeLink from '../Shared/BadgeLinks';
import { Badge } from '@/Components/ui/badge';


const STAGE_CONFIG = {
  'pre-op': {
    id: 'pre-op',
    label: 'Preoperative',
    description: 'Pre-operative assessment',
    order: 1,
    link : (crf) => route('crf.preoperative.show', { crf: crf, preoperative: crf.preoperative }),
    variant : "blue"
  },
  'intra-op': {
    id: 'intra-op',
    label: 'IntraOperative',
    description: 'Intra-operative data',
    order: 2,
    variant : "purple",
    link : (crf) => route('crf.intraoperative.show', { crf: crf, intraoperative: crf.intraoperative })
  },
  'post-op': {
    id: 'post-op',
    label: 'Postoperative',
    description: 'Post-operative assessment',
    order: 3,
    variant : "orange",
    link : (crf) => route('crf.postoperative.show', { crf: crf, postoperative: crf.postoperative })
  },
  'scheduled-visits': {
    id: 'scheduled-visits',
    label: 'Scheduled Visits',
    description: 'Follow-up visits',
    order: 4,
    variant : "green",
    link : (crf) => route('crf.scheduledvisit.index', { crf: crf })
  },
  'unscheduled-visit': {
    id: 'unscheduled-visit',
    label: 'Unscheduled Visit',
    description: 'Unscheduled follow-up',
    order: 5,
    variant : "red",
    link : (crf) => route('crf.unscheduledvisit.index', { crf: crf })

  },
}


export default class Index extends React.Component {

     constructor(props) {
          super(props);
     }

     render() {

          function CrfSelectComponent({ options, allCrfList, isCreateable }) {



               function selectCrf(value) {

                    let selectedCrf = allCrfList.find((filteredCrf) => {
                         return filteredCrf.subject_id === value.value
                    })

                    router.reload({ data: { filteredCrf: value.value } })


               }

               return (
                    <div className=' flex justify-between items-center mb-3'>
                         <div className='w-1/2'>

                              < Select
                                   options={options}
                                   onChange={(value) => selectCrf(value)}
                                   isSearchable
                                   placeholder='Search eCRF'
                              />
                         </div>



                         {isCreateable && <LinkButton href={route('crf.create')}   >  <PlusCircle /> Create CRF</LinkButton>}

                    </div>




               )
          }


const getActiveStage = (crf) => {
     
     if(crf?.unscheduledvisits?.length > 0) return 'unscheduled-visit';
     if(crf.preoperative.is_submitted === 0) return 'pre-op';
     if(crf.preoperative.is_submitted === 1 && crf.intraoperative.is_submitted === 0) return 'intra-op';
     if(crf.intraoperative.is_submitted === 1 && crf.postoperative.is_submitted === 0) return 'post-op';
     return 'scheduled-visits';
}
 

          return (
               <Authenticated
                    pageTitle="Case Report Form"
               >


                    <CrfSelectComponent
                         options={this.props.subjectOptions}
                         allCrfList={this.props.crf.data}
                         isCreateable={this.props.roles.coordinator}
                    />

                    <div className="border border-gray-200 rounded-xl w-full">
                         <Table className='w-full'  >

                              <TableHeader >
                                   <TableRow className="border-gray-200 bg-muted">
                                        <TableHead>Subject ID</TableHead>
                                        <TableHead>Facility</TableHead>
                                        <TableHead>Demography</TableHead>
                                        <TableHead>Current Stage</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Enrolled</TableHead>
                                        <TableHead>Created By</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                   </TableRow>
                              </TableHeader>
                              <TableBody>
                                   {this.props.crf.data.map((crf) =>
                                        <TableRow key={crf.id}>
                                             <TableCell className="font-mono font-medium text-primary" >{crf.subject_id}</TableCell>
                                             <TableCell>{crf.facility.name}</TableCell>
                                             <TableCell><GetAge birthDate={crf.date_of_birth} /> / {crf.gender}</TableCell>
                                             <TableCell  >
                                                  <Badge variant={STAGE_CONFIG[getActiveStage(crf)].variant}>
                                                       <Link href={STAGE_CONFIG[getActiveStage(crf)]?.link(crf)} className="hover:underline">     
                                                       {STAGE_CONFIG[getActiveStage(crf)].label}
                                                       </Link>
                                                       </Badge>
                                                 
                                             </TableCell>
                                             <TableHead><Badge variant={getActiveStage(crf) == 'unscheduled-visit' ? 'danger' : 'success'}>{getActiveStage(crf) == 'unscheduled-visit' ? 'Closed' : 'Active'}</Badge></TableHead>
                                             <TableCell> {crf.created_at} </TableCell>
                                             <TableCell>{crf.user.name}</TableCell>
                                             <TableCell className="text-right">
                                                  <LinkButton variant='secondary' href={route('crf.show', { crf: crf })}><Eye /> View</LinkButton>
                                             </TableCell>
                                        </TableRow>
                                   )}
                              </TableBody>
                         </Table>


                    </div>
                    <TablePagination links={this.props.crf.links}
                         total = {this.props.crf.total}
                         from = {this.props.crf.from}
                         to = {this.props.crf.to}
                         
                    />


 

               </Authenticated >
          );
     }

}

