import FormButton from "@/Pages/Shared/FormButton";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";


export default function MarkasReviewed({ echocardiography }) {
     const { data, setData, errors, patch, processing, hasErrors } = useForm({
     });

     function handleReviewed(e) {
          e.preventDefault();
          return patch(route('markasreviewed', { echocardiography: echocardiography }))

     }


     return (
          <form onSubmit={handleReviewed}>
               <FormButton processing={processing} labelText='Mark as Reviewed' type="submit" mode="success btn-sm" />
          </form>
     )
}
