import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

import { Card, Table } from 'react-bootstrap';
import TablePagination from '../Shared/TablePagination';
import BadgeLink from '../Shared/BadgeLinks';



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
                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms</h2>
                              {this.props.roles.coordinator && <Link href={route('crf.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>}
                              
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
                                             <th>Subject ID</th>
                                             <th>Facility</th>
                                             <th>Age</th>
                                             <th>Gender</th>
                                             <th>Status</th>
                                             <th>Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {this.props.crf.data.map((crf) => <tr key={crf.id} >
                                             <td>{crf.subject_id}</td>
                                             <td>{crf.facility.name}</td>
                                             <td>{crf.age}</td>
                                             <td>{crf.gender}</td>
                                             <td>
                                                  <BadgeLink routeUrl={route('crf.preoperative.show', { crf: crf, preoperative: crf.preoperative })}
                                                       status={crf.preoperative.is_submitted ? crf.preoperative.visit_status ? 'bg-success' : 'bg-warning' : 'bg-secondary'} labelText='Pre Operative' />
                                                  <BadgeLink routeUrl={route('crf.intraoperative.show', { crf: crf, intraoperative: crf.intraoperative })}
                                                       status={crf.intraoperative.is_submitted ? crf.intraoperative.visit_status ? 'bg-success' : 'bg-warning' : 'bg-secondary'} labelText='Intra Operative' />
                                                  <BadgeLink routeUrl={route('crf.postoperative.show', { crf: crf, postoperative: crf.postoperative })}
                                                       status={crf.postoperative.is_submitted ? crf.postoperative.visit_status ? 'bg-success' : 'bg-warning' : 'bg-secondary'} labelText='Post Operative' />
                                             </td>

                                             <td>
                                                  <Link href={route('crf.show', { crf: crf })} className='btn btn-primary btn-sm'> View </Link>
                                             </td>
                                        </tr>)}
                                   </tbody>
                              </Table>
                             
                              <hr />
                              <TablePagination links={this.props.crf.links} />

                         </Card.Body>


                    </Card>


               </Authenticated >
          );
     }

}

