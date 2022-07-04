import React from "react"
import { Card, Row, Col } from "react-bootstrap";

export default function RenderMedication({ preoperative, postoperative, medications,handleShow}) {
     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>

                    <button onClick={handleShow} className='btn btn-primary'>Add New Medical History</button>
                    <hr />
                    {medications.length > 0 &&
                         medications.map((medication, index) => <Row className="mb-2" key={index}>
                              <Col>{index + 1}</Col>
                              <Col>{medication.medication}</Col>
                              <Col>{medication.indication}</Col>
                              <Col>{medication.status}</Col>
                              <Col>{medication.start_date}</Col>
                              <Col>{medication.stop_date}</Col>
                              <Col>{medication.dosage}</Col>
                              <Col>{medication.reason}</Col>
                              <Col> 
                              {/* <Link href={route('crf.preoperative.medication.destroy', { crf: crf, preoperative: preoperative, medication: medication })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link> */}
                              </Col>
                         </Row>)

                    }
               </Card.Body>

          </Card>
     )
}
