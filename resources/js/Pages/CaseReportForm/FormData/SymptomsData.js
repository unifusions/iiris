import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDuration } from "./FormDataHelper";



export default function SymptomsData({ symptoms, role, createUrl, editUrl, enableActions, title }) {

    
     return (

          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              {title} Symptoms
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {symptoms === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div><hr />
                    {symptoms !== null ?
                         <>
                              {symptoms.symptoms ? <>
                                   <RenderFieldDatas labelText="Symptoms" value={symptoms.symptoms && 'Yes'} />

                                   <RenderFieldDatas labelText="Angina on Exertion"
                                        value={symptoms.angina ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.angina_class !== null && <div className="ms-4">{symptoms.angina_class}</div>}
                                             {symptoms.angina_duration !== null && <RenderDuration duration={symptoms.angina_duration} />}
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Dyspnea on Exertion"
                                        value={symptoms.dyspnea ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.dyspnea_class !== null && <div className="ms-4">{symptoms.dyspnea_class}</div>}
                                             {symptoms.dyspnea_duration !== null && <RenderDuration duration={symptoms.dyspnea_duration} />
                                             }
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Syncope"
                                        value={symptoms.syncope ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.syncope !== null && <>
                                                  {symptoms.syncope_duration !== null && <RenderDuration duration={symptoms.syncope_duration} />}
                                             </>
                                             }
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Palpitation"
                                        value={symptoms.palpitation ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.palpitation !== null && <>
                                                  {symptoms.palpitation_duration !== null && <RenderDuration duration={symptoms.palpitation_duration} />}

                                             </>
                                             }
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Giddiness"
                                        value={symptoms.giddiness ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.giddiness !== null && <>
                                                  {symptoms.giddiness_duration !== null && <RenderDuration duration={symptoms.giddiness_duration} />}

                                             </>
                                             }
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Fever"
                                        value={symptoms.fever ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.fever !== null && <>
                                                  {symptoms.fever_duration !== null && <RenderDuration duration={symptoms.fever_duration} />}

                                             </>
                                             }
                                        </div> : 'No'
                                        } />

                                   <RenderFieldDatas labelText="Heart Failure Admission"
                                        value={symptoms.heart_failure_admission ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.heart_failure_admission !== null && <>
                                                  {symptoms.heart_failure_admission_duration !== null && <RenderDuration duration={symptoms.heart_failure_admission_duration} />}

                                             </>
                                             }
                                        </div> : 'No'
                                        } />
                                   
                                   <RenderFieldDatas labelText="Others"
                                        value={symptoms.others ? <div className="d-flex align-items-center">
                                             <div>Yes</div>
                                             {symptoms.others_text !== null && <div className="ms-4">{symptoms.others_text}</div>}
                                             {symptoms.others !== null && <>
                                                  {symptoms.others_duration !== null && <RenderDuration duration={symptoms.others_duration} />}

                                             </>
                                             }
                                        </div> : 'No'
                                        } />


                              </> :

                                   'No symptoms found'}





                         </> : <span className="fw-normal text-secondary fst-italic">No symptoms has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
