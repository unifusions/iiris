import React, { useEffect, useState } from 'react';
import dicomParser from 'dicom-parser';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import cornerstoneMath from 'cornerstone-math';
import cornerstoneTools from 'cornerstone-tools';
import Hammer from 'hammerjs';
import CornerstoneViewport from 'react-cornerstone-viewport'
import { usePage } from '@inertiajs/inertia-react';


export default function EchoRDicomViewer() {

     // Cornerstone Tools
     cornerstoneTools.external.cornerstone = cornerstone;
     cornerstoneTools.external.Hammer = Hammer;
     cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
     cornerstoneTools.init();

     // Image Loader
     cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
     cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
     cornerstoneWADOImageLoader.webWorkerManager.initialize({
          maxWebWorkers: navigator.hardwareConcurrency || 1,
          startWebWorkersOnDemand: true,
          taskConfiguration: {
               decodeTask: {
                    initializeCodecsOnStartup: false,
                    usePDFJS: false,
                    strict: false,
               },
          },
     });
     const { file } = usePage().props;
     const [tools, setTools] = useState([
          {
               name: 'Wwwc',
               mode: 'active',
               modeOptions: { mouseButtonMask: 1 },
          },
          {
               name: 'Zoom',
               mode: 'active',
               modeOptions: { mouseButtonMask: 2 },
          },
          {
               name: 'Pan',
               mode: 'active',
               modeOptions: { mouseButtonMask: 4 },
          },
          // Scroll
          { name: 'StackScrollMouseWheel', mode: 'active' },
          // Touch
          { name: 'PanMultiTouch', mode: 'active' },
          { name: 'ZoomTouchPinch', mode: 'active' },
          { name: 'StackScrollMultiTouch', mode: 'active' },
     ]);


     const [numFrames, setNumFrames] = useState();
     const [imageIds, setImageIds] = useState(
          []
    
     );

     useEffect(() => {
          let url = 'https://' + file;
          cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.load(url, cornerstoneWADOImageLoader.internal.xhrRequest).then(function (dataSet) {
               setNumFrames(dataSet.intString('x00280008'));
              
          });

          for (let i = 0; i < numFrames; i++) {
               setImageIds(imageIds => [...imageIds, 'dicomweb://' + file + '?frame=' + i])
          }

     }, [numFrames])


     return (
          <>
               {imageIds.length > 0 && <CornerstoneViewport
                    tools={tools}
                    imageIds={imageIds}

                    style={{ minWidth: '100%', height: '100vh', flex: '1' }}
               />}

              
          </>
     )



}

