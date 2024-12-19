import { List, TextField, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { useEffect, useState } from "react";

export const UserAlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
        const albumData = await response.json();
        setAlbums(albumData);
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [userId]);

  return (
    
      <Table
        dataSource={albums}
        loading={loading}
        rowKey="id"
      >
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
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <ShowButton size="small" resource="albums" recordItemId={record.id} 
              />
            </Space>
          )}
        />
      </Table>
    
  );
};
