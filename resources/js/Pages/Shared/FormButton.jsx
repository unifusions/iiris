import React, { useEffect, useRef } from "react";
const FormButton = ({ processing, labelText, mode }) => {

     return (
          <button disabled={processing} className={`btn btn-` + mode} type="submit">
               {processing && <span className="spinner-border spinner-border-sm"></span>}
               {!processing && <span>{labelText}</span>}
          </button>
     )
}

export default FormButton;