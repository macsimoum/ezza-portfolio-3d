import React from "react";

import { technologies } from "../constants";
import { BallCanvasComponent } from "./ball-canvas.component.jsx";
import SectionWrapperComponent from "./section-wrapper.component.jsx";

const TechComponent = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvasComponent icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapperComponent(TechComponent, "");
