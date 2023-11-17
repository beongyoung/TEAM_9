import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

async function enableMocking() {
  //실서버와 연동시 //return;의 주석 지워서 테스트해주세요
  return;
  // if (import.meta.env.MODE !== "development") return;
  // const { worker } = await import("./mocks/browser");
  // return worker.start({ onUnhandledRequest: "bypass" });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
