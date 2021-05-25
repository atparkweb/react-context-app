import React from "react";
import "./Group.css";

const GroupList = ({ list = [], total = 0 }) => {
  return (
    <ul className="Group-list">
      {list.map(item => (
        <GroupItem
          key={item.id}
          name={item.name}
          total={total}
          membersCount={list.length || 1}
        ></GroupItem>
      ))}
    </ul>
  );
};

const GroupItem = ({ name, total, membersCount }) => {
  return (
    <li className="Group-item">
      {name}: ¥ {Math.round(total / membersCount)}
    </li>
  );
};

export default GroupList;
export { GroupList, GroupItem };
