<<<<<<< HEAD
<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper :swiper-list="swiper"></home-swiper>
        <home-icons :icon-list="icon"></home-icons>
        <home-list-item @changeCity="handleChangeCity"></home-list-item>
        <home-hot-list :hot-list="hot"></home-hot-list>
        <home-recommend-list :like-list="like"></home-recommend-list>
        <home-relax :like-list="week"></home-relax>
    </div>
</template>
<style scoped lang="stylus">
    #home
        padding-bottom: 2rem
</style>
<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeListItem from './components/ListItem.vue';
import HomeHotList from './components/HotList.vue';
import HomeRecommendList from './components/RecommendList.vue';
import HomeRelax from './components/Relax.vue';

// import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            lastCity: '',
            swiper: [],
            hot: [],
            like: [],
            week: [],
            icon: []
        };
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeListItem,
        HomeHotList,
        HomeRecommendList,
        HomeRelax
    },
    methods: {
        getHomeInfo() {  // 获取首页数据
            var _this = this;
            const city = this.$store.state.city;
            _this.$axios.get('/travel?city=' + city)
            .then((res) => {
                // console.log(res);
                if(res.data.code === 200) {
                    _this.swiper = res.data.data.swiper;
                    _this.hot = res.data.data.hot;
                    _this.like = res.data.data.like;
                    _this.week = res.data.data.week;
                    _this.icon = res.data.data.icon;
                }
            });
        },
        getLocation() {  // 获取当前定位
            const _this = this;
            const options = {
              enableHighAccuracy: true,
              maximumAge: 3600000
            };

            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

            function onSuccess(position) {
                const longitude = position.coords.longitude,
                    latitude = position.coords.latitude;
                    alert(longitude);
                _this.$axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=c0461f8625a7922389537f6029fd0d3d&location=${longitude},${latitude}`)
                .then(({data}) => {
                    // console.log(data.regeocode.addressComponent);
                    // alert(data.status);
                    if(data.status) {
                        let city = data.regeocode.addressComponent.city.slice(0, -1);
                        alert(city);
                        if(!_this.$store.state.city) {
                            _this.$store.commit('changeCity', city);
                            _this.getHomeInfo();
                        }
                        // city = _this.$store.state.city ? _this.$store.state.city: city;
                        // _this.$store.commit('changeCity', city);
                    }
                }).catch(function(err) {
                    alert(err);
                });
            }

            function onError() {
                alert('获取定位失败!');
            }
        },
        handleChangeCity(city) {  // 子组件传到父组件通知定位发生改变
            // console.log('city:' + city);
            this.lastCity = city;
            this.getHomeInfo();
        }
    },
    mounted () {
        this.lastCity = this.$store.state.city;
        // console.log(this.lastCity);
        this.getHomeInfo();
        // this.getLocation();
    },
    activated() {
        console.log(this.lastCity);
        if(this.lastCity !== this.$store.state.city) {
            this.getHomeInfo();
            this.lastCity = this.$store.state.city;
        }
    }
};
</script>
=======
<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper :swiper-list="swiper"></home-swiper>
        <home-icons :icon-list="icon"></home-icons>
        <home-list-item @changeCity="handleChangeCity"></home-list-item>
        <home-hot-list :hot-list="hot"></home-hot-list>
        <home-recommend-list :like-list="like"></home-recommend-list>
        <home-relax :like-list="week"></home-relax>

        <div class="loading-wrap" v-if="loading">
            <van-loading type="spinner" color="#1989fa" />
        </div>

    </div>
</template>
<style scoped lang="stylus">
    #home
        padding-bottom: 2rem
    .loading-wrap
        display flex
        justify-content: center
        align-items: center
        position: fixed
        top: 0
        left: 0
        z-index: 9999
        width: 100%
        height: 100%
        background: rgba(0,0,0,.7)
        & .van-loading
            width: 50px
            height: 50px
</style>
<script>
import HomeHeader from './components/Header.vue';
import HomeSwiper from './components/Swiper.vue';
import HomeIcons from './components/Icons.vue';
import HomeListItem from './components/ListItem.vue';
import HomeHotList from './components/HotList.vue';
import HomeRecommendList from './components/RecommendList.vue';
import HomeRelax from './components/Relax.vue';
import { getHomeInfo } from './../../api/home';

// import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            loading: false, // 控制加载
            lastCity: '',
            swiper: [],
            hot: [],
            like: [],
            week: [],
            icon: []
        };
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeListItem,
        HomeHotList,
        HomeRecommendList,
        HomeRelax
    },
    methods: {
        getHomeInfo() {  // 获取首页数据
            const _this = this;
            const city = this.$store.state.city;
            _this.loading = true;
            getHomeInfo(city).then( res => {
                if(res.code === 200) {
                    _this.swiper = res.data.swiper;
                    _this.hot = res.data.hot;
                    _this.like = res.data.like;
                    _this.week = res.data.week;
                    _this.icon = res.data.icon;
                }
                _this.loading = false;
            }).catch( err => {
                _this.$notify({
                    message: err.msg,
                    duration: 1500,
                    background: '#dc143c'
                });
            })
        },
        getLocation() {  // 获取当前定位
            const _this = this;
            const options = {
              enableHighAccuracy: true,
              maximumAge: 3600000
            };

            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

            function onSuccess(position) {
                const longitude = position.coords.longitude,
                    latitude = position.coords.latitude;
                    alert(longitude);
                _this.$axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=c0461f8625a7922389537f6029fd0d3d&location=${longitude},${latitude}`)
                .then(({data}) => {
                    // console.log(data.regeocode.addressComponent);
                    // alert(data.status);
                    if(data.status) {
                        let city = data.regeocode.addressComponent.city.slice(0, -1);
                        alert(city);
                        if(!_this.$store.state.city) {
                            _this.$store.commit('changeCity', city);
                            _this.getHomeInfo();
                        }
                        // city = _this.$store.state.city ? _this.$store.state.city: city;
                        // _this.$store.commit('changeCity', city);
                    }
                }).catch(function(err) {
                    alert(err);
                });
            }

            function onError() {
                alert('获取定位失败!');
            }
        },
        handleChangeCity(city) {  // 子组件传到父组件通知定位发生改变
            // console.log('city:' + city);
            this.lastCity = city;
            this.getHomeInfo();
        }
    },
    mounted () {
        this.lastCity = this.$store.state.city;
        // console.log(this.lastCity);
        this.getHomeInfo();
        // this.getLocation();
    },
    activated() {
        console.log(this.lastCity);
        if(this.lastCity !== this.$store.state.city) {
            this.getHomeInfo();
            this.lastCity = this.$store.state.city;
        }
    }
};
</script>
>>>>>>> 抽离接口到api文件，增加serve端文件
