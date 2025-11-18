import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleShow(idx){
        setActiveIndex(idx);
    }

  return (
    <div
      style={{
        border: "solid 2px black",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>Our Courses</h2>
      <hr />
      <Panel title={'Paid Course'} isActive={activeIndex === 0 && true} onActive={()=> handleShow(0)}>
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, optio?
        
      </Panel>
      <Panel title={'Free Course'} isActive={activeIndex === 1 && true} onActive={()=> handleShow(1)}>
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, optio?
        
      </Panel>
    </div>
  );
}
