import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const FormInputSelect = ({ name, selectedValue, options, className, autoComplete, required, isFocused, handleChange, labelText, error }) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     const RenderError = ({ error }) => {
          return (
               <>
                    {error && <div className="invalid-feedback">
                         {error}
                    </div>}
               </>
          )
     }

     return (
          <Row className="mb-3">
               <Col md={3}><span className="text-secondary">{labelText}</span></Col>
               <Col md={6} >
                    <select value={selectedValue} onChange={handleChange} className="form-select" >
                         <option value=''></option>

                         {options.map((item, index, arr) =>

                              <option key={index} value={item.value}>{item.optionText}</option>



                         )}
                    </select>




               </Col>
          </Row>

     );
}

export default FormInputSelect;