
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import Select from "react-select";
import FormButton from "../Shared/FormButton";
import PageTitle from "../Shared/PageTitle";

export default function Create() {



     const { tickets, crf, auth, errors, roles, selectedCrf } = usePage().props;
     const { data, setData, post, processing } = useForm({
          form_query: '',
          subject: '',
          from_user_id: auth.user.id || '',
          to_user_id: '',
          facility_id: '',
          ticketstatus: 'Open',
          isAdminQuery: roles.admin,
          message: ''

     })
     const [listUsers, setListUsers] = useState([]);

     useEffect(() => {
          if (selectedCrf !== undefined) {
               //setData('to_user_id', selectedCrf.user_id);
               setData('facility_id', selectedCrf.facility_id);
               setListUsers([]);
               if (!roles.admin) { setListUsers(list => [...list, { 'label': 'IIRIS Admin Team', 'value': '0' }]) }
               selectedCrf.facility.users.filter(user => user.id !== auth.user.id).map((filteredUser) =>
                    setListUsers(list => [...list, { 'label': filteredUser.name + '(' + filteredUser.role.name + ')', 'value': filteredUser.id }])

               )


          }

     }, [selectedCrf]);

     function selectCrf(value) {
          setData('subject', value.value)
          Inertia.reload({ only: ['selectedCrf'], data: { subject: value.value } })

     }
     function handleSubmit(e) {
          e.preventDefault();
          post(route('tickets.store'));
     }
     

     function userQueryFunction(value){
          if(value!== '0')  {
               setData('to_user_id', value)
          }
          
     }

     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Queries</h2>
                         {/* {roles.coordinator && <Link href={route('crf.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>} */}

                    </div>

               }
               role={roles}
          >


               <Head title="Query" />
               
               <Card className="shadow-sm rounded-5">
                    <Card.Body>
                         <form onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                   <Col md={3}>
                                        Case Report Form ID
                                   </Col>
                                   <Col md={6}>
                                        <Select options={crf} onChange={(value) => selectCrf(value)} />
                                   </Col>
                              </Row>

                             

                              <Row className="mb-3">
                                   <Col md={3}>
                                        Raise Query
                                   </Col>
                                   <Col md={6}>
                                        <Select options={listUsers}
                                             onChange={(value) => userQueryFunction(value.value)}
                                             isDisabled={data.subject === ''}
                                        />
                                   </Col>
                              </Row>

                              <Row className="mb-3">
                                   <Col md={3}>
                                        Query Message
                                   </Col>
                                   <Col md={6}>
                                        <textarea onChange={(e) => setData('message', e.target.value)} className="form-control" rows="5"></textarea>
                                   </Col>
                              </Row>

                              <Row>
                                   <Col md={3}>

                                   </Col>
                                   <Col md={6}>
                                        <FormButton processing={processing} labelText='Create Query' type="submit" mode="primary" />
                                        <Link href={route('tickets.index')} className="btn btn-secondary ms-3" method="get" type="button" as="button" >Back</Link>
                                   </Col>
                              </Row>
                         </form>
                    </Card.Body>
               </Card>

          </Authenticated>
     )

}