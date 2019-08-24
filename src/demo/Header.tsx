import * as React from "react";
import { Avatar } from "react-lorem-ipsum";

export const Header = () => (
  <header>
    <span className="date">Tuesday, August 13th</span>
    <h1>Today</h1>
    <div className="avatar">
      <Avatar />
    </div>
  </header>
);
