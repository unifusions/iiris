
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Select from "react-select";
import { RenderFieldDatas } from "../CaseReportForm/FormData/FormDataHelper";
import FormButton from "../Shared/FormButton";
import PageTitle from "../Shared/PageTitle";
import CreateComment from "./CreateComment";

export default function Show() {



     const { auth, errors, roles, ticket, comments, backUrl } = usePage().props;

     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>
                         <Link href={backUrl} className="btn btn-secondary" method="get" type="button" as="button" >Back</Link>
                    </div>

               }
               role={roles}
          >


               <Head title="Tickets" />
               <Row>
                    <Col md={6}>
                         <Card className="shadow-sm rounded-5 mb-3">
                              <Card.Body>
                                   <RenderFieldDatas labelText='Ticket ID' value={ticket.id} />
                                   <RenderFieldDatas labelText='Ticket Subject' value={ticket.subject} />
                                   <RenderFieldDatas labelText='Ticket Created On' value={new Date(ticket.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })} />
                                   <RenderFieldDatas labelText='Ticket Status' value={ticket.status} status={ticket.status === 'Open' ? 'success' : 'danger'} />
                                   {roles.admin && <>
                                        {ticket.status !== 'Closed' && <Row>
                                             <Col md={4}></Col>
                                             <Col md={8}>
                                                  <Link href={route('tickets.update', { ticket: ticket })}
                                                       data={{ status: 'Closed' }}
                                                       className="btn btn-danger" method="patch" type="button" as="button" >Close Ticket</Link>

                                             </Col>
                                        </Row>}
                                   </>}




                              </Card.Body>
                         </Card>
                         {ticket.status !== 'Closed' &&
                              <CreateComment ticket={ticket} auth={auth} />}
                    </Col>
                    <Col md={6}>

                         <div className="fw-bold mb-3">
                              Interactions
                         </div>
                         <hr />
                         {comments.map((comment) =>

                              <div key={comment.id} >

                                   <div className="mb-3">
                                        <span className="fw-bold">{comment.comment_user}</span> replied on {new Date(comment.replied_on).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                   </div>


                                   <div>
                                        {comment.content}
                                   </div>
                                   <hr />

                              </div>

                         )}


                    </Col>
               </Row>
          </Authenticated>
     )

}