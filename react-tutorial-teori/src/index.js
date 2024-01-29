import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const App = () => {
    const name = "Valdano Esnaidar"
    const age = [1,2,3,4]
    return <div>Perkenalakan nama saya {name} umur saya {age}</div>;
};


root.render(<App />);