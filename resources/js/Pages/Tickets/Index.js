
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { Card, Table } from "react-bootstrap";

export default class Index extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          const { tickets, auth, errors, roles } = this.props;
          return (
               <Authenticated
                    auth={auth}
                    errors={errors}
                    header={
                         <div className='d-flex justify-content-between align-items-center mb-3'>
                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>
                              {/* {roles.coordinator && <Link href={route('crf.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>} */}

                         </div>

                    }
                    role={roles}
               >

                    <Head title="Tickets" />
                    <Card className="shadow-sm rounded-5">
                         <Card.Body>
                              <Table hover responsive size="sm">
                                   <thead>
                                        <tr>
                                             <th>Ticket ID</th>
                                             <th>Form Query</th>
                                             <th>Message</th>
                                             
                                             <th>Status</th>
                                             <th>Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                   {tickets.map((ticket, index) => <tr key={ticket.id}>
                                        <td>{ticket.id}</td>
                                        <td>{ticket.form_data}</td>
                                        <td>{ticket.subject}</td>
                                        <td>{ticket.status}</td>
                                        </tr>)}

                                   </tbody>
                              </Table>
                              
                         </Card.Body>
                    </Card>

               </Authenticated>
          )
     }
}