import Testing from "../pages/Testing";
import Login from "../pages/Login";
import Home from '../pages/Home'
import DataSets from "../pages/DataSets";
import DataSet from "../pages/DataSet";


export const privateRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/test', exact:true, component:Testing
    },
    {
        path:'/datasets', exact:true, component:DataSets
    },
    {
        path:'/datasets/:id', component:DataSet
    }
]

export const publicRoutes=[
    {
        path:'/', exact:true, component:Home
    },
    {
        path:'/login', exact:true, component:Login
    },
    {
        path:'/reg', exact:true, component:Registr
    },
    {
        path:'/datasets', exact:true, component:DataSets
    },
    {
        path:'/datasets/:id', component:DataSet
    }
]
