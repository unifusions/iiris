// import React, { useEffect, useState } from 'react';
// import dicomParser from 'dicom-parser';
// import cornerstone from 'cornerstone-core';
// import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
// import cornerstoneMath from 'cornerstone-math';
// import cornerstoneTools from 'cornerstone-tools';
// import Hammer from 'hammerjs';
// import CornerstoneViewport from 'react-cornerstone-viewport'
// import { usePage } from '@inertiajs/inertia-react';


// export default function EchoRDicomViewer() {

//      // Cornerstone Tools
//      cornerstoneTools.external.cornerstone = cornerstone;
//      cornerstoneTools.external.Hammer = Hammer;
//      cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
//      cornerstoneTools.init();

//      // Image Loader
//      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
//      cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
//      cornerstoneWADOImageLoader.webWorkerManager.initialize({
//           maxWebWorkers: navigator.hardwareConcurrency || 1,
//           startWebWorkersOnDemand: true,
//           taskConfiguration: {
//                decodeTask: {
//                     initializeCodecsOnStartup: false,
//                     usePDFJS: false,
//                     strict: false,
//                },
//           },
//      });
//      const { file } = usePage().props;
//      const [tools, setTools] = useState([
//           {
//                name: 'Wwwc',
//                mode: 'active',
//                modeOptions: { mouseButtonMask: 1 },
//           },
//           {
//                name: 'Zoom',
//                mode: 'active',
//                modeOptions: { mouseButtonMask: 2 },
//           },
//           {
//                name: 'Pan',
//                mode: 'active',
//                modeOptions: { mouseButtonMask: 4 },
//           },
//           // Scroll
//           { name: 'StackScrollMouseWheel', mode: 'active' },
//           // Touch
//           { name: 'PanMultiTouch', mode: 'active' },
//           { name: 'ZoomTouchPinch', mode: 'active' },
//           { name: 'StackScrollMultiTouch', mode: 'active' },
//      ]);


//      const [numFrames, setNumFrames] = useState();
//      const [imageIds, setImageIds] = useState(
//           []
    
//      );

//      useEffect(() => {
//           let url = 'https://' + file;
//           cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.load(url, cornerstoneWADOImageLoader.internal.xhrRequest).then(function (dataSet) {
//                setNumFrames(dataSet.intString('x00280008'));
              
//           });

//           for (let i = 0; i < numFrames; i++) {
//                setImageIds(imageIds => [...imageIds, 'dicomweb://' + file + '?frame=' + i])
//           }

//      }, [numFrames])


//      return (
//           <>
         
//                {imageIds.length > 0 && <CornerstoneViewport
//                     tools={tools}
//                     imageIds={imageIds}

//                     style={{ minWidth: '100%', height: '100vh', flex: '1' }}
//                />}

              
//           </>
//      )



// }

import React, { useEffect, useRef } from 'react';
import { RenderingEngine, Enums, init } from '@cornerstonejs/core';
import {
  addTool,
  ToolGroupManager,
  WindowLevelTool,
  ZoomTool,
  PanTool,
  StackScrollTool,
} from '@cornerstonejs/tools';
import dicomImageLoader from '@cornerstonejs/dicom-image-loader';
import dicomParser from 'dicom-parser';
import Hammer from 'hammerjs';
import { usePage } from '@inertiajs/react';

const RENDERING_ENGINE_ID = 'echo-rendering-engine';
const VIEWPORT_ID = 'echo-viewport';
const TOOLGROUP_ID = 'echo-toolgroup';

export default function EchoRDicomViewer() {
  const elementRef = useRef(null);
  const { file } = usePage().props; // AWS URL (public or signed)
// const file ="https://stagingcliniquest.s3.ap-south-1.amazonaws.com/001-002/preoperative/ssamp.512"

  useEffect(() => {
    if (!file || !elementRef.current) return;

    let renderingEngine;

    const setup = async () => {
      /* ---------------- Cornerstone Core INIT ---------------- */
      await init({useSharedArrayBuffer: false,});

      /* ---------------- Image Loader ---------------- */
      dicomImageLoader.external = {
        dicomParser,
        Hammer,
      };
dicomImageLoader.wadouri.register();

      /* ---------------- Rendering Engine ---------------- */
      renderingEngine = new RenderingEngine(RENDERING_ENGINE_ID);

      renderingEngine.enableElement({
        viewportId: VIEWPORT_ID,
        type: Enums.ViewportType.STACK,
        element: elementRef.current,
      });

      const viewport = renderingEngine.getViewport(VIEWPORT_ID);

      /* ---------------- Tools ---------------- */
      addTool(WindowLevelTool);
      addTool(ZoomTool);
      addTool(PanTool);
      addTool(StackScrollTool);

      const toolGroup = ToolGroupManager.createToolGroup(TOOLGROUP_ID);

      toolGroup.addTool(WindowLevelTool.toolName);
      toolGroup.addTool(ZoomTool.toolName);
      toolGroup.addTool(PanTool.toolName);
      toolGroup.addTool(StackScrollTool.toolName);

      toolGroup.setToolActive(WindowLevelTool.toolName, { mouseButton: 1 });
      toolGroup.setToolActive(ZoomTool.toolName, { mouseButton: 2 });
      toolGroup.setToolActive(PanTool.toolName, { mouseButton: 4 });

      toolGroup.setToolActive(StackScrollTool.toolName, {
        bindings: [{ mouseWheel: true }],
      });

      toolGroup.addViewport(VIEWPORT_ID, RENDERING_ENGINE_ID);

      /* ---------------- Helper ---------------- */
      const buildFrameUrl = (url, frame) =>
        url.includes('?') ? `${url}&frame=${frame}` : `${url}?frame=${frame}`;

      /* ---------------- Load AWS DICOM ---------------- */
      const baseUrl = `wadouri:${file}`;

      const dataset =
        await dicomImageLoader.wadouri.dataSetCacheManager.load(baseUrl);

      const frames = dataset.intString('x00280008') || 1;

      const imageIds = [];
      for (let i = 0; i < frames; i++) {
        imageIds.push(buildFrameUrl(baseUrl, i));
      }

      viewport.setStack(imageIds);
      viewport.render();
    };

    setup();

    return () => {
      if (renderingEngine) {
        renderingEngine.destroy();
      }
      ToolGroupManager.destroyToolGroup(TOOLGROUP_ID);
    };
  }, [file]);

  return (
    <div
      ref={elementRef}
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        touchAction: 'none',
      }}
    />
  );
}
