import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsDisapprove({ role, crf, postoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          disapprove: '0'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.postoperative.update', { crf: crf, postoperative: postoperative }));
     }
     return (
          <>{role.investigator &&
               <>{postoperative.visit_status !== null &&
                    <>
                         {postoperative.visit_status ? '' :  <form onSubmit={handlesubmit} className='me-2'>
                              <FormButton processing={processing} labelText='Disapprove' type="submit" mode="danger" />
                         </form> 
                         }
                    </>
               }</>
          }  </>


     )
}
