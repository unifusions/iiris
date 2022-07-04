import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
const FormInput = ({ type = 'text', name, value, className, autoComplete, required, isFocused, handleChange, labelText, error }) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className="mb-3 "  >
               <Col md={3}><span className="text-secondary">{labelText}</span></Col>
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
                        
                    />
                    {error && <div class="invalid-feedback">
                         {error}
                    </div>}
               </Col>
          </Row>

     );
}

export default FormInput;