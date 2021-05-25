import React from "react";
import "./Group.css";

import TotalContext from "../TotalContext";
import MembersContext from "../MembersContext";

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
  const total = React.useContext(TotalContext);
  const members = React.useContext(MembersContext);

  return (
    <li className="Group-item">
      <span className="Group-item-name">{name}:</span>
      <span className="Group-item-price">¥{total / members.length}</span>
    </li>
  );
};

export default GroupList;
export { GroupList, GroupItem };
