import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

import { useRef, useEffect, useState } from "react";
import { Niivue } from "@niivue/niivue";

const NiiVue = ({ imageUrl }) => {
  const canvas = useRef();
  useEffect(() => {
    const volumeList = [
      {
        url: imageUrl,
      },
    ];
    const nv = new Niivue();
    nv.attachToCanvas(canvas.current);
    nv.loadVolumes(volumeList);
  }, [imageUrl]);

  return <canvas ref={canvas} height={480} width={640} />;
};

export const render = createRender(() => {
  const [value, setValue] = useModelState("value");
  return (
    <>
      <h1>hello</h1>
      <NiiVue
        imageUrl={"https://niivue.github.io/niivue-demo-images/mni152.nii.gz"}
      ></NiiVue>
    </>
  );
});
