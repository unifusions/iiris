import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
const FormInput = ({ type = 'text', name, value, className, autoComplete, required, isFocused, handleChange, labelText, error, disabled }) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className="mb-2"  >
               <label className="col-md-3 col-form-label text-secondary">{labelText}</label>
               <Col md={6} >
                    
                         <input
                              type={type}
                              name={name}
                              value={value}
                              className={`form-control ` + className}
                              ref={input}
                              autoComplete={autoComplete}
                              required={required}
                              onChange={(e) => handleChange(e)}
                              disabled={disabled}
                         />
                   

                    {error && <div className="invalid-feedback">
                         {error}
                    </div>}

               </Col>
            
          </Row>

     );
}

export default FormInput;