import FormButton from "@/Pages/Shared/FormButton";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import { Col, Row } from "react-bootstrap";
import { RenderFieldBoolNoDatas, RenderFieldDatas } from "../FormData/FormDataHelper";





export default function ReviewerIntraUpdate({ crf, intraoperative }) {


     const BOOLRADIOS = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ]

     const { data, setData, errors, patch, processing, hasErrors } = useForm({
          r_all_paravalvular_leak: intraoperative.r_all_paravalvular_leak !== null ? intraoperative.r_all_paravalvular_leak === 1 ? '1' : '0' : '',
          r_major_paravalvular_leak: intraoperative.r_major_paravalvular_leak !== null ? intraoperative.r_major_paravalvular_leak === 1 ? '1' : '0' : '',
          r_comments: intraoperative.r_comments || ''
     })




     const MarkasReviewed = ({ intraoperative }) => {
          function handleReviewed(e) {
               e.preventDefault();
               return patch(route('markasreviewedintra', { intraoperative: intraoperative }))

          }
          return (
               <form onSubmit={handleReviewed}>
                    <FormButton processing={processing} labelText='Mark as Reviewed' type="submit" mode="success btn-sm" />
               </form>
          )
     }

     function handlesubmit(e) {
          e.preventDefault();
          return patch(route('submitintrareview', { intraoperative: intraoperative }));
     }
     return (
          <>

               {intraoperative.is_reviewed ?

                    //Render Reviewed Data
                    <>
                        
                         <RenderFieldBoolNoDatas labelText='All paravalvular leak' boolValue={intraoperative.r_all_paravalvular_leak}  />
                         <RenderFieldBoolNoDatas labelText='Major Pravalvular Leak' boolValue={intraoperative.r_major_paravalvular_leak}  />
                         <RenderFieldDatas labelText='Comments' value={intraoperative.r_comments} />
                    </> :



                    // Render Review Form for reviewer
                    <>
                         <div className="d-flex justify-content-between">
                              <div className="fs-6 fw-bold">
                                   Intraoperative Review
                              </div>
                              <MarkasReviewed intraoperative={intraoperative} />
                         </div>
                         <hr />
                         <form onSubmit={handlesubmit}>
                              <FormRadio
                                   type="radio" labelText="All Paravalvular Leak"
                                   name="r_all_paravalvular_leak"
                                   options={BOOLRADIOS}
                                   selectedValue={data.r_all_paravalvular_leak}
                                   handleChange={e => setData('r_all_paravalvular_leak', e.target.value)}
                                   error={errors.r_all_paravalvular_leak}
                                   className={`${errors.all_paravalvular_leak ? 'is-invalid' : ''}`} />


                              <FormRadio
                                   type="radio" labelText="Major Paravalvular Leak"
                                   name="r_major_paravalvular_leak"
                                   options={BOOLRADIOS}
                                   selectedValue={data.r_major_paravalvular_leak}
                                   handleChange={e => setData('r_major_paravalvular_leak', e.target.value)}
                                   error={errors.r_major_paravalvular_leak}
                                   className={`${errors.r_major_paravalvular_leak ? 'is-invalid' : ''}`} />

                              <Row className="mb-3">
                                   <Col md={3} >
                                        <span className="text-secondary">Comments</span>
                                   </Col>
                                   <Col md={6}>
                                        <textarea onChange={(e) => setData('r_comments', e.target.value)} className="form-control" rows="5" value={data.r_comments}></textarea>
                                   </Col>


                              </Row>
                              <Row>
                                   <Col md={3}></Col>
                                   <Col md={6}><FormButton processing={processing} labelText='Save Changes' type="submit" mode="primary btn-sm" /></Col>
                              </Row>

                         </form>




                    </>}

               <hr />
          </>
     );
}