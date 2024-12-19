import { useShow, useOne } from "@refinedev/core";

import { Show} from "@refinedev/antd";

import { Typography } from "antd";
import { Link } from "react-router";
import { Album } from "../../components/Album";

const { Title, Text } = Typography;

export const AlbumShow = () => {
  const { query: queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: userData, isLoading: userIsLoading } = useOne({
    resource: "users",
    id: record?.userId || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  console.log(userData)

  return (
    <Show isLoading={userIsLoading}>
      <div className="userContainer">
        {!isLoading && (
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userData?.data.name)}&background=random&rounded=true`}
            alt={userData?.data.name}
            width={50}
            height={50}
          />
        )}
        <div>
          <Link to={`/users/show/${userData?.data.id}`}>
            <h3>{userData?.data.name || "Name not available"}</h3>
          </Link>
          <Text>
            {userData?.data.email ? (
              <a href={`mailto:${userData?.data.email}`}>{userData?.data.email}</a>
            ) : (
              "Email not available"
            )}
          </Text>
        </div>
      </div>
      <Album albumName={record?.title} albumId={record?.id}/>
    </Show>
  );
};
