import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import InfoPage from '@/components/InfoPage';
import NoInfo from '@/components/NoInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: Home
    },
    {
      path: '/InfoPage/:name', 
      name: 'InfoPage', 
      component: InfoPage,
      props: true
    },
    {
      path: '/NoInfo',
      name: 'NoInfo', 
      component: NoInfo
    }
  ]
});

