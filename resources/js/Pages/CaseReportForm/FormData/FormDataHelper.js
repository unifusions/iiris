
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Row, Col } from 'react-bootstrap';
import { method } from 'lodash';

export default function FormDataHelper() {
     return( <></>)
}

export function RenderUnits({ units }) {
     return (<span
          className="text-secondary small ms-1" dangerouslySetInnerHTML={{ __html: units }}></span>)
}

export function RenderFieldDatas({ labelText, value, units }) {
     return (
          <Row className='mb-3'>
               <Col md={4} className='text-secondary'>
                    {labelText}
               </Col>
               <Col md={8}>{value} 
                    {units !== 'undefined' &&
                         <RenderUnits units={units} />
                    }

               </Col>
          </Row>
     )
}

export function RenderCreateButton({ createUrl, className }) {

     return (
          <Link method='get' href={createUrl} type='button'className={`btn btn-primary ${className}`} >Create</Link>
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

