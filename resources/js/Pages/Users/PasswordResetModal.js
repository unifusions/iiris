


import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap";

export default function PasswordResetModal({ user }) {

    const { data, post, processing } = useForm({
        email: user.email
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handlesubmit(e) {
        e.preventDefault();
        return post(route('password.email'));
    }
    return (

        <>

            <Button variant="warning" onClick={handleShow} className=" btn-sm"> Reset Password </Button>



            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handlesubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reset Password?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure to send password reset link to <b>{user.email}</b> ?
                    </Modal.Body>
                    <Modal.Footer>
                        <FormButton processing={processing} labelText='Send Reset Link' type="submit" mode="warning btn-sm" />

                    </Modal.Footer>
                </form>
            </Modal>
        </>


    )

}




