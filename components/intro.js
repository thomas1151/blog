import { CMS_NAME } from '../lib/constants'
import Header from './header'
import LineChart from './graph'
import React, { useState, useRef, useEffect } from 'react';

export default function Intro({ title, content, alwaysShowTitle }) {

  const stageCanvasRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  // useEffect will run on stageCanvasRef value assignment
  useEffect( () => {

      // The 'current' property contains info of the reference:
      // align, title, ... , width, height, etc.
      if(stageCanvasRef.current){

          setHeight(stageCanvasRef.current.offsetHeight);
          setWidth(stageCanvasRef.current.offsetWidth);
      }
  }, [stageCanvasRef]);


  return (
    <Header 
      title={title} 
      subtitle={content} 
      showTriangle 
      alwaysShowTitle={alwaysShowTitle}
      bigTitle
      bigText
    >
      <div className="h-40 w-full absolute z-10 bottom-0 pb-2" ref={stageCanvasRef}>
        <LineChart width={width} />
      </div>
      </Header>
  )
}
