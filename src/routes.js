/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import  Dashboard  from "views/Dashboard.js";
import Icons from "views/Icons.js";
import  launchProject  from "views/launch-project.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import ExploreProject from "views/explore-projects.js";
import CreateToken from "views/create-token.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
    {
    path: "/create-token",
    name: "CreateToken",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: CreateToken,
    layout: "/admin",
  },
  {
    path: "/launch-Project",
    name: "LAUNCH YOUR PROJECT",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: launchProject,
    layout: "/admin",
  },
  {
    path: "/explore-projects",
    name: "EXPLORE PROJECTS",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: ExploreProject,
    layout: "/admin",
  }
];
export default routes;
