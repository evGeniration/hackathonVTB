import Home from "../pages/Home";
import Testing from "../pages/Testing";
import {Login} from "../pages/Login";
import {RegistrationPage} from "../Components/Pages/RegistrationPage";


export const privateRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/test', exact:true, component:Testing
    },
    {
        path:'/reg', exact:true, component:RegistrationPage
    },
]

export const publicRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/login', exact:true, component:Login
    },
    {
        path:'/reg', exact:true, component:RegistrationPage
    },
]
