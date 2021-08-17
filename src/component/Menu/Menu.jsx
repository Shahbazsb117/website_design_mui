import React from "react";
import MyCard from "./MyCard";
import Breadcrumb_select from "./Breadcrumb_select";
import Mychip from "./Mychip";
import Mypagination from "./Mypagination";

function Menu(props) {
  return (
    <div>
      <Breadcrumb_select />
      <Mychip />
      <MyCard />
      <Mypagination />
    </div>
  );
}

export default Menu;
