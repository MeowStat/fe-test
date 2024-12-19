import { useMany } from "@refinedev/core";

import {
  List,
  TextField,
  useTable,
  EditButton,
  ShowButton,
} from "@refinedev/antd";

import { Table, Space } from "antd";

export const UserList = () => {
  const { tableProps } = useTable();


  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title="ID"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="name"
          title="Avatar"
          render={(name) => (
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&rounded=true`}
              alt={name}
              width={40}
              height={40}
            />
          )}
        />
        <Table.Column
          dataIndex="name"
          title="Name"
          render={(value) => <TextField value={value} />}
        />
        <Table.Column
          dataIndex="email"
          title="Email"
          render={(value) => 
            <a href={`mailto:${value}`}>{value}</a>
          }
        />
        <Table.Column
          dataIndex="phone"
          title="Phone"
          render={(value) => <a href={`tel:${value}`}>{value}</a>}
        />
        <Table.Column
          dataIndex="website"
          title="Website"
          render={(value) => 
            <a href={`https://${value}`}
              target="_blank">
              {value}
            </a>
          }
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
