import React from "react";

import Authenticated from "@/Layouts/Authenticated";
import { Card, Table } from "react-bootstrap";
import { Head, Link } from "@inertiajs/inertia-react";
import TablePagination from "../Shared/TablePagination";


export default class Index extends React.Component {

     constructor(props) {
          super(props);
     }

     render() {
          return (
               <Authenticated
                    auth={this.props.auth}
                    errors={this.props.errors}
                    header={
                         <div className='d-flex justify-content-between align-items-center mb-3'>
                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
                              <Link href={route('users.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>
                         </div>

                    }
                    role={this.props.roles}
               >
                    <Head title="Users" />
                    <Card className="card shadow-sm rounded-5">
                         <Card.Body>
                              <Table hover responsive size="sm">
                                   <thead>
                                        <tr>
                                             <th>#</th>
                                             <th>Registered Email</th>
                                             <th>Role</th>
                                             <th>Facility</th>
                                             {/* <th>Actions</th> */}
                                             
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {this.props.users.map((user, index) => <tr key={user.id} >
                                             <td>{index + 1}</td>
                                             <td>{user.email}</td>
                                             <td>{user.role}</td>
                                             <td>{user.facility}</td>
                                            
                                             {/* <td><Link href={route('facility.edit', { facility: facility })} className='btn btn-warning btn-sm'> Edit </Link></td> */}
                                        </tr>)}
                                   </tbody>
                              </Table>

                              <hr />
                             

                         </Card.Body>


                    </Card>


               </Authenticated >
          );
     }

}

