<x-app-layout>


    <div id="dicomImage">

    </div>

    <script src="https://unpkg.com/cornerstone-wado-image-loader@4.1.3/dist/cornerstoneWADOImageLoader.bundle.min.js">
    </script>

    <script >
         const RenderingEngine = require('@cornerstonejs/core')
        const content = document.getElementById('dicomImage');
        const element = document.createElement('div');
        element.style.width = '500px';
        element.style.height = '500px';

        content.appendChild(element);

        const renderingEngineId = 'myRenderingEngine';
        const viewportId = 'CT_AXIAL_STACK';
        const renderingEngine = new RenderingEngine(renderingEngineId);

        const viewportInput = {
            viewportId,
            element,
            type: ViewportType.STACK,
        };

        renderingEngine.enableElement(viewportInput);

        const viewport = renderingEngine.getViewport(viewportInput.viewportId);

        viewport.setStack(imageIds, 60);

        viewport.render()
    </script>


</x-app-layout>
