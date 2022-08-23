
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Row, Col } from 'react-bootstrap';
import { method } from 'lodash';


const NotAvailable = () => {
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



               export function RenderFieldBoolNoDatas({labelText, value, boolValue, units}) {
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

               export function RenderCreateButton({createUrl, className}) {

     return (
               <Link method='get' href={createUrl} type='button' className={`btn btn-primary ${className}`} >Create</Link>
               )
}

               export function RenderEditButton({editUrl, className}) {

     return (
               <Link method='get' href={editUrl} type='button' className={`btn btn-warning ${className}`}>Edit</Link>
               )
}

               export function RenderBackButton({backUrl, className}) {

     return (
               <Link method='get' href={backUrl} type='button' className={`btn btn-secondary ${className}`}>Back</Link>
               )
}




               export function RenderUpdateButton({updateUrl, className}) {

     return (
               <Link method='get' href={updateUrl} type='button' className={`btn btn-secondary ${className}`}>Update</Link>
               )
}

