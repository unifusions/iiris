import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsDisapprove({ role, crf, intraoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          disapprove: '0'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.intraoperative.update', { crf: crf, intraoperative: intraoperative }));
     }
     return (
          <>{role.investigator &&
               <>{intraoperative.visit_status !== null &&
                    <>
                         {intraoperative.visit_status ? '' :  <form onSubmit={handlesubmit} className='me-2'>
                              <FormButton processing={processing} labelText='Disapprove' type="submit" mode="danger" />
                         </form> 
                         }
                    </>
               }</>
          }  </>


     )
}
