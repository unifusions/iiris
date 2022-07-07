import React from "react";
import { Card } from "react-bootstrap";

export default function Create() {
     <Authenticated
          auth={this.props.auth}
          errors={this.props.errors}
          header={
               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Facilities</h2>
                    <Link href={route('facility.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>
               </div>

          }
          role={this.props.roles}
     >
          <Head title="Facilities" />
          <Card className="card shadow-sm rounded-5">
                         <Card.Body>
                              <Table hover responsive size="sm">
                                   <thead>
                                        <tr>
                                             <th>Subject ID</th>
                                             <th>Facility</th>
                                             <th>Age</th>
                                             <th>Gender</th>
                                             <th>Status</th>
                                             <th>Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {this.props.facilities.data.map((facility) => <tr key={facility.id} >
                                             <td>{facility.id}</td>
                                             <td>{facility.name}</td>
                                             

                                             <td>
                                                  <Link href={route('facility.show', { facility: facility })} className='btn btn-primary btn-sm'> View </Link>
                                             </td>
                                        </tr>)}
                                   </tbody>
                              </Table>
                             
                              <hr />
                              <TablePagination links={this.props.facility.links} />

                         </Card.Body>


                    </Card>
     </Authenticated>
}