import { useEffect, useState, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import "./App.css";
import graphData from "./graphData.js";
import Toggle from "react-toggle";
import "react-toggle/style.css";

console.log("gData", graphData);

const colors = {
  default: [
    "rgb(195,195,195)",
    "rgb(37,131,255)",
    "rgb(183,53,211)",
    "rgb(169,255,23)",
  ],
  accessible: ["#ce4c0a", "#a95aa1", "#0b76de", "#0f2080"],
};

function App() {
  const graphRef = useRef();
  const [palette, setPalette] = useState("accessible");

  useEffect(() => {
    // graphRef.current.zoom(3, 0);
    graphRef.current.zoomToFit(400, 50);
    graphRef.current.centerAt(0, 0);
    graphRef.current.d3Force("center", null);
    graphRef.current.d3Force("charge", null);
    graphRef.current.d3Force("link", null);
  }, []);

  const onNodeClick = (e) => {
    console.log(e);
  };

  const linkText = (link, ctx, globalScale) => {
    const fontSize = Math.max(3, 12 / globalScale);
    // const fontSize = 3;
    // console.log(fontSize);
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
    // const fontSize = 3;
    const fontSize = Math.max(3, 12 / globalScale);

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

  const handlePalette = () => {
    if (palette === "default") setPalette("accessible");
    else setPalette("default");
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
          linkLabel={(d) => d.label + " description"}
          linkColor={(d) => colors[palette][d.colorGroup]}
          width={Math.min(800, window.innerWidth)}
          height={Math.min(800, window.innerWidth)}
          onNodeClick={onNodeClick}
          linkWidth={3}
          linkDirectionalParticles={0}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <div style={{ width: "200px", textAlign: "center" }}>
          <Toggle
            className="custom-toggle"
            defaultChecked={true}
            icons={false}
            onChange={handlePalette}
          />
        </div>
        <div style={{ width: "200px", textAlign: "center", marginTop: "1rem" }}>
          {palette === "default"
            ? "Color accessibility disabled"
            : "Color accessibility enabled"}
        </div>
      </div>
    </div>
  );
}

export default App;
