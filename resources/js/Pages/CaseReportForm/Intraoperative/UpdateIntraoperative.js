
import React, { useEffect, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Row, Col, Card, Container, Modal, Button } from 'react-bootstrap';
import FormCalendar from '@/Pages/Shared/FormCalendar';
import FormButton from '@/Pages/Shared/FormButton';
import FormInput from '@/Pages/Shared/FormInput';
import FormRadio from '@/Pages/Shared/FormRadio';
import FormInputWithLabel from '@/Pages/Shared/FormInputWithLabel';
import { TrashIcon } from '@heroicons/react/solid';
import FileDeleteConfirmDialog from '@/Components/FileDeleteConfirmDialog';
import ReviewerIntraUpdate from './ReviewerIntraUpdate';
import { BOOLYESNO, PREDEFINED_CONCOMITANT_PROCEDURE } from '../FormFields/Helper';
import { Inertia } from '@inertiajs/inertia';


export default function UpdateIntraOperative({ crf, intraoperative, role, intradicomfiles, intraopfileswext }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          case_report_form_id: intraoperative.case_report_form_id,
          date_of_procedure: intraoperative.date_of_procedure !== null ? intraoperative.date_of_procedure : '',
          is_submitted: intraoperative.is_submitted || 0,
          arterial_cannulation: intraoperative.arterial_cannulation || '',
          venous_cannulation: intraoperative.venous_cannulation || '',
          cardioplegia: intraoperative.cardioplegia || '',
          aortotomy: intraoperative.aortotomy || '',
          aortotomy_others: intraoperative.aortotomy_others || '',
          annular_suturing_technique: intraoperative.annular_suturing_technique || '',
          annular_suturing_others: intraoperative.annular_suturing_others || '',
          tcb_time: intraoperative.tcb_time || '',
          acc_time: intraoperative.acc_time || '',

          cabg: intraoperative.cabg !== null ? intraoperative.cabg === 1 ? '1' : '0' : '',
          mitral_valve_repair: intraoperative.mitral_valve_repair !== null ? intraoperative.mitral_valve_repair === 1 ? '1' : '0' : '',
          mitral_valve_replacement: intraoperative.mitral_valve_replacement !== null ? intraoperative.mitral_valve_replacement === 1 ? '1' : '0' : '',
          aortic_root: intraoperative.aortic_root !== null ? intraoperative.aortic_root === 1 ? '1' : '0' : '',
          ascending_aorta: intraoperative.ascending_aorta !== null ? intraoperative.ascending_aorta === 1 ? '1' : '0' : '',
          aortic_arch: intraoperative.aortic_arch !== null ? intraoperative.aortic_arch === 1 ? '1' : '0' : '',
          concomitant_procedure_others: intraoperative.concomitant_procedure_others !== null ? intraoperative.concomitant_procedure_others === 1 ? '1' : '0' : '',
          concomitant_procedure_others_specify: intraoperative.concomitant_procedure_others_specify || '',


          concomitant_procedure: intraoperative.concomitant_procedure || '',
          all_paravalvular_leak: intraoperative.all_paravalvular_leak !== null ? intraoperative.all_paravalvular_leak === 1 ? '1' : '0' : '',
          all_paravalvular_leak_specify: intraoperative.all_paravalvular_leak_specify || '',
          major_paravalvular_leak: intraoperative.major_paravalvular_leak !== null ? intraoperative.major_paravalvular_leak === 1 ? '1' : '0' : '',
          major_paravalvular_leak_specify: intraoperative.major_paravalvular_leak_specify || '',
          difiles: '',

     });


     const [fullscreen, setFullscreen] = useState(true);
     const [show, setShow] = useState(false);
     const [imageurl, setImageurl] = useState();



     function handleShow(file) {
          // setFullscreen(breakpoint);
          fetch(route('crf.intraoperative.fileupload.show', { crf: crf, intraoperative: intraoperative, fileupload: file.file }))
               .then(response => response.json())
               .then(data => {
                  
                    setImageurl(data.imageurl)
                    setShow(true)
               }
               )

          // Inertia.get(route('crf.intraoperative.fileupload.show', { crf: crf, intraoperative: intraoperative, fileupload: file.file }, {


          //      // data : {crf: crf, intraoperative: intraoperative, fileupload: file},
          //      onSuccess: response => { console.log(response) },
          // }));

     }

     const [isAortotomyOthers, setAortotomyOthers] = useState(false);
     const [isAannularSuturingOthers, setAnnularSuturingOthers] = useState(false);

     useEffect(() => {
          data.aortotomy === 'Others' ? setAortotomyOthers(true) : setAortotomyOthers(false)
     }, [data.aortotomy]);

     useEffect(() => {
          data.annular_suturing_technique === 'Others' ? setAnnularSuturingOthers(true) : setAnnularSuturingOthers(false)
     }, [data.annular_suturing_technique]);


     function handlesubmit(e) {
          e.preventDefault();

          put(route('crf.intraoperative.update', { crf: crf, intraoperative: intraoperative }));
     }

     const aortotomyRadios = [
          { labelText: 'Vertical', value: 'Vertical', checked: data.aortotomy === 'Vertical' },
          { labelText: 'Oblique', value: 'Oblique', checked: data.aortotomy === 'Oblique' },
          { labelText: 'Transverse', value: 'Transverse', checked: data.aortotomy === 'Transverse' },
          { labelText: 'Others', value: 'Others', checked: data.aortotomy === 'Others' },
     ];

     const annularSuturingRadios = [
          { labelText: 'Simple', value: 'Simple', checked: data.annular_suturing_technique === 'Simple' },
          { labelText: 'Interrupted Pledgeted', value: 'Interrupted Pledgeted', checked: data.annular_suturing_technique === 'Interrupted Pledgeted' },
          { labelText: 'Interrupted non-Pledgeted', value: 'Interrupted non-Pledgeted', checked: data.annular_suturing_technique === 'Interrupted non-Pledgeted' },
          { labelText: 'Continuous', value: 'Continuous', checked: data.annular_suturing_technique === 'Continuous' },
          { labelText: 'Others', value: 'Others', checked: data.annular_suturing_technique === 'Others' },
     ];



     const iconStyle = { width: 18, height: 18 };

     return (
          <>

               {!role.reviewer ?
                    <>
                         <form onSubmit={handlesubmit} >
                              <FormCalendar
                                   labelText="Date of Procedure" error={errors.date_of_procedure}
                                   name="date_of_procedure"
                                   value={data.date_of_procedure}
                                   handleChange={(date) => date !== null ? setData('date_of_procedure', new Date(date)) : setData('date_of_procedure', '')}

                                   className={`${errors.date_of_procedure && 'is-invalid'}`}
                              />
                              <hr />
                              <div className="row mb-3">
                                   <div className="col-sm-12 fw-bold">Surgical Strategy</div>

                              </div>

                              <FormInput
                                   type="text"
                                   className={`${errors.arterial_cannulation && 'is-invalid '}`}
                                   value={data.arterial_cannulation}
                                   error={errors.arterial_cannulation}
                                   labelText="Arterial Cannulation"
                                   handleChange={e => setData('arterial_cannulation', e.target.value)} />
                              <FormInput
                                   type="text"
                                   className={`${errors.venous_cannulation && 'is-invalid '}`}
                                   value={data.venous_cannulation}
                                   error={errors.venous_cannulation}
                                   labelText="Venous Cannulation"
                                   handleChange={e => setData('venous_cannulation', e.target.value)} />
                              <FormInput
                                   type="text"
                                   className={`${errors.cardioplegia && 'is-invalid '}`}
                                   error={errors.cardioplegia} labelText="Cardioplegia"
                                   value={data.cardioplegia}
                                   handleChange={e => setData('cardioplegia', e.target.value)} />

                              <FormRadio
                                   type="radio" labelText="Aortotomy"
                                   name="aortotomy"
                                   selectedValue={data.aortotomy}
                                   options={aortotomyRadios}
                                   handleChange={e => setData('aortotomy', e.target.value)}
                                   error={errors.aortotomy}

                                   className={`${errors.aortotomy ? 'is-invalid' : ''}`}
                              />

                              {isAortotomyOthers &&
                                   <FormInput
                                        type="text"
                                        className={`${errors.aortotomy_others && 'is-invalid '}`}
                                        error={errors.aortotomy_others}
                                        value={data.aortotomy_others} labelText="Aortotomy Others"
                                        handleChange={e => setData('aortotomy_others', e.target.value)} />}

                              <FormRadio
                                   type="radio" labelText="Annular Suturing Technique"
                                   name="annular_suturing_technique"
                                   options={annularSuturingRadios}
                                   selectedValue={data.annular_suturing_technique}
                                   handleChange={e => setData('annular_suturing_technique', e.target.value)}
                                   error={errors.annular_suturing_technique}
                                   className={`${errors.annular_suturing_technique ? 'is-invalid' : ''}`}
                              />

                              {isAannularSuturingOthers &&
                                   <FormInput
                                        type="text"
                                        className={`${errors.annular_suturing_others && 'is-invalid '}`}
                                        value={data.annular_suturing_others}
                                        error={errors.annular_suturing_others} labelText="Aortotomy Others"
                                        handleChange={e => setData('annular_suturing_others', e.target.value)} />
                              }

                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.tcb_time && 'is-invalid '}`}
                                   error={errors.tcb_time} labelText="Total Cardiopulmonary Bypass Time"
                                   value={data.tcb_time} units='mins'
                                   handleChange={e => setData('tcb_time', e.target.value)} />

                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.acc_time && 'is-invalid '}`}
                                   error={errors.acc_time} labelText="Aortic Cross Clamp Time"
                                   value={data.acc_time} units='mins'
                                   handleChange={e => setData('acc_time', e.target.value)} />


                              <hr />
                              <div className="row mb-3">
                                   <div className="col-sm-12 fw-bold">Concomitant Procedure</div>

                              </div>

                              {PREDEFINED_CONCOMITANT_PROCEDURE.map((field) => <>
                                   <FormRadio
                                        type="radio" labelText={field.labelText}
                                        name={field.fieldName}
                                        options={BOOLYESNO}
                                        selectedValue={data[field.fieldName]}
                                        handleChange={e => setData(`${field.fieldName}`, e.target.value)}
                                        error={errors[field.fieldName]}
                                        className={`${errors[field.fieldName] ? 'is-invalid' : ''}`} />

                                   {field.fieldName === 'concomitant_procedure_others' && (
                                        data[field.fieldName] !== undefined && (
                                             data[field.fieldName] === '1' && (
                                                  <FormInput
                                                       type="text"
                                                       className={`${errors.concomitant_procedure && 'is-invalid '}`}
                                                       value={data[`${field.fieldName}_specify`]}
                                                       error={errors[`${field.fieldName}_specify`]} labelText="Pls Specify"
                                                       handleChange={e => setData(`${field.fieldName}_specify`, e.target.value)} />
                                             )
                                        )
                                   )}



                                   {/* {data[concomitant_procedure_others] === '1' &&

                                        (field.fieldName === 'concomitant_procedure_others' &&
                                             <FormInput
                                                  type="text"
                                                  className={`${errors.concomitant_procedure && 'is-invalid '}`}
                                                  value={data.concomitant_procedure}
                                                  error={errors.concomitant_procedure} labelText="Pls Specify"
                                                  handleChange={e => setData('concomitant_procedure', e.target.value)} />
                                        )

                                   } */}

                              </>
                              )}



                              <hr />

                              <div className="row mb-3">
                                   <div className="col-sm-12 fw-bold">Intraoperative TEE</div>

                              </div>
                              <FormRadio
                                   type="radio" labelText="All Paravalvular Leak"
                                   name="all_paravalvular_leak"
                                   options={BOOLYESNO}
                                   selectedValue={data.all_paravalvular_leak}
                                   handleChange={e => setData('all_paravalvular_leak', e.target.value)}
                                   error={errors.all_paravalvular_leak}
                                   className={`${errors.all_paravalvular_leak ? 'is-invalid' : ''}`} />

                              {data.all_paravalvular_leak === '1' ? <FormInput
                                   type="text"
                                   className={`${errors.all_paravalvular_leak_specify && 'is-invalid '}`}
                                   value={data.all_paravalvular_leak_specify}
                                   error={errors.all_paravalvular_leak_specify} labelText="If Yes, please Specify"
                                   handleChange={e => setData('all_paravalvular_leak_specify', e.target.value)}

                              /> : ''
                              }


                              <FormRadio
                                   type="radio" labelText="Major Paravalvular Leak"
                                   name="major_paravalvular_leak"
                                   options={BOOLYESNO}
                                   selectedValue={data.major_paravalvular_leak}
                                   handleChange={e => setData('major_paravalvular_leak', e.target.value)}
                                   error={errors.major_paravalvular_leak}
                                   className={`${errors.major_paravalvular_leak ? 'is-invalid' : ''}`} />


                              {data.major_paravalvular_leak === '1' ? <FormInput
                                   type="text"
                                   className={`${errors.major_paravalvular_leak_specify && 'is-invalid '}`}
                                   value={data.major_paravalvular_leak_specify}
                                   error={errors.major_paravalvular_leak_specify} labelText="If Yes, please Specify"
                                   handleChange={e => setData('major_paravalvular_leak_specify', e.target.value)} /> : ''
                              }

                              <hr />




                              {intraopfileswext !== undefined &&
                                   <Row>
                                        <Col md={3} className='text-secondary'>Echo Files</Col>
                                        <Col md={6} >
                                             {intraopfileswext !== undefined && <>
                                                  {intraopfileswext.map((file) =>
                                                       <div key={file.file.id} className="mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                 <div> {file.file.file_name}</div>
                                                                 <div>

                                                                      {
                                                                           file.file.file_name &&
                                                                           (file.extension === 'jpg' || file.extension === 'png' || file.extension === 'jpeg') &&
                                                                           <>
                                                                                <Button variant="outline-info" className="btn-sm me-2" onClick={() => handleShow(file)} >
                                                                                     View

                                                                                </Button>

                                                                                <Modal show={show} dialogClassName="modal-90w" onHide={() => setShow(false)}>
                                                                                     <Modal.Header closeButton>
                                                                                          <Modal.Title id="example-custom-modal-styling-title">
                                                                                               {file.file.file_name}
                                                                                          </Modal.Title>
                                                                                     </Modal.Header>
                                                                                     <Modal.Body>
                                                                                          <img src={imageurl} />
                                                                                     </Modal.Body>
                                                                                </Modal>

                                                                           </>

                                                                      }


                                                                      {
                                                                           file.file.file_name &&
                                                                           (file.extension === '512' || file.extension === 'dic' || file.extension === '') &&
                                                                           <>




                                                                                <a
                                                                                     className='btn btn-outline-info btn-sm me-2'
                                                                                     href={route('crf.intraoperative.fileupload.show', { crf: crf, intraoperative: intraoperative, fileupload: file.file })}
                                                                                     target="_blank" rel="noopener noreferrer">View</a></>}

                                                                      <a
                                                                           className='btn btn-outline-success btn-sm'
                                                                           href={route('intraoperativefiledownload', { crf: crf, intraoperative: intraoperative, fileupload: file.file })}>Download</a>

                                                                      {role.admin &&



                                                                           <FileDeleteConfirmDialog
                                                                                url='crf.intraoperative.fileupload.destroy'
                                                                                options={{ crf: crf, intraoperative: intraoperative, fileupload: file.file }}
                                                                           />


                                                                      }

                                                                 </div>
                                                            </div>




                                                       </div>
                                                  )}
                                             </>}
                                        </Col>
                                        <Col md={3}>
                                             <Link href={route('crf.intraoperative.fileupload.index', { crf: crf, intraoperative: intraoperative })} className="btn btn-sm btn-secondary"> Upload Files</Link>
                                        </Col>
                                   </Row>

                              }

                              <hr />



                              {role.coordinator && <FormButton processing={processing} labelText='Update' type="submit" mode="warning" />}


                         </form>
                    </>
                    :
                    <>
                         {intraoperative.visit_status ? <ReviewerIntraUpdate crf={crf} intraoperative={intraoperative} /> : 'Form is yet to be approved'}

                    </>
               }

          </>

     )
}
