import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import FormInputForRadio from "./FormInputForRadio";

const FormRadioWithInput = ({ type = 'radio', name, checked, selectedValue, options, className, enabledInput, autoComplete, required, isFocused, handleChange, labelText, error }) => {

     
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
               <Col md={3} >


                    {options.map((option, index, arr) =>

                         <div
                              className={`form-check form-check-inline ${className}`}
                              id={index} key={index}>
                              <input id={`${name}${option.labelText}`} name={name} value={option.value} type={type}
                                   className={`form-check-input ` + className} checked={selectedValue === option.value}
                                   onChange={(e) => handleChange(e)} required={required ? index === 1 && true : false}
                              />

                              <label className="form-check-label" htmlFor={`${name}${option.labelText}`}>{option.labelText}</label>
                              {index === arr.length - 1 ? error && <div className="invalid-feedback" key={index}>
                                   {error}
                              </div> : ''}

                         </div>
                    )}
               </Col>
               <Col md={6}>
                    {enabledInput === selectedValue &&
                       <FormInputForRadio 
                         
                       />
                    }
               </Col>
          </Row>

     );
}

export default FormRadioWithInput;