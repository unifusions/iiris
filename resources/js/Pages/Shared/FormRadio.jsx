import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const FormRadio = ({ type = 'radio', name, checked, selectedValue, options, className, autoComplete, required, isFocused, handleChange, labelText, error }) => {

     const input = useRef();
     // useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className="mb-3">
               <Col md={3}><span className="text-secondary">{labelText}</span></Col>
               <Col md={9}>
                    {options.map((option, index) => (
                         <div
                              className={`form-check form-check-inline ${className}`}
                              key={`${name}-${option.value}`}
                         >
                              <input
                                   ref={index === 0 ? input : null}
                                   id={`${name}-${option.value}`}
                                   name={name}
                                   value={option.value}
                                   type={type}
                                   className="form-check-input"
                                   checked={selectedValue === option.value}
                                   onChange={handleChange}
                                   // required={required && index === 0}
                                   //  tabIndex={-1}
                              />

                              <label
                                   className="form-check-label"
                                   htmlFor={`${name}-${option.value}`}
                              >
                                   {option.labelText}
                              </label>
                         </div>
                    ))}

                    {error && <div className="invalid-feedback d-block">{error}</div>}
               </Col>
          </Row>

     );
}

export default FormRadio;