
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Select from "react-select";
import { RenderFieldDatas, RenderTicketStatus } from "../CaseReportForm/FormData/FormDataHelper";
import FormButton from "../Shared/FormButton";
import PageTitle from "../Shared/PageTitle";
import CreateComment from "./CreateComment";

export default function Show() {



     const { auth, errors, roles, ticket, comments, backUrl, closedByUser } = usePage().props;

     const GetCommentDate = ({ actualDate }) => {

          var timeNow = new Date();
          var aD = new Date(actualDate);
          const msInHour = 1000 * 60 * 60;
          var hourDiff = Math.round(Math.abs(timeNow - aD) / msInHour);

          return (
               <>
                    {hourDiff < 24 ? <>
                         {new Date(actualDate).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </> :
                         <>
                              {new Date(actualDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                         </>}
               </>
          );
     }


     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Queries</h2>
                         <Link href={backUrl} className="btn btn-secondary" method="get" type="button" as="button" >Back</Link>
                    </div>

               }
               role={roles}
          >


               <Head title="Queries" />
               <Row>
                    <Col md={6}>
                         <Card className="shadow-sm rounded-5 mb-3">
                              <Card.Body>
                                   <RenderFieldDatas labelText='Query ID' value={ticket.id} />
                                   <RenderFieldDatas labelText='Query Subject' value={ticket.subject} />
                                   <RenderFieldDatas labelText='Query Created On' value={new Date(ticket.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })} />
                                   <RenderTicketStatus labelText='Query Status' value={ticket.status} status={ticket.status === 'Open' ? 'success' : 'danger'} closedByUser={closedByUser} />

                                   {roles.admin && <>
                                        {ticket.status !== 'Closed' && <Row>
                                             <Col md={4}></Col>
                                             <Col md={8}>
                                                  <Link href={route('tickets.update', { ticket: ticket })}
                                                       data={{ status: 'Closed', closedByUser: auth.user.id }}
                                                       className="btn btn-danger" method="patch" type="button" as="button" >Close Query</Link>
                                             </Col>
                                        </Row>}
                                   </>}




                              </Card.Body>
                         </Card>
                         {ticket.status !== 'Closed' &&
                              <CreateComment ticket={ticket} auth={auth} />}
                    </Col>
                    <Col md={6} className='' >
                         <div className="r_flex_container">

                              <div className="fw-bold mb-3 r_flex_fixed_child">
                                   Interactions
                                   <hr />
                              </div>

                              <div className="r_flex_expand_child">
                                   
                                        {comments.map((comment) =>

                                             <div key={comment.id} className={comment.user_id !== auth.user.id ? 'chatBubbleContainer-left' : 'chatBubbleContainer-right'}>
                                                  <div className={comment.user_id !== auth.user.id ? 'chatBubble-left' : 'chatBubble-right'}> {comment.content}</div>

                                                  <div className="chatmeta text-small text-secondary">
                                                       {comment.comment_user} - <GetCommentDate actualDate={comment.replied_on} />
                                                  </div>






                                             </div>

                                        )}
                                   </div>
                                   <div className=" r_flex_fixed_child">
                                  
                                   <hr />
                              </div>
                         </div>






                    </Col>
               </Row>
          </Authenticated>
     )

}