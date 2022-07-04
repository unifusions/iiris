import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import Hammer, { extend } from "hammerjs";
import dicomParser from "dicom-parser";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import CornerstoneViewport from 'react-cornerstone-viewport';






// export default class CornerstoneElement extends React.Component {
//      constructor(props) {
//           super(props);
//           this.state = {
//                // stack: props.stack,
//                viewport: cornerstone.getDefaultViewport(null, undefined),
//                // imageId: props.stack.imageIds[0]

//                tools: [
//                     // Mouse
//                     {
//                          name: 'Wwwc',
//                          mode: 'active',
//                          modeOptions: { mouseButtonMask: 1 },
//                     },
//                     {
//                          name: 'Zoom',
//                          mode: 'active',
//                          modeOptions: { mouseButtonMask: 2 },
//                     },
//                     {
//                          name: 'Pan',
//                          mode: 'active',
//                          modeOptions: { mouseButtonMask: 4 },
//                     },
//                     // Scroll
//                     { name: 'StackScrollMouseWheel', mode: 'active' },
//                     // Touch
//                     { name: 'PanMultiTouch', mode: 'active' },
//                     { name: 'ZoomTouchPinch', mode: 'active' },
//                     { name: 'StackScrollMultiTouch', mode: 'active' },
//                ],

//           };

//           this.onImageRendered = this.onImageRendered.bind(this);
//           this.onNewImage = this.onNewImage.bind(this);
//           this.onWindowResize = this.onWindowResize.bind(this);

//           cornerstoneTools.external.cornerstone = cornerstone;
//           cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
//           cornerstoneTools.external.Hammer = Hammer;

//           cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
//           cornerstoneWADOImageLoader.external.cornerstone = cornerstone;


//      }

//      render() {

//           return (
//                <CornerstoneViewport 
//                     tools = {this.state.tools}
//                     imageId = {this.props.url}

//                />
//                // <div>
//                //      <div
//                //           className="viewportElement"
//                //           style={divStyle}
//                //           ref={input => {
//                //                this.element = input;
//                //           }}
//                //      >
//                //           <canvas className="cornerstone-canvas" style={{ display: 'inline' }}>
//                //                <div
//                //                     style={bottomLeftStyle}>
//                //                     Zoom: {this.state.viewport.scale}
//                //                </div>
//                //                <div style={bottomRightStyle}>
//                //                     WW/WC: {this.state.viewport.voi.windowWidth} /{" "}
//                //                     {this.state.viewport.voi.windowCenter}
//                //                </div>
//                //           </canvas>
//                //      </div>
//                // </div>
//           );
//      }

//      onWindowResize() {
//           console.log("onWindowResize");
//           cornerstone.resize(this.element);
//      }

//      onImageRendered() {
//           const viewport = cornerstone.getViewport(this.element);
//           console.log(viewport);

//           this.setState({
//                viewport
//           });

//           //console.log(this.state.viewport);
//      }

//      onNewImage() {
//           const enabledElement = cornerstone.getEnabledElement(this.element);

//           this.setState({
//                imageId: enabledElement.image.imageId
//           });
//      }

//      dumpFile(file) {

//           var request = new XMLHttpRequest();
//           request.open('GET', file, true);
//           request.responseType = 'blob';
//           request.onload = function () {
//                var reader = new FileReader();
//                reader.readAsDataURL(request.response);
//                reader.onload = function (e) {
//                     var arrayBuffer = e.target.result;
//                     var byteArray = new Uint8Array(arrayBuffer);
//                     console.log(arrayBuffer);

//                     try {

//                          dataSet = dicomParser.parseDicom(byteArray);

//                          // Here we call dumpDataSet to recursively iterate through the DataSet and create an array
//                          // of strings of the contents.
//                          var output = [];
//                          dumpDataSet(dataSet, output);

//                     }
//                     catch (err) {
//                          var message = err;
//                          if (err.exception) {
//                               message = err.exception;
//                          }


