
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { Card, Table } from "react-bootstrap";
import Select from "react-select";
import PageTitle from "../Shared/PageTitle";

export default class Create extends React.Component {
     constructor(props) {
          super(props);
     }

     render() {
          const { tickets, crf, auth, errors, roles } = this.props;
          
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
                              <Select options={crf}  onChange = {(value) => console.log(value.value)}/>

                         </Card.Body>
                    </Card>

               </Authenticated>
          )
     }
}