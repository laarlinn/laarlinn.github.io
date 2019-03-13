import * as React from "react";
import {H2, Classes, H5, H6, Code, Button, ButtonGroup, AnchorButton} from '@blueprintjs/core'
import "../styles/root.scss";

const Root: React.SFC<{}> = () => {
    const parts = ["student.jyu.fi","lauri", "a", "linna", "@"]
  return (
    <div id="mainContainer" className={Classes.DARK}>
      <div className="centeredContainer">
      <H2>Lauri Linna</H2>
      <H5>Student at <a target="_blank" href="https://www.jyu.fi">University of Jyväskylä</a></H5>
      <H5>Software developer at <a target="_blank" href="https://www.nodeon.com">Nodeon</a></H5>
      <Code>
          {`${parts[1]}.${parts[2]}.${parts[3]}${parts[4]}${parts[0]}`}
      </Code>
      <br /> <br />
      <ButtonGroup>
      <AnchorButton target="_blank" href="https://github.com/laarlinn">GitHub</AnchorButton>
      </ButtonGroup>
      </div>
    </div>
  );
};

export default Root;
