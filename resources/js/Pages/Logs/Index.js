import Authenticated from "@/Layouts/Authenticated";
import { Head, usePage } from "@inertiajs/inertia-react";
import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import TablePagination from "../Shared/TablePagination";


function RenderDurationEditlog({ duration }) {
     return (
          <></>
     )
}

function RenderSymptomsEditLog({ fields }) {
     return (
          <>
               {console.log(fields)}</>
          // <Table size="sm">
          //      <thead>
          //           <tr>
          //                <th>Field Name</th>
          //                <th>Old Value</th>
          //                <th>New Value</th>
          //           </tr>
          //      </thead>
          //      <tbody>
          //           {fields.map((field, index) =>
          //                <tr key={index}>
          //                     <td style={{ padding: '0.25rem 1.375rem' }}>{field.field_name}</td>
          //                     <td style={{ padding: '0.25rem 1.375rem' }}>{field.old_value}</td>
          //                     <td style={{ padding: '0.25rem 1.375rem' }}>{field.new_value}</td>
          //                </tr>
          //           )}</tbody>
          // </Table>
     )
}

function RenderPhysicalExaminationEditLog({ fields }) {
     return (<>
          {
               fields !== undefined ? <Table size="sm">
                    <thead>
                         <tr>
                              <th>Field Name</th>
                              <th>Old Value</th>
                              <th>New Value</th>
                         </tr>
                    </thead>
                    <tbody>
                         {fields.map((field, index) =>
                              <tr key={index}>
                                   <td style={{ padding: '0.25rem 1.375rem' }}>{field.field_name}</td>
                                   <td style={{ padding: '0.25rem 1.375rem' }}>{field.old_value}</td>
                                   <td style={{ padding: '0.25rem 1.375rem' }}>{field.new_value}</td>
                              </tr>
                         )}</tbody>
               </Table> : 'No data'
          }

     </>

     )

}

export default function Index() {
     const { auth, errors, roles, logs } = usePage().props;
     const { data } = logs;
     const RenderLogRows = ({ log }) => {
          return (<>
               {log.map((item, index) =>
                    <tr key={index}>
                         <td>{new Date(item.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                         <td>{item.logdata.data.subject}</td>
                         <td>{item.logdata.data.form}</td>
                         <td>{item.logdata.data.sub_form}</td>
                         <td>{item.logdata.type}</td>
                         <td>
                              {item.logdata.data.sub_form !== 'Symptoms' && <RenderPhysicalExaminationEditLog fields={item.logdata.fields} />}
                              {item.logdata.data.sub_form === 'Symptoms' && <RenderSymptomsEditLog fields={item.logdata.fields} />}
                         </td>
                    </tr>
               )}

          </>)
     }
     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Logs</h2>
                         {/* {roles.coordinator && <Link href={route('crf.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>} */}

                    </div>

               }
               role={roles}
          >


               <Head title="Logs" />
               <Table striped bordered hover size="sm">
                    <tbody>
                         <RenderLogRows log={data} />
                    </tbody>
               </Table>
               <TablePagination links={logs.links} />
          </Authenticated>
     )
}