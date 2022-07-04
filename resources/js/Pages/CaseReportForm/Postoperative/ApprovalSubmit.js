import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalSubmit({ role, crf, postoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          is_submitted: '1'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.postoperative.update', { crf: crf, postoperative: postoperative }));
     }
     return (
          <>{role.coordinator &&
               <>{postoperative.is_submitted !== null &&
                    <>
                         {postoperative.is_submitted ? '' :
                              <form onSubmit={handlesubmit}>

                                   <FormButton processing={processing} labelText='Submit for Approval' type="submit" mode="primary" />


                              </form>}
                    </>
               }</>
          }  </>


     )
}
