import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsApprove({ role, crf, postoperative }) {

     const { data, put, processing } = useForm({
          approve: '1'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.postoperative.update', { crf: crf, postoperative: postoperative }));
     }
     return (
          <>{role.investigator &&
               <>{postoperative.visit_status !== null &&
                    <>
                         {postoperative.visit_status ? '' : <form onSubmit={handlesubmit}>
                              <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />
                         </form>
                         }
                    </>
               }</>
          }  </>


     )
}
