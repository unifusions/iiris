import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { CheckCircleIcon } from "@heroicons/react/outline";


export default function ToastAlert({ showToast, message, onClose}) {
     return (
          <ToastContainer position='top-end' className='p-3' style={{ zIndex: '3000', paddingTop: '4rem' }}>
               <Toast show={showToast} delay={5000} autohide className='rounded-5 shadow-sm' onClose={onClose}>
                    <Toast.Body className='d-flex align-items-top'><CheckCircleIcon style={{ width: 20, height: 20, color: '#1E7159' }} className="me-2" /> {message}</Toast.Body>
               </Toast>
          </ToastContainer>
     )
}

