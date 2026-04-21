
import React from 'react';
import { Link } from '@inertiajs/react';
import { Row, Col } from 'react-bootstrap';
import { TableCell, TableRow } from '@/Components/ui/table';


export const NotAvailable = () => {
     return (
          <span className='font-normal text-foreground/70 italic'>No data available</span>
     )
}
export default function FormDataHelper() {
     return (<></>)
}

export function RenderUnits({ units }) {
     return (<span
          className="ms-1 text-xs text-foreground/50 font-normal" dangerouslySetInnerHTML={{ __html: units }}></span>)
}
export function RenderDuration({ duration }) {
     return (
          <>
               {duration !== undefined ?
                    <div className="ms-4">
                         
                         {duration?.days !== undefined && <>
                              {duration.days !== null && <>{duration.days} days </>}
                         </>
                         }

                         {duration?.months !== undefined && <>
                              {duration.months !== null && <>{duration.months} months </>}

                         </>
                         }
                         {duration?.years !== undefined && <>
                              {duration.years !== null && <>{duration.years} years</>}

                         </>
                         }
                    </div> : <NotAvailable />
               }


          </>
     )
}

export function RenderFieldDatas({ labelText, value, units, status }) {
     return (
          <div className='grid grid-cols-3'>
               <div className='text-foreground/70'>
                    {labelText}
               </div>
               <div className='col-span-2 font-semibold'>
                    {status !== undefined &&
                         <span className={`dot bg-${status} me-1`}></span>
                    }
                    {value !== null ? <>{value}
                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}


               </div>
          </div>
     )
}



export function RenderFieldEchoReviewDatas({ labelText, rvalue, units, normality, abnormality }) {
     return (

          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>{labelText}</Col>

               <Col md={3} sm={6}>
                    {rvalue !== null ? <>{rvalue}
                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}
               </Col>


               <Col md={2} sm={4}>
                    {normality !== null ? <>{normality ? 'Normal' : 'Abnormal'}</> : <NotAvailable />}
               </Col>
               <Col md={4} sm={4}>
                    {abnormality !== null ? <>{abnormality}</> : <NotAvailable />}
               </Col>



          </Row>

     )
}


export function RenderFieldEchoDatas({ labelText, value, rvalue, units, normality, abnormality, role }) {
     return (

          <div className='grid grid-cols-3'>
               <div className='text-foreground/70'>{labelText}</div>
               <div className="">
                    {(role.investigator || role.coordinator || role.admin) &&
                         <div  className='font-bold'>
                              {value !== null ? <>{value}
                                   {units !== undefined &&
                                        <RenderUnits units={units} />
                                   }</> : <NotAvailable />}
                         </div>
                    }
               </div>


               {(role.admin || role.reviewer) && <>
                    <div md={1}>
                         {rvalue !== null ? <>{rvalue}
                              {units !== undefined &&
                                   <RenderUnits units={units} />
                              }</> : <NotAvailable />}
                    </div>
                    <div md={2}>
                         {normality !== null ? <>{normality ? 'Normal' : 'Abnormal'}</> : <NotAvailable />}
                    </div>
                    <div md={4}>
                         {abnormality !== null ? <>{abnormality}</> : <NotAvailable />}
                    </div>
               </>}


          </div>

     )
}



export function RenderDateFieldDatas({ labelText, value, units, status, options }) {
     return (
          <div className='grid grid-cols-3  '>
               <div   className='text-foreground/70'>
                    {labelText}
               </div>
               <div className='col-span-2 font-bold'>
                    {status !== undefined &&
                         <span className={`dot bg-${status} me-1`}></span>
                    }
                    {value !== null ? <>{new Date(value).toLocaleString('en-in', options)}

                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}


               </div>
          </div>
     )
}



export function RenderDateFieldEchoDatas({ labelText, echodate, r_echodate, options }) {
     return (


          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>
               <Col md={1}>

                    {echodate !== null ? <>{new Date(echodate).toLocaleString('en-in', options)}</> : <NotAvailable />}


               </Col>

               <Col md={1}>
                    {r_echodate !== null ? <>{new Date(r_echodate).toLocaleString('en-in', options)}</> : <NotAvailable />}

               </Col>
          </Row>
     )
}

export function RenderTicketStatus({ labelText, value, units, status, closedByUser }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>
               <Col md={8}>
                    {status !== undefined &&
                         <>
                              <span className={`dot bg-${status} me-1`}></span>
                              {value !== null ? <>{value}
                                   {units !== undefined &&
                                        <RenderUnits units={units} />
                                   }</> : <NotAvailable />}
                              {value === 'Closed' && <>

                                   {closedByUser !== null && <> by {closedByUser.name}</>}
                              </>
                              }
                         </>

                    }




               </Col>
          </Row>
     )
}
export function RenderFormStatus({ isSubmitted, visitStatus, formTitle, visitNo }) {
     return (
          <>

               {isSubmitted ? <> {visitStatus ?
                    <>
                         <div className='bg-green-50 text-green-800 border border-green-200 p-3 mb-3 rounded-lg'>
                              {formTitle} Data has been submitted & approved. To modify data, please raise a
                              <Link href={route('tickets.index')} className="font-semibold " style={{ textDecoration: 'none' }}> query</Link>
                         </div>
                    </> : <div className='bg-amber-50 text-amber-800 border border-amber-200 p-3 mb-3 rounded-lg'>
                         {formTitle} {visitNo} Data has been submitted. Please wait until your investigator approves/disapproves
                         {/* <Link href={route('tickets.index')} className="fw-bold text-dark" style={{ textDecoration: 'none' }}> ticket</Link> */}
                    </div>

               }

               </> : ''}
          </>
     )
}


