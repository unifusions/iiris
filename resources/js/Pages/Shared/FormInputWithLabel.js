import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const FormInputWithLabel = ({ type = 'text', name,  
onBlur, min, max,step, value, units, className, autoComplete, required, isFocused, handleChange, labelText, error, disabled,
remarks }) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className="mb-3">
               <Col md={3}><span className="text-secondary">{labelText}</span></Col>
               <Col md={6} >
                    <div className="input-group has-validation">
                         <input
                              type={type}
                              name={name}
                              value={value}
                              className={`form-control with-units ` + className}
                              ref={input}
                              autoComplete={autoComplete}
                              required={required}
                              onChange={(e) => handleChange(e)}
                              disabled = {disabled}
                              onBlur = {onBlur}
                              min = {min}
                              max = {max}
                              step = {step}
                              
                         />
                                <span className="input-group-text input-units text-secondary" dangerouslySetInnerHTML={{ __html: units }}></span>

                         {error && <div className="invalid-feedback">
                              {error}
                         </div>}
                    </div>
               </Col>
               <Col md={3} className='fw-normal text-secondary fst-italic'>
                    {remarks && remarks}
               </Col>
          </Row>

     );
}

export default FormInputWithLabel;