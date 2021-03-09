import { useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import "./App.css";
import graphData from "./graphData.js";

console.log("gData", graphData);

function App() {
  const graphRef = useRef();

  useEffect(() => {
    graphRef.current.zoom(5, 0);
    graphRef.current.centerAt(0, 0);
  }, []);

  const onNodeClick = (e) => {
    console.log(e);
  };

  const linkText = (link, ctx, globalScale) => {
    // const fontSize = 12 / globalScale;
    const fontSize = 3;
    ctx.font = `${fontSize}px Sans-Serif`;
    let midpoint = {
      x: (link.source.x + link.target.x) / 2,
      y: (link.source.y + link.target.y) / 2,
    };

    const textWidth = ctx.measureText(link.label).width;
    const bckgDimensions = [textWidth, fontSize].map(
      (n) => n + fontSize * 0.2 // padding
    );
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fillRect(
      midpoint.x - bckgDimensions[0] / 2,
      midpoint.y - bckgDimensions[1] / 2,
      ...bckgDimensions
    );

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(0,0,0,0.6)";
    ctx.fillText(link.label, midpoint.x, midpoint.y);
  };

  const nodeText = (node, ctx, globalScale) => {
    const fontSize = 3;

    // text background
    if (node.id !== 0) {
      const textWidth = ctx.measureText(node.label).width;
      const bckgDimensions = [textWidth, fontSize].map(
        (n) => n + fontSize * 0.2 // padding
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fillRect(
        node.x - bckgDimensions[0] / 2,
        node.y - bckgDimensions[1] / 2 - 4,
        ...bckgDimensions
      );
    }

    // text
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(0,0,0,0.6)";
    ctx.fillText(node.label, node.x, node.y - 4);
  };

  return (
    <div className="App">
      <div className="graph">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          linkCurvature="curvature"
          nodeLabel={(d) => `${d.title} (${d.authors})`}
          nodeColor={(d) => (d.id === 0 ? "black" : "rgb(220,220,220)")}
          nodeRelSize={1}
          linkCanvasObject={linkText}
          linkCanvasObjectMode={() => "after"}
          nodeCanvasObject={nodeText}
          nodeCanvasObjectMode={() => "after"}
          width={1100}
          height={1100}
          onNodeClick={onNodeClick}
          linkWidth={3}
          linkDirectionalParticles={0}
        />
      </div>
    </div>
  );
}

export default App;
