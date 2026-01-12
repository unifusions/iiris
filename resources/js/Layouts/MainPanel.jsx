
import React, { useEffect, useState } from "react";
 
import ToastAlert from "@/Pages/Shared/ToastAlert";
export default function MainPanel({ flash, header, children }) {


     const [showToast, setShowToast] = useState(true);
     useEffect(() => {
          setShowToast(true)
     }, [flash.message])
     return (
          < >

         
               <div className="h-100">
                    {!route().current('crf.*') || route().current('crf.index') && header && <>
                         <header className="mt-3">
                              <h2>{header}</h2>
                         </header>
                    </>}

                    {children}


               </div>
               {flash.message &&
                    <ToastAlert showToast={showToast} onClose={() => setShowToast(false)} message={flash.message} />
               }
              

          </>
     )
}