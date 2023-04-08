
import Authenticated from "@/Layouts/Authenticated";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React, { forwardRef, useEffect, useState } from "react";
import { Card, Dropdown, Form, Table } from "react-bootstrap";
import TablePagination from "../Shared/TablePagination";

export default function Index() {


     const { tickets, auth, errors, roles, pagination } = usePage().props;
     const { data, links } = tickets;
     const { filterStatus, setFilterStatus } = useState({ filterStatus: '' })
     const CustomToggle = forwardRef(({ children, onClick }, ref) => (
          <a
               href=""
               ref={ref}
               onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
               }}
               className='dropDownToggleMenu'
          >
               {children}
               &#x25bc;
          </a>
     ));

     const CustomItem = forwardRef(({ children, onClick, value }, ref) => (
          <li>
               <a
                    ref={ref}
                    onClick={(e) => {
                         e.preventDefault();
                         onClick(e);
                    }}
                    name={value}
                    className='dropDownToggleMenuItem'
               >
                    {children}

               </a>
          </li>
     ));


     const CustomMenu = forwardRef(
          ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
               const [value, setValue] = useState('');

               return (
                    <div
                         ref={ref}
                         style={style}
                         className={className}
                         aria-labelledby={labeledBy}
                    >
                         {/* <Form.Control
                  autoFocus
                  className="mx-3 my-2 w-auto"
                  placeholder="Type to filter..."
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                /> */}
                         <ul className="dropDownToggleMenuItemList">
                              {children}
                              {/* {React.Children.toArray(children).filter(
                    (child) =>
                      !value || child.props.children.toString().toLowerCase().startsWith(value),
                  )} */}
                         </ul>
                    </div>
               );
          },
     );

     const RenderStatus = ({ status }) => {

          switch (status) {
               case 'Open': return (<><span className='dot bg-success me-1'></span> {status}</>)
               case 'Closed': return (<><span className='dot bg-danger me-1'></span> {status}</>)
               default: return (<><span className='dot bg-warning me-1'></span>{status}</>)
          }

     }
     const iconStyle = {
          width: 18,
          height: 18,
     };

     function handleFilterbyStatus(e) {
          Inertia.reload({ data: { status: e.target.name } });
     }



     return (
          <Authenticated
               auth={auth}
               errors={errors}
               header={
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Queries</h2>
                         <Link href={route('tickets.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>

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
                                        <th>Query ID</th>
                                        <th>Form Query</th>
                                        <th>Message</th>
                                        {/* {(roles.admin || roles.sudo) &&
                                             <th>To User/Facility</th>
                                        } */}
                                        <th>Query By</th>
                                        <th>Query To</th>
                                        <th>
                                             <Dropdown>
                                                  <Dropdown.Toggle as={CustomToggle}>
                                                       Status
                                                  </Dropdown.Toggle>
                                                  <Dropdown.Menu as={CustomMenu} className='dropDownMenu'>
                                                       <Dropdown.Item as={CustomItem} onClick={(e) => handleFilterbyStatus(e)} value='Open'>Open</Dropdown.Item>
                                                       <Dropdown.Item as={CustomItem} onClick={(e) => handleFilterbyStatus(e)} value='Closed'> Closed</Dropdown.Item>
                                                       <Dropdown.Item as={CustomItem} onClick={(e) => handleFilterbyStatus(e)} value=''>All</Dropdown.Item>
                                                  </Dropdown.Menu>
                                             </Dropdown>


                                        </th>
                                        <th>Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {data.map((ticket, index) => <tr key={ticket.id}>
                                        <td>{ticket.id}</td>
                                        <td>{ticket.form_data}</td>
                                        <td>{ticket.subject}</td>
                                        <td>{ticket.from_user}</td>
                                        <td>{ticket.to_user !== null ? ticket.to_user : 'Cliniquest Admin'}</td>
                                        {/* {(roles.admin || roles.sudo) &&
                                             <td>{ticket.isAdminQuery ?
                                                  <> <ArrowRightIcon style={iconStyle} className='text-success me-3' /> {ticket.to_user} / {ticket.facility}</> :
                                                  <>  <ArrowLeftIcon style={iconStyle} className='text-danger me-3' /> {ticket.to_user} </>}
                                             </td>
                                        }
                                        */}
                                        <td><RenderStatus status={ticket.status} /></td>
                                        <td><Link href={ticket.ticketUrl} method="get" type="button" as="button" className="btn btn-sm btn-primary">View</Link></td>



                                   </tr>)}

                              </tbody>
                         </Table>
                         <hr />
                         <TablePagination links={links} />
                    </Card.Body>
               </Card>

          </Authenticated>
     )
}
