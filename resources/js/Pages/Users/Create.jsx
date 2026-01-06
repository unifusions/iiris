import React from "react";

import Authenticated from "@/Layouts/Authenticated";
import { Card, Row, Col } from "react-bootstrap";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import TablePagination from "../Shared/TablePagination";
import Label from "@/Components/Label";
import FormInput from "../Shared/FormInput";
import FormButton from "../Shared/FormButton";
import Select from "react-select";


export default function Create() {



     const { auth, roles, errors, userRoles, facilities } = usePage().props;
     const { data, setData, post, processing } = useForm({
          name: '',
          email: '',
          password: '',
          role_id: '',
          facility_id: '',

     });

     function handleSubmit(e) {
          e.preventDefault();
          return post(route('users.store'));
     }


     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>

                    </div>

               }
               role={roles}
          >
               <Head title="Case Report Form" />
               <Card className="card shadow-sm rounded-5">
                    <Card.Body>
                         <form onSubmit={handleSubmit}>

                              <FormInput
                                   labelText='Full Name'
                                   handleChange={e => setData('name', e.target.value)}
                                   error={data.name}
                                   value={data.name}
                              />

                              <FormInput
                                   type="email"
                                   labelText='Email '
                                   handleChange={e => setData('email', e.target.value)}
                                   error={data.email}
                                   value={data.email}
                              />

<FormInput
                                   type="password"
                                   labelText='Password '
                                   handleChange={e => setData('password', e.target.value)}
                                   error={data.password}
                                   value={data.password}
                              />

                              <Row className="mb-3">
                                   <Col md={3}>
                                   <span className="text-secondary">User Role</span>
                                   </Col>
                                   <Col md={6}>
                                        <Select options={userRoles} onChange={(value) => setData('role_id',value.value)} />
                                   </Col>
                              </Row>

                              <Row className="mb-3">
                                   <Col md={3}>
                                   <span className="text-secondary">Facility</span>
                                   </Col>
                                   <Col md={6}>
                                        <Select options={facilities} onChange={(value) => setData('facility_id',value.value)} />
                                   </Col>
                              </Row>



                              <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />
                              <Link href={route('users.index')} className="btn btn-secondary ms-3" method="get" type="button" as="button" >Back</Link>
                         </form>


                    </Card.Body>


               </Card>


          </Authenticated >
     );
}



