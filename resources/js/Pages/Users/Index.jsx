import React from "react";

import Authenticated from "@/Layouts/Authenticated";
 
import { Head, Link, usePage } from "@inertiajs/react";
 

export default function Index() {
     const {users} = usePage().props;

 return (
<Authenticated  pageTitle="Users">
     <div className="card-clinical animate-fade-in">
          <div className="p-6 border-b border-border">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <h2 className="text-lg font-semibold text-foreground">Users</h2>
            <p className="text-sm text-muted-foreground">
              {users.length} Users found
            </p>
               </div>
          </div>
     </div>
<div className="overflow-x-auto">
                        <div className="relative w-full overflow-auto ">
      <table className="w-full caption-bottom text-sm">
                               <thead  className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50">
                                         <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:bg-muted/50 px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                             ID
                                         </th>

                                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:bg-muted/50 px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                             User
                                         </th>
                                    
                                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:bg-muted/50 px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                             Role
                                         </th>

  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:bg-muted/50 px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                             Facility
                                         </th>
                                         <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 cursor-pointer hover:bg-muted/50 px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                         Actions</th>

                                    
                                    </tr>
                              </thead>
                               <tbody>

                                    {users.map((user, index) => <tr key={user.id}  
                                    className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50 " >
                                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">{index + 1}</td>
                                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">
                                                  
                                                  <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground ">{user.email}</p>
                    </div>
                     </td>
                     <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">{user.role}</td>
                                               
                                              
                                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0  px-6 py-2 whitespace-nowrap text-sm text-muted-foreground">{user.facility}</td>
                                          
                                              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 px-6 py-2 whitespace-nowrap text-right"><Link href={route('users.edit', { user: user })} className='btn btn-warning btn-sm'> Edit </Link></td>
                                         </tr>)}

                                    
                               </tbody>
                          </table>
                          </div>
                    
                     </div>
</Authenticated>
 )
}
// export default class Index2 extends React.Component {

//      constructor(props) {
//           super(props);
//      }

//      render() {
//           return (
//                <Authenticated
//                      pageTitle="Users"
//                     header={
//                          <div className='d-flex justify-content-between align-items-center mb-3'>
//                               <h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
//                               <Link href={route('users.create')} className="btn btn-primary" method="get" type="button" as="button" >Create</Link>
//                          </div>

//                     }
                    
//                >
                    
//                     <div className="overflow-x-auto">
//                          <div className="relative w-full overflow-auto">
//      <table className="w-full caption-bottom text-sm">
//                               <thead>
//                                    <tr>
//                                         <th></th>
//                                    </tr>
//                               </thead>
//                               <tbody>
//                                    <tr>
//                                         <td>

//                                         </td>
//                                    </tr>
//                               </tbody>
//                          </table>
//                          </div>
                    
//                     </div>
//                     <Card className="card shadow-sm rounded-5">
//                          <Card.Body>
//                               <Table hover responsive size="sm">
//                                    <thead>
//                                         <tr>
//                                              <th>#</th>
//                                              <th>Full Name</th>
//                                              <th>Registered Email</th>
//                                              <th>Role</th>
//                                              <th>Facility</th>
//                                              <th></th>
                                             
//                                         </tr>
//                                    </thead>
//                                    <tbody>
//                                         {this.props.users.map((user, index) => <tr key={user.id} >
//                                              <td>{index + 1}</td>
//                                              <td>{user.name}</td>
//                                              <td>{user.email}</td>
//                                              <td>{user.role}</td>
//                                              <td>{user.facility}</td>
                                            
//                                              <td><Link href={route('users.edit', { user: user })} className='btn btn-warning btn-sm'> Edit </Link></td>
//                                         </tr>)}
//                                    </tbody>
//                               </Table>

//                               <hr />
                             

//                          </Card.Body>


//                     </Card>


//                </Authenticated >
//           );
//      }

// }

