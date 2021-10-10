import Testing from "../pages/Testing";
import {Login} from "../pages/Login";
import {Home} from '../pages/Home'
import {DataSets} from "../pages/DataSets";
import DataSet from "../pages/DataSet";
import {Registr} from "../pages/Regist";


export const privateRoutes=[

    {
        path:'/datasets', exact:true, component:DataSets
    },
    {
        path:'/datasets/charts', component:DataSet
    }
]

export const publicRoutes=[
    {
        path:'/login', exact:true, component:Login
    },
    {
        path:'/reg', exact:true, component:Registr
    },
    {
        path:'/', exact:true, component:Home
    },
]