export function RenderFieldSafetyParameterData({ labelText, value, boolValue, dateValue, units }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>

               {boolValue !== null ?
                    <>
                         <Col md={1}>{boolValue === 1 ? 'Yes' : 'No'}</Col>
                         <Col md={2}>{boolValue !== 0 && <>
                              <span className='text-secondary me-3'>Date</span>
                              {dateValue !== null ?
                                   <><span className=''> {dateValue} </span>
                                   </> : <span className='fw-normal text-secondary fst-italic'>No data available</span>}
                         </>}
                         </Col>
                         <Col md={5}>{boolValue !== 0 && <>
                              <span className='text-secondary me-3'>Comments</span> {value !== null ?
                                   <> {value}</> : <span className='fw-normal text-secondary fst-italic'>No data available</span>}
                         </>}
                         </Col>
                    </>




                    : <Col md={8}><NotAvailable /></Col>
               }
          </Row>
     )
}

export function RenderFieldBoolDatas({ labelText, value, boolValue, units }) {
     return (
          <div className='grid grid-cols-3'>
               <div className='text-foreground/70'>
                    {labelText}
               </div>

               <div className="col-span-2">
                    {boolValue !== null ?
                         <div className='grid grid-cols-4'>
                              <div >{boolValue === 1 ? 'Yes' : 'No'}</div>
                              <div className='col-span-3' >{boolValue !== 0 && <>
                                   {value !== null ?
                                        <> {value} {units !== 'undefined' && <RenderUnits units={units} />}
                                        </> : <span className='text-foreground/70 italic'>No data available</span>}
                              </>}
                              </div>
                         </div>




                         : <NotAvailable />
                    }
               </div>

          </div>
     )
}


export function RenderSymptomDatas({ labelText, symptomClass, boolValue, duration }) {
     return (
          <div className=' grid grid-cols-3 mb-3'>
               <div className='text-foreground/70'>
                    {labelText}
               </div>
               <div className='col-span-2'>
                    {boolValue !== null ?
                         <div className='grid grid-cols-5'>
                              <div className={` ${boolValue === 1 && 'font-bold'}`}>{boolValue === 1 ? 'Yes' : 'No'}</div>
                              <div className='col-span-4'>{boolValue !== 0 && <>
                                   <div className=" flex  items-center">
                                        {symptomClass !== null && <> <div className="ms-4 whitespace-nowrap">{symptomClass}</div></>}
                                        {duration !== null && <RenderDuration duration={duration} />
                                        }
                                   </div>
                              </>}
                              </div>
                         </div>




                         : <NotAvailable />
                    }
               </div >
          </div>
     )
}


export function RenderSymptomRows({ labelText, symptomClass, boolValue, duration }) {
     return (
          <TableRow>
               <TableCell> {labelText}</TableCell>
               <TableCell className={` ${boolValue === 1 && 'font-bold'}`}> {boolValue === 1 ? 'Yes' : 'No'}  </TableCell>
               <TableCell> {symptomClass} </TableCell>
               <TableCell><RenderDuration duration={duration} /></TableCell>
         
        
           </TableRow>
     )
}


export function RenderFieldBoolNoDatas({ labelText, value, boolValue, units }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>

               {boolValue !== null ?
                    <>
                         <Col md={1}>{boolValue === 1 ? 'Yes' : 'No'}</Col>
                         <Col md={7}>{boolValue !== 1 && <>
                              {value !== null ?
                                   <> {value}
                                        {units !== 'undefined' && <RenderUnits units={units} />}
                                   </> : <span className='fw-normal text-secondary fst-italic'>No data available</span>}
                         </>}
                         </Col>
                    </>




                    : <Col md={8}><NotAvailable /></Col>
               }
          </Row>
     )
}

export function RenderCreateButton({ createUrl, className }) {

     return (
          <Link method='get' href={createUrl} type='button' className={`btn btn-primary ${className}`} >Create</Link>
     )
}

export function RenderEditButton({ editUrl, className }) {

     return (
          <Link method='get' href={editUrl} type='button' className={`btn btn-warning ${className}`}>Edit</Link>
     )
}

export function RenderBackButton({ backUrl, className }) {

     return (
          <Link method='get' href={backUrl} type='button' className={`btn btn-secondary ${className}`}>Back</Link>
     )
}




export function RenderUpdateButton({ updateUrl, className }) {

     return (
          <Link method='get' href={updateUrl} type='button' className={`btn btn-secondary ${className}`}>Update</Link>
     )
}

