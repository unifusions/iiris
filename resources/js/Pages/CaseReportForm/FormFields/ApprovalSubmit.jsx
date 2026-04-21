import { Button } from "@/Components/ui/button";
import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/react"
import { Upload } from "lucide-react";
import React, { useState } from "react"
import {   Modal } from "react-bootstrap";

export default function ApprovalSubmit({ role,
    crf,
    entity,
    entityType }) {

    const { data, setData, errors, put, processing, hasErrors } = useForm({
        is_submitted: '1',
        remarks: '',
        action: 'Submitted'
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handlesubmit(e) {
        e.preventDefault();
        put(route(`crf.${entityType}.update`, {
            crf: crf,
            [entityType]: entity
        }));
    }

    if (!role?.coordinator) return null;
    if (entity?.is_submitted === null) return null;
    if (entity?.is_submitted) return null;

    return (


        <>


            <Button variant="success" onClick={handleShow}>
                <Upload /> Submit</Button>

 

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handlesubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remarks/Reason</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                    <Modal.Footer>
                        <FormButton processing={processing} labelText='Submit for Approval' type="submit" mode="primary" />

                    </Modal.Footer>
                </form>
            </Modal>  
        </>




    )
}
