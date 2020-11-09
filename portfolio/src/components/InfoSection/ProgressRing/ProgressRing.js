import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";

import {
    TextField,
    Skill,
    Percent
} from './ProgressRingElements';


const ProgressRing = ({ text,percentage }) => {
            return (
                <VisibilitySensor>
            {({ isVisible }) => {
              const A = isVisible ? percentage : 0;
              return (
                <CircularProgressbarWithChildren
                  value={A}
                  styles={buildStyles({
                    strokeLinecap: 'round',
                    pathTransitionDuration: 2,
                    pathColor: `#FF4532`,
                    trailColor: 'white',
                  })}
                >
                <TextField>
                    <Skill>
                        {text}
                    </Skill>
                    <Percent>
                        {A}%
                    </Percent>
                </TextField>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
 
        );
}


export default ProgressRing;