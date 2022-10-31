
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Row, Col } from 'react-bootstrap';
import { method } from 'lodash';


export const NotAvailable = () => {
     return (
          <span className='fw-normal text-secondary fst-italic'>No data available</span>
     )
}
export default function FormDataHelper() {
     return (<></>)
}

export function RenderUnits({ units }) {
     return (<span
          className="text-secondary small ms-1" dangerouslySetInnerHTML={{ __html: units }}></span>)
}
export function RenderDuration({ duration }) {
     return (
          <>
               {duration !== undefined ?
                    <div className="ms-4">
                         <span className="text-secondary">Duration </span>
                         {duration.days !== undefined && <>
                              {duration.days !== null && <>{duration.days} days </>}
                         </>
                         }

                         {duration.months !== undefined && <>
                              {duration.months !== null && <>{duration.months} months </>}

                         </>
                         }
                         {duration.years !== undefined && <>
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
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>
               <Col md={8}>
                    {status !== undefined &&
                         <span className={`dot bg-${status} me-1`}></span>
                    }
                    {value !== null ? <>{value}
                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}


               </Col>
          </Row>
     )
}



export function RenderFieldEchoReviewDatas({ labelText, rvalue, units, normality, abnormality }) {
     return (

          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>{labelText}</Col>

               <Col md={2}>
                    {rvalue !== null ? <>{rvalue}
                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}
               </Col>

               
               <Col md={2}>
                    {normality !== null ? <>{normality ? 'Normal' : 'Abnormal'}</> : <NotAvailable />}
               </Col>
               <Col md={4}>
                    {abnormality !== null ? <>{abnormality}</> : <NotAvailable />}
               </Col>



          </Row>

     )
}


export function RenderFieldEchoDatas({ labelText, value, rvalue, units, normality, abnormality, role }) {
     return (

          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>{labelText}</Col>
               {(role.investigator || role.coordinator || role.admin) &&
                    <Col md={1}>
                         {value !== null ? <>{value}
                              {units !== undefined &&
                                   <RenderUnits units={units} />
                              }</> : <NotAvailable />}
                    </Col>
               }

               {(role.admin || role.reviewer) && <>
                    <Col md={1}>
                         {rvalue !== null ? <>{rvalue}
                              {units !== undefined &&
                                   <RenderUnits units={units} />
                              }</> : <NotAvailable />}
                    </Col>
                    <Col md={2}>
                         {normality !== null ? <>{normality ? 'Normal' : 'Abnormal'}</> : <NotAvailable />}
                    </Col>
                    <Col md={4}>
                         {abnormality !== null ? <>{abnormality}</> : <NotAvailable />}
                    </Col>
               </>}


          </Row>
          // <Row className='mb-3'>
          //      <Col md={4} className='text-secondary'>
          //           {labelText}
          //      </Col>
          //      <Col md={2}>

          //           {value !== null ? <>{value}
          //                {units !== undefined &&
          //                     <RenderUnits units={units} />
          //                }</> : <NotAvailable />}


          //      </Col>
          //      <Col md={2}>
          //         {normality !== null ? <>{normality ? 'Normal' : 'Abnormal'}</> : <NotAvailable /> }
          //      </Col> 
          //      <Col md={3}>
          //                {abnormality !== null ? <>{abnormality}</> : <NotAvailable /> }
          //      </Col>

          // </Row>
     )
}



export function RenderDateFieldDatas({ labelText, value, units, status, options }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>
               <Col md={8}>
                    {status !== undefined &&
                         <span className={`dot bg-${status} me-1`}></span>
                    }
                    {value !== null ? <>{new Date(value).toLocaleString('en-in', options)}

                         {units !== undefined &&
                              <RenderUnits units={units} />
                         }</> : <NotAvailable />}


               </Col>
          </Row>
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
                         <div className='bg-success text-white p-3 mb-3 rounded-5 shadow-sm'>
                              {formTitle} Data has been submitted & approved. To modify data, please raise a
                              <Link href={route('tickets.index')} className="fw-bold text-white" style={{ textDecoration: 'none' }}> query</Link>
                         </div>
                    </> : <div className='bg-warning text-dark p-3 mb-3 rounded-5'>
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
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>

               {boolValue !== null ?
                    <>
                         <Col md={1}>{boolValue === 1 ? 'Yes' : 'No'}</Col>
                         <Col md={7}>{boolValue !== 0 && <>
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


export function RenderSymptomDatas({ labelText, symptomClass, boolValue, duration }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>

               {boolValue !== null ?
                    <>
                         <Col md={1}>{boolValue === 1 ? 'Yes' : 'No'}</Col>
                         <Col md={7}>{boolValue !== 0 && <>
                              <div className="d-flex align-items-center">
                                   {symptomClass !== null && <> <div className="ms-4">{symptomClass}</div></>}
                                   {duration !== null && <RenderDuration duration={duration} />
                                   }
                              </div>
                         </>}
                         </Col>
                    </>




                    : <Col md={8}><NotAvailable /></Col>
               }
          </Row>
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

