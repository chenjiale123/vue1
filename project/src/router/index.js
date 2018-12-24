import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import detail from '@/page/detail'
import Hill from '@/page/detail/hill'
import open from '@/page/detail/open'
import ppyx from '@/page/detail/ppyx'
import xmbd from '@/page/detail/xmbd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:'/detail',
      name:'detail',
      component:detail
    },{
      
        path:'/detail/hill',
        name:'hill',
        component:Hill
      
    }
    ,{
      
      path:'/detail/open',
      name:'open',
      component:open
    
  }
  ,{
      
    path:'/detail/ppyx',
    name:'ppyx',
    component:ppyx
  
}
,{
      
  path:'/detail/xmbd',
  name:'xmbd',
  component:xmbd

}
  ]
})
