import { useForm, usePage } from "@inertiajs/react"
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormButton from "@/Pages/Shared/FormButton";
export default function ActionApprove({ crf, entity, entityType }) {
    const { roles } = usePage().props;

    const { data, put, setData, processing } = useForm({
        approve: '1',
        remarks: '',
        action: 'Approved'
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

      if (!roles.investigator) return ;
    if (entity?.visit_status === null) return null;
    if (entity?.visit_status) return null;

    return (

        <>

            <Button variant="success" onClick={handleShow}> Approve </Button>



            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handlesubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remarks/Reason</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                    <Modal.Footer>
                        <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />

                    </Modal.Footer>
                </form>
            </Modal>
        </>

    )
}