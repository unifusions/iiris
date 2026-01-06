import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Card } from "react-bootstrap";
import FormButton from "../Shared/FormButton";
import FormInput from "../Shared/FormInput";

export default function Create() {

     const { auth, roles, nextUid } = usePage().props;
     const { data, setData, errors, post, processing, hasErros } = useForm({
          name: '',
          uid: nextUid || '',
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          pin_code: '',
     });

     function handleSubmit(e) {
          e.preventDefault();
          return post(route('facility.store'));
     }

     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Facilities</h2>

                    </div>
               }
               role={roles}
          >
               <Head title="Create Facilities" />
               <Card className="card shadow-sm rounded-5">
                    <Card.Body>
                         <form onSubmit={handleSubmit}>

                              <FormInput
                                   labelText='Facility ID'
                                   value={data.uid}
                                   disabled
                              />

                              <FormInput
                                   labelText='Facility Name'
                                   handleChange={e => setData('name', e.target.value)}
                                   error={data.name}
                                   value={data.name}
                              />

                              <FormInput
                                   labelText='Address Line 1'
                                   handleChange={e => setData('address_line_1', e.target.value)}
                                   error={data.address_line_1}
                                   value={data.address_line_1}
                              />

                              <FormInput
                                   labelText='Address Line 2'
                                   handleChange={e => setData('address_line_2', e.target.value)}
                                   error={data.address_line_2}
                                   value={data.address_line_2}
                              />

                              <FormInput
                                   labelText='State'
                                   handleChange={e => setData('state', e.target.value)}
                                   error={data.state}
                                   value={data.state}
                              />

                              <FormInput
                                   labelText='city'
                                   handleChange={e => setData('city', e.target.value)}
                                   error={data.city}
                                   value={data.city}
                              />

                              <FormInput
                                   labelText='Pin Code'
                                   handleChange={e => setData('pin_code', e.target.value.toString().slice(0, 6))}
                                   error={data.pin_code}
                                   value={data.pin_code}
                              />
<hr/>
                              <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />
                              <Link href={route('facility.index')} className="btn btn-secondary ms-3" method="get" type="button" as="button" >Back</Link>
                         </form>
                    </Card.Body>
               </Card>
          </Authenticated>
     )

}