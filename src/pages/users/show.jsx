import { useShow } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Typography } from "antd";
import "./CSS/list.css";
import { UserAlbumList } from "../../components/userAlbum";

const { Title, Text } = Typography;

export const UserShow = () => {
  const { query: queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <div className="userContainer">
        {!isLoading && (
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(record?.name)}&background=random&rounded=true`}
            alt={record?.name}
            width={50}
            height={50}
          />
        )}
        <div>
          <Title level={4}>{record?.name || "Name not available"}</Title>
          <Text>
            {record?.email ? (
              <a href={`mailto:${record?.email}`}>{record?.email}</a>
            ) : (
              "Email not available"
            )}
          </Text>
        </div>
      </div>
      <UserAlbumList userId={record?.id} />
    </Show>
  );
};
