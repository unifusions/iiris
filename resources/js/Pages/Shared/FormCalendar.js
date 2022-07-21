import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";


import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const FormCalendar = ({ type = 'text', name, value, className, minDate, autoComplete, required, isFocused, handleChange, labelText, error, showYearPicker }) => {

     const input = useRef(null);
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (
          <Row className="mb-3">
               <Col md={3}><span className="text-secondary">{labelText}</span></Col>
               <Col md={6}>

                    <ReactDatePicker
                         minDate={minDate ? new Date(minDate) : null}
                         dateFormat="dd/M/Y"
                         maxDate={new Date()}
                         showYearDropdown
                         showMonthDropdown
                         yearDropdownItemNumber={100}
                         scrollableYearDropdown={true}
                         dropdownMode="select"
                         name={name}
                         selected={value !== '' && new Date(value)}
                         onChange={(date) => handleChange(date)}
                         className={`form-control ` + className} 
                         showYearPicker = {showYearPicker}/>
                  

                    {error && <div class="invalid-feedback">
                         {error}
                    </div>}
               </Col>


          </Row>

     );
}

export default FormCalendar;