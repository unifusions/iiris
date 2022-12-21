import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import ReactPlayer from 'react-player'

export default function EchoVideoPlayer() {

     const { file } = usePage().props;

     return(
          <>
         <ReactPlayer url={file} />


          </>
     )
}
