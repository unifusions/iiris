import React, { createContext, useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmDialog = createContext();

export function ConfirmDialogProvider({ children }) {

     const [state, setState] = useState({ show: false });


     const handleClose = () => setState({ show: false });
     const handleShow = () => setState({ show: true });
     return (
          <ConfirmDialog.Provider value={setState}>
               { children }

               <Modal show={state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>
                              Close
                         </Button>
                         <Button variant="primary" onClick={handleClose}>
                              Save Changes
                         </Button>
                    </Modal.Footer>
               </Modal>
          </ConfirmDialog.Provider>
     );
}

export default function useDeleteConfirm() {
     return useContext(ConfirmDialog);
}