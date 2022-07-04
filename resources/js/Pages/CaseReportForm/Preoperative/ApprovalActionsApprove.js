import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsApprove({ role, crf, preoperative }) {

     const { data, put, processing } = useForm({
          approve: '1'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.preoperative.update', { crf: crf, preoperative: preoperative }));
     }
     return (
          <>{role.investigator &&
               <>{preoperative.visit_status !== null &&
                    <>
                         {preoperative.visit_status ? '' : <form onSubmit={handlesubmit}>
                              <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />
                         </form>
                         }
                    </>
               }</>
          }  </>


     )
}
