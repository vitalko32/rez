import UserList from "../components/UserList";
import Profile from "../components/Profile";
import NotFound from "../components/NotFound";
import Info from "../components/Info";
import HomePage from "../components/HomePage";
import Rezume from "../components/Rezume";



export const routes = [
    {path: "/repositories", element: "repos"},
    {path: "/todos", element: "repos"},
    {path: "/user/:login", element: Info},
    {path: "/", element: HomePage},
    {path: "/:user", element: Rezume},
    {path: "*", element: NotFound},
]