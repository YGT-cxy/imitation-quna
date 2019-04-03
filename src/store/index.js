import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import mutations from './mutations.js';

Vue.use(Vuex);

// let defaultCity = '北京';
// try {
//     if(localStorage.city) {
//         defaultCity = localStorage.city;
//     }
// } catch(e) {}

export default new Vuex.Store({
    state,
    mutations
    // state: {
    //     city: defaultCity,
    //     // city: localStorage.city || '北京',
    //     cityListIndex: 'domestic'
    // },
    // actions: {
    //     changeCity(ctx, city) {
    //         // console.log(ctx);  // 上下文
    //         // console.log(city);
    //         ctx.commit('changeCity', city);
    //     }
    // },
    // mutations: {
    //     changeCity(state, city) {
    //         // console.log(city);
    //         // console.log(state);
    //         state.city = city;
    //         try {
    //             localStorage.city = city;
    //         } catch(e) {}
    //         // console.log(state.city);
    //     },
    //     changeClassIndex(state, index) {
    //         state.cityListIndex = index;
    //     }
    // }
});