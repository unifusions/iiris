import { TrashIcon } from "@heroicons/react/outline";
import { Link, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const iconStyle = { width: 18, height: 18 };
export default ({ url, options }) => {
     const [show, setShow] = useState(false);
     const [progress, setProgress] = useState(false);

     const onProgress = () => setProgress(true);
     const handleClose = () => setShow(false);
     function onSuccessClose() {
          setProgress(false)
          setShow(false);

     }
     function handleShow() {
          setProgress(false)
          setShow(true)
     };
     return (
          <>

               <button onClick={handleShow}
                    className='btn btn-outline-danger btn-sm ms-2'
               > <TrashIcon style={iconStyle} /> Delete</button>

               <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title> Delete File</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete this file?


                    </Modal.Body>
                    <Modal.Footer>
                         <Button variant="outline-secondary" onClick={handleClose}>
                              Close
                         </Button>
                         <Link
                              method='delete' as="button"
                              onStart={onProgress}
                              onSuccess={onSuccessClose}
                              href={route(url, options)} className="btn btn-outline-danger "> {progress ? <span className="spinner-border spinner-border-sm"></span> : <><TrashIcon style={iconStyle} /> Yes, Delete</>}</Link>
                    </Modal.Footer>

               </Modal>
          </>



     )
}
