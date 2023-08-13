const parent = React.createElement(
  "div",
  { id: "" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "am h1 tag !"),
    React.createElement("h2", {}, "am h2 tag !"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "am h1 tag !"),
    React.createElement("h2", {}, "am h2 tag !"),
  ])
);

const heading = React.createElement("h1", { id: "heading" }, "Hello React !");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);
