import { Refine } from "@refinedev/core";
import {
  useNotificationProvider,
  ErrorComponent,
  ThemedLayoutV2,
  Sider,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router";
import { Layout as AntdLayout} from "antd";


import "@refinedev/antd/dist/reset.css";

import { AlbumList, AlbumShow } from "./pages/albums";
import { UserList, UserShow } from "./pages/users";

const API_URL = "https://jsonplaceholder.typicode.com";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider(API_URL)}
        routerProvider={routerProvider}
        resources={[
          {
            name: "albums",
            list: "/albums",
            show: "/albums/show/:id",
          },
          {
            name: "users",
            list: "/users",
            show: "/users/show/:id",
          },
          
          
        ]}
        notificationProvider={useNotificationProvider}
        options={{
          warnWhenUnsavedChanges: true,
          syncWithLocation: true,
        }}
      >
        <Routes>
          <Route
            element={
              <ThemedLayoutV2
                  Sider={() => {return <Sider/>}}
                  >
                  <AntdLayout.Content>
                    <div>
                      <Outlet />
                    </div>
                  </AntdLayout.Content>
                </ThemedLayoutV2>
              }
            >
          
            <Route index element={<NavigateToResource resource="users" />} />

            
            <Route path="albums">
              <Route index element={<AlbumList />} />
              <Route path="show/:id" element={<AlbumShow />} />
            </Route>

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path="show/:id" element={<UserShow />} />
            </Route>

            <Route path="*" element={<ErrorComponent />} />
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
    </BrowserRouter>
  );
};

export default App;
