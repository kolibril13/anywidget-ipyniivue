import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

import { useRef, useEffect, useState } from "react";
import { Niivue } from "@niivue/niivue";

const NiiVue = ({ imageUrl, mycolor }) => {
  const canvas = useRef();
  useEffect(() => {
    const volumeList = [
      {
        url: imageUrl,
        colormap: mycolor,
      },
    ];
    const nv = new Niivue();
    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
  }, [imageUrl,mycolor ]);

  return <canvas ref={canvas} height={480} width={640} />;
};

export const render = createRender(() => {
  const [value, setValue] = useModelState("value");
  const [color, setColor] = useModelState("color");

  return (
    <>
      <h1 style={{ color: "white" }}> Colormap is {color}</h1>
      <NiiVue imageUrl={value} mycolor={color}></NiiVue>
    </>
  );
});
