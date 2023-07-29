import Detail from './pages/Home.vue'
import Shipping from './pages/Shipping.vue'
import Card from './pages/Catalog.vue'
import ShippingList from './pages/ShippingList.vue'

export default [
    {
        path: "/home",
        component: Detail,
    },
    {
        path: "/shipping",
        component: Shipping
    },
    {
        path: "/catalog",
        component: Card
    },
    {
        path: "/shippinglist",
        component: ShippingList
    }
];