import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm, usePage } from "@inertiajs/react"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";

export default function ActionsEditable({ crf,
    entity,
    entityType }) {

    const { roles } = usePage().props;
    const { data, setData, errors, put, processing, hasErrors } = useForm({
        remarks: '',
        action: 'Unlocked'
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

    if (!roles?.admin) return null;
    if (entity?.visit_status === null) return null;
    if (entity?.visit_status !== 1) return null;

    return (
        <> 

            <Button variant="primary" onClick={handleShow} className='me-2'> Unlock </Button>


            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handlesubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remarks/Reason</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                    <Modal.Footer>
                        <FormButton processing={processing} labelText='Unlock' type="submit" mode="danger" />

                    </Modal.Footer>
                </form>
            </Modal>




        </>


    )
}
