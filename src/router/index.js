import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TheHome from "../views/TheHome";
import GoodsDetail from "../views/GoodsDetail";
import MyAddress from "../views/MyAddress";
import SearchGoods from "../views/SearchGoods";
import MoreTravel from "../views/MoreTravel";
import PanicBuying from "../views/PanicBuying";
import MoreBuying from "../views/MoreBuying";
import Service from "../views/Service";
import Wallet from "../views/Wallet";
import WalletRouter1 from "../views/WalletRouter1";
import Withdraw from "../views/Withdraw";
import Details from "../views/Details";
import ReportCallBack from "../views/ReportCallBack";
import ReportContent from "../views/ReportContent";
import ReportStart from "../views/ReportStart";
import ShareEarn from "../views/ShareEarn";
import Order from "../views/Order/Order";
import AllOrder from "../views/Order/AllOrder";
import NoFinish from "../views/Order/NoFinish";
import Finished from "../views/Order/Finished";
import MyShare from "../views/Order/MyShare";
import ShareDetail from "../views/Order/ShareDetail";
import OrderDetail from "../views/Order/OrderDetail";
import add_address from "../views/add_address";
import DiscountCoupon from "../views/DiscountCoupon";
import WalletRouter2 from "../views/WalletRouter2";
import addsuccess from "../views/addsuccess";
import UpdateAddress from "../views/UpdateAddress";
import UpdateInfo from "../views/UpdateInfo";
import UpdatingInfo from "../views/UpdatingInfo";
import UpdateSuccess from "../views/UpdateSuccess";
import UpdateAdsuccess from "../views/UpdateAdsuccess";
import My from "../views/My";
import OrderSubmit from "../views/OrderSubmit";
import Start from "../views/Start";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',          //入口-有底部导航的都是他的 children - 杨某
    name: 'home',
    redirect:'/thehome/start',
    component:Home,

    children:[

      {path:'thehome',component:TheHome,   //带有底部导航的
        redirect:'start',
        children:[
            /*带底部导航的*/
          {path:'start',component:Start},   //首页
          {path:'service',component:Service},  //客服-李某

          {path:'wallet',component:Wallet,    //钱包-李
            redirect:'/thehome/wallet/walletRouter1',
            children:[   //钱包-李某
              {path:'walletRouter1',component:WalletRouter1},  //钱包-李某
              {path:'walletRouter2',component:WalletRouter2},  //钱包-李某
            ]},

          {         //我的-吴某
            path:'Order',
            component:Order,
            children:[
              {path:'My',component:My,children:[
                  {path: 'AllOrder', component: AllOrder},
                  {path:'NoFinish',component:NoFinish},
                  {path:'Finished',component:Finished},
                ]},
              {path: 'myaddress',component: MyAddress}, //我的地址-杨某
              {path:'MyShare', component:MyShare},
              {path:'myCards',component:DiscountCoupon}
            ],

          },

        ]
      },


      {path: '/MoreTravel/:menuName', name: '/MoreTravel', component: MoreTravel},   //更多旅游界面-况某
      {path:'/addAddress',component:add_address},
      {path:'/ShareDetail',component:ShareDetail},
      {path:'/OrderDetail',component:OrderDetail},

     ]
  },

  {path:'/withdraw',component:Withdraw},  //提现-李某
  {path:'/details',component:Details},  //
  {path:'/reportContent',component:ReportContent},
  {path:'/reportCallBack',component:ReportCallBack},
  {path:'/reportStart',component:ReportStart},
  {path:'/shareEarn',component:ShareEarn},



  {path: '/goodDetail/:goodsDetail',name: 'goodsDetail',component: GoodsDetail},  //商品详情的路由-杨某
  {path:'/searchgoods',component:SearchGoods},  //搜索的路由-杨某


    //况某
  {path: '/MoreTravelOrder/buy/:goodId1', name:'PanicBuying', component:PanicBuying},
  {path:'/TheHome/moreBuying', name:'MoreBuying', component:MoreBuying},
    {path:'/submitOrder/:orderID',component:OrderSubmit},



    //邱某
  { path:'/addMyAddress',component:add_address},
  { path:'/address/addSuccess',component:addsuccess},
  { path:'/updateAd/:addressId',component:UpdateAddress},
  { path:'/update',component:UpdateInfo},
  { path:'/update/updating',component:UpdatingInfo},
  {path:'/updatesuccess',component:UpdateSuccess},
  {path:'/updateAd/updateAdscuccess',component:UpdateAdsuccess}
]

const router = new VueRouter({
    mode:'history',
  routes
})

export default router
