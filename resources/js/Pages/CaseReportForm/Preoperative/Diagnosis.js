import FormRadio from "@/Pages/Shared/FormRadio";
import { useForm } from "@inertiajs/inertia-react";
import { Card } from "react-bootstrap";

export default function Diagnosis({ crf, preoperative }) {
     const { data, setData, errors, put, processing, hasErrors } = useForm({
          diagnosis: '',
     });

     const boolRadios = [
          { labelText: 'Aortic Regurgitation', value: 'regurgitation' },
          { labelText: 'Aortic Stenosis', value: 'stenosis' },
          { labelText: 'Both', value: 'both' }
     ];

     function preopSubmit(e) {
          e.preventDefault();
          put(route(`${updateUrl}`, { crf: crf, preoperative: preoperative }))
     }

     return (
          <>
               <Card className="mb-3 rounded-5 shadow-sm">
                    <Card.Body>
                         <div className='d-flex justify-content-between align-items-center'>
                              <div className='fs-6 fw-bold'>
                                   Diagnosis
                              </div>
                         </div>
                         <hr />

                         <form onSubmit={preopSubmit} >
                              <FormRadio
                                   labelText='Diagnosis'

                                   options={boolRadios}
                                   name="diagnosis"
                                   handleChange={e => setData('diagnosis', e.target.value)}
                                   selectedValue={data.diagnosis !== null && data.diagnosis}
                                   error={errors.diagnosis}
                                   className={`${errors.diagnosis ? 'is-invalid' : ''}`}
                              />
                         </form>

                    </Card.Body>
               </Card>
          </>
     );
}