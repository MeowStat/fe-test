import { useMany } from "@refinedev/core";

import "./CSS/list.css"

import {
  List,
  TextField,
  useTable,
  ShowButton,
} from "@refinedev/antd";

import { Table, Space } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export const AlbumList = () => {
  const { tableProps } = useTable();

  const [userMap, setUserMap] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const userMapping = {};
        users.forEach((user) => {
          userMapping[user.id] = user.name;
        });
        setUserMap(userMapping);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="title"
          title="Title"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="userId"
          title="User"
          render={(value) => (
            <div className="user-column">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userMap[value])}&background=random&rounded=true`}
                alt={userMap[value]}
                width={35}
                height={35}
              />
              <Link to={`/users/show/${value}`}>{userMap[value] || "Loading..."}</Link> 
            </div>
          )}
        />
        
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <ShowButton size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