//                     }

//                     //  reader.readAsArrayBuffer(byteArray);
//                };
//           };
//           request.send();


//           // var byteArray = '';

//           // var reader = new FileReader();

//           // reader.onload = (file) => {

//           //      const blob = new Blob([new Uint8Array(file)], { type: file.type });


//           //      let arrayBuffer = reader.result;
//           //      byteArray = new Uint8Array(arrayBuffer);
//           // }


//           // reader.readAsArrayBuffer(file);

//      }


//      componentDidMount() {

//           cornerstoneWADOImageLoader.configure({ useWebWorkers: false });
//           const element = this.element;
//           const url = this.props.url;
//           const loaded = false;
//           // create a Uint8Array or node.js Buffer with the contents of the DICOM P10 byte stream
//           // you want to parse (e.g. XMLHttpRequest to a WADO server)




//           // this.dumpFile(url);

//           // var bufferSize = cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.load(url, cornerstoneWADOImageLoader.internal.xhrRequest);

//           // var byteArray = new Uint8Array(arrayBuffer);

//           // try {
//           //      // Allow raw files
//           //      const options = { TransferSyntaxUID: '1.2.840.10008.1.2' };
//           //      // Parse the byte array to get a DataSet object that has the parsed contents
//           //      var dataSet = dicomParser.parseDicom(byteArray, options);

//           //      // access a string element
//           //      var studyInstanceUid = dataSet.string('x0020000d');

//           //      // get the pixel data element (contains the offset and length of the data)
//           //      var pixelDataElement = dataSet.elements.x7fe00010;
//           //      console.log(dicomParser.createJPEGBasicOffsetTable(dataSet, element));
//           //      // create a typed array on the pixel data (this example assumes 16 bit unsigned data)
//           //      var pixelData = new Uint16Array(dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length / 2);
//           // }
//           // catch (ex) {
//           //      console.log('Error parsing byte stream', ex);
//           // }

//           // var bot = element.basicOffsetTable;


//           cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.load(url, cornerstoneWADOImageLoader.internal.xhrRequest).then(function (dataSet) {

//                // const options = { TransferSyntaxUID: '1.2.840.10008.1.2' };
//                // console.log(dicomParser.parseDicom(dataSet));

//                var numFrames = dataSet.intString('x00280008');




//                if (!numFrames) {
//                     alert('Missing element NumberOfFrames (0028,0008)');
//                     return;
//                }

//                var imageIds = [];
//                var imageIdRoot = 'wadouri:' + url;

//                for (var i = 0; i < 55; i++) {
//                     var imageId = imageIdRoot + "?frame=" + i;
//                     imageIds.push(imageId);
//                }

//                var stack = {
//                     currentImageIdIndex: 0,
//                     imageIds: imageIds
//                };
//                cornerstone.enable(element);
//                cornerstone.loadAndCacheImage(imageIds[0]).then(function (image) {

//                     // now that we have an image frame in the cornerstone cache, we can decrement
//                     // the reference count added by load() above when we loaded the metadata.  This way
//                     // cornerstone will free all memory once all imageId's are removed from the cache
//                     cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.unload(url);

//                     cornerstone.displayImage(element, image);



//                     if (loaded === false) {

//                          cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
//                          // Set the stack as tool state
//                          cornerstoneTools.addStackStateManager(element, ['stack', 'playClip']);
//                          cornerstoneTools.addToolState(element, 'stack', stack);
//                          // Start playing the clip
//                          // TODO: extract the frame rate from the dataset
//                          var frameRate = 16;
//                          cornerstoneTools.playClip(element, frameRate);
//                          loaded = true;
//                     }
//                }, function (err) {
//                     alert(err);
//                });
//                /*}
//                 catch(err) {
//                 alert(err);
//                 }*/
//           });


//           // Enable the DOM Element for use with Cornerstone
//           // cornerstone.enable(element);
//           // cornerstone.registerImageLoader('myCustomLoader', this.loadImage);

