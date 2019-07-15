import React from "react";
import ReactDOM from "react-dom";
import LazyImage from "./index.js";
console.log("Image", LazyImage);
function App() {
    return (
        <LazyImage
            src="https://img-blog.csdnimg.cn/2019061120543556.png"
            defaultHeight="200px"
            defaultWidth="500px"
        />
    );
}
ReactDOM.render(<App />, document.getElementById("root"));
