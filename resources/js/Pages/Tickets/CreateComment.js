import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import { Card } from "react-bootstrap";
import FormButton from "../Shared/FormButton";

export default function CreateComment({ ticket, auth }) {

     const { data, setData, post, processing, reset } = useForm({
          content: '',
          user_id: auth.user.id,
          ticket_id: ticket.id,


     })

     function handleSubmit(e) {
          e.preventDefault();
          post(route('interactions')
          , {
               preserveScroll: true,
               onSuccess: () => reset(),
             });
     }

     return (
          <>
               <Card className='shadow-sm rounded-5'>
                    <Card.Body>
                         <form onSubmit={handleSubmit}>
                              <textarea onChange={(e) => setData('content', e.target.value)} className="form-control mb-3" rows="5" value={data.content}></textarea>
                              <FormButton processing={processing} labelText='Post a Reply' type="submit" mode="primary" />
                         </form>
                    </Card.Body>
               </Card>
          </>
     )
}