import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Loader } from "@react-three/drei";

createRoot(document.getElementById("root")).render(
    <>
        <App />
        <Loader />
    </>
);
