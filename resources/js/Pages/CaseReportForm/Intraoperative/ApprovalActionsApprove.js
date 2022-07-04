import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React from "react"

export default function ApprovalActionsApprove({ role, crf, intraoperative }) {

     const { data, put, processing } = useForm({
          approve: '1'
     });

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.intraoperative.update', { crf: crf, intraoperative: intraoperative }));
     }
     return (
          <>{role.investigator &&
               <>{intraoperative.visit_status !== null &&
                    <>
                         {intraoperative.visit_status ? '' : <form onSubmit={handlesubmit}>
                              <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />
                         </form>
                         }
                    </>
               }</>
          }  </>


     )
}
