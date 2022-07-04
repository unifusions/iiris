import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsDisapprove({ role, crf, preoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          disapprove: '0'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.preoperative.update', { crf: crf, preoperative: preoperative }));
     }
     return (
          <>{role.investigator &&
               <>{preoperative.visit_status !== null &&
                    <>
                         {preoperative.visit_status ? '' :  <form onSubmit={handlesubmit} className='me-2'>
                              <FormButton processing={processing} labelText='Disapprove' type="submit" mode="danger" />
                         </form> 
                         }
                    </>
               }</>
          }  </>


     )
}
