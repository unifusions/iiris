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
                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Facility</h2>
                              <Link href={route('crf.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>
                         </div>

                    }
                    role={this.props.roles}
               >
                    <Head title="Case Report Form" />
                    <Card className="card shadow-sm rounded-5">
                         <Card.Body>
                              <Table hover responsive size="sm">
                                   <thead>
                                        <tr>
                                             <th>Facility ID</th>
                                             <th>Facility Name</th>
                                             <th>Location</th>
                                             <th>Actions</th>
                                             
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {this.props.facilities.data.map((facility) => <tr key={facility.id} >
                                             <td>{facility.id}</td>
                                             <td>{facility.name}</td>
                                             <td>{facility.address_line_1} <br/> {facility.address_line_2}  <br/> {facility.city} - {facility.pin_code}</td>
                                             <td><Link href={route('facility.show', { facility: facility })} className='btn btn-primary btn-sm'> View </Link></td>
                                        </tr>)}
                                   </tbody>
                              </Table>

                              <hr />
                              <TablePagination links={this.props.facilities.links} />

                         </Card.Body>


                    </Card>


               </Authenticated >
          );
     }

}

