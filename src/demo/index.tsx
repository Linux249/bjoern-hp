import * as React from "react";
import { Header } from "./Header";
import { CardList } from "./CardList";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
    </div>
  );
}

