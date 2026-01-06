
import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDateFieldDatas } from "./FormDataHelper";



export default function PersonalHistoryData({ personalhistories, role, createUrl, editUrl, enableActions }) {
     const options = {

          year: 'numeric'
     }
     return (

          <Card className="mb-3 rounded-5 shadow-sm">


               <Card.Body>

                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold mb-3'>
                              Personal History
                         </div>

                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {personalhistories === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div>

                    {personalhistories !== null ?
                         <>

                              <RenderFieldDatas labelText='Smoking' value={personalhistories.smoking} />
                              {personalhistories.smoking !== 'Never' && <>
                                   <RenderFieldDatas labelText='No. of. Cigaretters' value={personalhistories.cigarettes} />
                                   <RenderDateFieldDatas labelText='Smoking Since' value={personalhistories.smoking_since} options={options} />
                                   {personalhistories.smoking === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.smoking_stopped} options={options} />

                                   </>}

                              </>
                              }

                              <hr />
                              <RenderFieldDatas labelText='Alcohol' value={personalhistories.alchohol} />

                              {personalhistories.alchohol !== 'Never' && <>
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.quantity} units='ml'/>
                                   <RenderDateFieldDatas labelText='Consuming Since' value={personalhistories.alchohol_since} options={options} />
                                   {personalhistories.alchohol === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.alchohol_stopped} options={options} />

                                   </>}
                                  


                              </>}

                              <hr />

                              <RenderFieldDatas labelText='Tobacco' value={personalhistories.tobacco} />

                              {personalhistories.tobacco !== 'Never' && <>
                                   <RenderFieldDatas labelText='Type' value={personalhistories.tobacco_type} />
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.tobacco_quantity} />

                                   <RenderDateFieldDatas labelText='Consuming Since' value={personalhistories.tobacco_since} options={options} />
                                   {personalhistories.tobacco === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.tobacco_stopped} options={options} />

                                   </>}

                                 



                              </>}


                         </> : <span className="fw-normal text-secondary fst-italic">No Personal History has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