//           // Load the first image in the stack
//           // cornerstone.loadImage(this.state.imageId).then(image => {
//           //      // Display the first image
//           //      cornerstone.displayImage(element, image);

//           //      // Add the stack tool state to the enabled element
//           //      const stack = this.props.stack;
//           //      cornerstoneTools.addStackStateManager(element, ["stack"]);
//           //      cornerstoneTools.addToolState(element, "stack", stack);

//           //      cornerstoneTools.mouseInput.enable(element);
//           //      cornerstoneTools.mouseWheelInput.enable(element);
//           //      cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
//           //      cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
//           //      cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
//           //      cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel

//           //      cornerstoneTools.touchInput.enable(element);
//           //      cornerstoneTools.panTouchDrag.activate(element);
//           //      cornerstoneTools.zoomTouchPinch.activate(element);

//           //      element.addEventListener(
//           //           "cornerstoneimagerendered",
//           //           this.onImageRendered
//           //      );
//           //      element.addEventListener("cornerstonenewimage", this.onNewImage);
//           //      window.addEventListener("resize", this.onWindowResize);
//           // });
//      }

//      componentWillUnmount() {
//           const element = this.element;
//           element.removeEventListener(
//                "cornerstoneimagerendered",
//                this.onImageRendered
//           );

//           element.removeEventListener("cornerstonenewimage", this.onNewImage);

//           window.removeEventListener("resize", this.onWindowResize);

//           cornerstone.disable(element);
//      }

//      componentDidUpdate(prevProps, prevState) {
//           // const stackData = cornerstoneTools.getToolState(this.element, "stack");

//           // console.log(stackData);
//           // if (stackData) {
//           //      const stack = stackData.data[0];
//           //      stack.currentImageIdIndex = this.state.stack.currentImageIdIndex;
//           //      stack.imageIds = this.state.stack.imageIds;
//           //      cornerstoneTools.addToolState(this.element, "stack", stack);
//           // 
//      }


//      // const imageId = stack.imageIds[stack.currentImageIdIndex];
//      // cornerstoneTools.scrollToIndex(this.element, stack.currentImageIdIndex);
// }


export default class CornerstoneElement extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               tools: [
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
               ],
               imageIds: [
                    // this.props.url,
                    // 'wadouri:http://127.0.0.1:8000/storage/uploads/001-001/preoperative/1.2.840.113619.2.394.1327.1656672349.107.1.512' + this.props.url + '',
                    'dicomweb:http://127.0.0.1:8000/storage/uploads/001-001/preoperative/1.2.840.113619.2.394.1327.1656672492.123.1.512' 

               ],
          };

          cornerstoneTools.external.cornerstone = cornerstone;
          cornerstoneTools.external.Hammer = Hammer;
          cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
          cornerstoneTools.init();
          cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
          cornerstoneWADOImageLoader.internal.multiFrameCacheHack = cornerstone;
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


     }

     dumpFile = (file) => {
          var reader = new FileReader();
          console.log(file.path);
          reader.onload = function (file) {
               console.log(reader.result)
               var arrayBuffer = reader.result;
               var byteArray = new Uint8Array(arrayBuffer);
               var kb = byteArray.length / 1024;
               var mb = kb / 1024;
               var byteStr = mb > 1 ? mb.toFixed(3) + " MB" : kb.toFixed(0) + " KB";

               dataSet = dicomParser.parseDicom(byteArray);
               console.log('data' + dataSet)
               var output = [];
               dumpDataSet(dataSet, output);

          }
     }

     // readfile = (file) => { reader(file).then(result => console.log(result)) }


     render() {
          return (
               <div>

                    {/* {this.dumpFile(this.props.dcmFiles)} */}
               
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                         <CornerstoneViewport
                             
                              tools={this.state.tools}
                              imageIds={this.state.imageIds}
                              style={{ minWidth: '100%', height: '512px', flex: '1' }}
                         />
                    </div>


               </div>
          );
     }
}