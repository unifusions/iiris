
import React, { useEffect, useState } from "react";
import Footer from './Footer';
import ToastAlert from "@/Pages/Shared/ToastAlert";
export default function MainPanel({ flash, header, children }) {


     const [showToast, setShowToast] = useState(true);
     useEffect(() => {
          setShowToast(true)
     }, [flash.message])
     return (
          <div className="main-panel" >
               <div className="content-wrapper">
                    {header && <>
                         <header>
                              <div>{header}</div>
                         </header>
                    </>}

                    {children}


               </div>
               {flash.message &&
                    <ToastAlert showToast={showToast} onClose={() => setShowToast(false)} message={flash.message} />
               }
               <Footer />

          </div>
     )
}