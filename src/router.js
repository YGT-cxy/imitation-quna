import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home/Home.vue';
import City from './pages/City/City.vue';
import Week from './pages/Week/Week.vue';
import Detail from './pages/Detail/Detail.vue';
import Map from './pages/Map/Map.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/week',
      name: 'Week',
      component: Week
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
});
