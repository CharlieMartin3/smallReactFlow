import * as React from "react";
import "./styles.css";
import ReactFlow, { ReactFlowProvider } from "react-flow-renderer";
import { FC } from "react";

export default function App() {
  const elements = [
    { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 5 } },
    // you can also pass a React component as a label
    {
      id: "2",
      data: { label: <div>Node 2</div> },
      position: { x: 100, y: 100 },
      children: [
        {
          id: "3",
          data: { label: <div>sub Node 2</div> },
          position: { x: 100, y: 100 }
        }
      ]
    },
    { id: "e1", source: "1", target: "2", animated: true }
  ];

  return (
    <>
      <div className="App" style={{ width: "1000px", height: "1000px" }}>
        <ReactFlowProvider>
          <ReactFlow
            defaultPosition={[100, 100]}
            maxZoom={20}
            elements={elements}
          />
        </ReactFlowProvider>
      </div>
    </>
  );
}
