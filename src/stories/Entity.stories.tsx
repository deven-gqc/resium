import React from "react";
import { Cartesian3 } from "cesium";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Viewer from "../Viewer";
import Entity from "../Entity";
import EntityDescription from "../EntityDescription";
import CanvasEntity from "./CanvasEntity";
import BillbaordGraphics from "../BillboardGraphics";
import billboardImage from "./assets/example.jpg";

export default () => {
  storiesOf("Entity", module)
    .add("default", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
        />
      </Viewer>
    ))
    .add("Children with JSX", () => (
      <Viewer full>
        <Entity
          name="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}>
          <EntityDescription>
            <h1>Hello!</h1>
            <p>This is description. It can be described with JSX!</p>
          </EntityDescription>
        </Entity>
      </Viewer>
    ))
    .add("Selected and tracked", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
          selected
          tracked
        />
      </Viewer>
    ))
    .add("Animated canvas", () => (
      <Viewer full>
        <CanvasEntity
          name="test"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
        />
      </Viewer>
    ))
    .add("Events", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
          onClick={action("onClick")}
          onDoubleClick={action("onDoubleClick")}
          onMouseDown={action("onMouseDown")}
          onMouseUp={action("onMouseUp")}
          onMiddleClick={action("onMiddleClick")}
          onMiddleDown={action("onMiddleDown")}
          onMiddleUp={action("onMiddleUp")}
          onMouseMove={action("onMouseMove")}
          onPinchEnd={action("onPinchEnd")}
          onPinchMove={action("onPinchMove")}
          onPinchStart={action("onPinchStart")}
          onRightClick={action("onRightClick")}
          onRightDown={action("onRightDown")}
          onRightUp={action("onRightUp")}
          onWheel={action("onWheel")}
          onMouseEnter={action("onMouseEnter")}
          onMouseLeave={action("onMouseLeave")}
        />
      </Viewer>
    ))
    .add("Graphics", () => (
      <Viewer full>
        <Entity
          name="test"
          description="test!!"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          selected
          tracked>
          <BillbaordGraphics image={billboardImage} />
        </Entity>
      </Viewer>
    ));
};
