import React from "react";
import "./Group.css";

import BillContext from "../BillContext";

const GroupList = ({ list = [] }) => {
  return (
    <ul className="Group-list">
      {list.map(item => (
        <GroupItem key={item.id} name={item.name}></GroupItem>
      ))}
    </ul>
  );
};

const GroupItem = ({ name }) => {
  return (
    <BillContext.Consumer>
      {value => (
        <li className="Group-item">
          <span className="Group-item-name">{name}:</span>
          <span className="Group-item-price">¥{value}</span>
        </li>
      )}
    </BillContext.Consumer>
  );
};

export default GroupList;
export { GroupList, GroupItem };
