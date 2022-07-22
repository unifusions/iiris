
import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";



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
                                   {personalhistories.smoking_since !== null &&  <RenderFieldDatas labelText='Smoking Since' value={new Date(personalhistories.smoking_since).toLocaleString('en-in', options)} />}
                                   {personalhistories.smoking_stopped !== null &&  <RenderFieldDatas labelText='Stopped Since' value={new Date(personalhistories.smoking_stopped).toLocaleString('en-in', options)} />}

                              </>
                              }

                              <hr />
                              <RenderFieldDatas labelText='Alcohol' value={personalhistories.alchohol} />

                              {personalhistories.alchohol !== 'Never' && <>
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.quantity} />
                                   {personalhistories.alchohol_since !== null &&  <RenderFieldDatas labelText='Consuming Since' value={new Date(personalhistories.alchohol_since).toLocaleString('en-in', options)} />}
                                   {personalhistories.alchohol_stopped !== null && <RenderFieldDatas labelText='Stopped Since' value={new Date(personalhistories.alchohol_stopped).toLocaleString('en-in', options)} />}

                                  
                                   
                              </>}

                              <hr />

                              <RenderFieldDatas labelText='Tobacco' value={personalhistories.tobacco} />

                              {personalhistories.tobacco !== 'Never' && <>
                                   <RenderFieldDatas labelText='Type' value={personalhistories.tobacco_type} />
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.tobacco_quantity} />
                                   {personalhistories.tobacco_since !== null && <RenderFieldDatas labelText='Consuming Since' value={new Date(personalhistories.tobacco_since).toLocaleString('en-in', options)} />}
                                   {personalhistories.tobacco_stopped !== null && <RenderFieldDatas labelText='Stopped Since' value={new Date(personalhistories.tobacco_stopped).toLocaleString('en-in', options)} />}

                                   

                              </>}


                         </> : <span className="fw-normal text-secondary fst-italic">No Personal History has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
