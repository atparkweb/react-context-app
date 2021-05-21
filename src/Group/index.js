import React from "react";

const GroupList = () => {
  return (
    <ul>
      <GroupItem></GroupItem>
      <GroupItem></GroupItem>
      <GroupItem></GroupItem>
    </ul>
  );
};

const GroupItem = () => {
  return <li className="Group-item">Item</li>;
};

export default GroupList;
export { GroupList, GroupItem };
