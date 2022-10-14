import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { RenderUnits } from "../CaseReportForm/FormData/FormDataHelper";

const NotAvailable = () => {
     return (
          <span className='fw-normal text-secondary fst-italic'>No data available</span>
     )
}

const FormInputNormality = ({
     name, labelText,
     options, value,
     selectedValue, echoValue,
     className, autoComplete, required, isFocused, handleRadioChange, handleTextChange, error, disabled, reviewer, units
}) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className = 'mb-3'>
               <Col md={4} className='text-secondary'>{labelText}</Col>
               <Col md={2}>{echoValue !== null ? <>{echoValue}<RenderUnits units={units} /> </> : <NotAvailable />}</Col>
               <Col md={6}>
                    {reviewer ? <Row>
                         <Col md={4}>
                              {options.map((option, index, arr) =>

                                   <div
                                        className={`form-check form-check-inline ${className}`}
                                        id={index} key={index}>
                                        <input id={`${name}${option.labelText}`} name={name} value={option.value} type='radio'
                                             className={`form-check-input ` + className} checked={selectedValue === option.value}
                                             onChange={(e) => handleRadioChange(e)} required={required ? index === 1 && true : false}
                                        />

                                        <label className="form-check-label" htmlFor={`${name}${option.labelText}`}>{option.labelText}</label>
                                        {index === arr.length - 1 ? error && <div className="invalid-feedback" key={index}>
                                             {error}
                                        </div> : ''}

                                   </div>



                              )}
                         </Col>
                         <Col md={8}>
                              {selectedValue === '0' &&
                                   <div className="input-group has-validation">
                                        <input
                                             type='text'
                                             name={name}
                                             value={value}
                                             className={`form-control form-control-sm`}
                                             ref={input}
                                             autoComplete={autoComplete}
                                             onChange={(e) => handleTextChange(e)}
                                        />


                                        {error && <div className="invalid-feedback">
                                             {error}
                                        </div>}
                                   </div>
                              }
                         </Col>
                    </Row> : ''}</Col>
          </Row>






     );
}

export default FormInputNormality;