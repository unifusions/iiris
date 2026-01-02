import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const FormInputFullWidth = ({ type = 'text', name,
     onBlur, min, max, step, value, units, className, autoComplete, required, isFocused, handleChange, labelText, error, disabled,
     remarks }) => {

     const input = useRef();
     useEffect(() => { if (isFocused) { input.current.focus(); } }, []);

     return (



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
                    disabled={disabled}
                    onBlur={onBlur}
                    min={min}
                    max={max}
                    step={step}

               />
            

               {error && <div className="invalid-feedback">
                    {error}
               </div>}
          </div>




     );
}

export default FormInputFullWidth;