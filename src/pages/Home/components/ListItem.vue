<<<<<<< HEAD
<template>
    <ul class="list">
        <li class="list-item" @click="getLocation">
            <span class="iconfont icon">&#xe64d;</span>
            {{isLocation? '定位成功': '获取定位'}}
        </li>
        <li class="list-item">
            <span class="iconfont icon">&#xe639;</span>
            必游榜单
        </li>
    </ul>
</template>
<style scoped lang="stylus">
    .list
        display: flex
        margin-top: 1px
        font-size: .28rem
        text-align: center
        background: #fff
        .icon {
            font-size: .4rem
            vertical-align: middle
        }
        .list-item
            flex: 1
            height: .98rem
            line-height: .98rem
</style>
<script>
export default {
    name: 'HomeListItem',
    data() {
        return {
            isLocation: false
        };
    },
    methods: {
        getLocation() {  // 获取当前定位
            const _this = this;
            const options = {
              enableHighAccuracy: true,
              maximumAge: 5000,
              timeout: 5000
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
                        _this.$store.commit('changeCity', city);
                        _this.isLocation = true;
                        _this.$emit('changeCity', city);  // 通知父组件的自定义事件，执行相应的函数，修改页面
                        alert(city);
                        // city = _this.$store.state.city ? _this.$store.state.city: city;
                        // _this.$store.commit('changeCity', city);
                    }
                }).catch(function(err) {
                    alert(err);
                });
            }

            function onError() {
                // _this.$store.commit('changeCity', '广州');
                // _this.$emit('changeCity', '广州');
                // console.log(_this.$store.state.city);
                // console.log(134);
                alert('获取定位失败!');
            }
        }
    }
};
=======
<template>
    <ul class="list">
        <li class="list-item" @click="getLocation">
            <span class="iconfont icon">&#xe64d;</span>
            {{isLocation? '定位成功': '获取定位'}}
        </li>
        <li class="list-item">
            <span class="iconfont icon">&#xe639;</span>
            必游榜单
        </li>
    </ul>
</template>
<style scoped lang="stylus">
    .list
        display: flex
        margin-top: 1px
        font-size: .28rem
        text-align: center
        background: #fff
        .icon {
            font-size: .4rem
            vertical-align: middle
        }
        .list-item
            flex: 1
            height: .98rem
            line-height: .98rem
</style>
<script>
export default {
    name: 'HomeListItem',
    data() {
        return {
            isLocation: false
        };
    },
    methods: {
        getLocation() {  // 获取当前定位
            const _this = this;
            const options = {
              enableHighAccuracy: true,
              maximumAge: 5000,
              timeout: 5000
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
                        _this.$store.commit('changeCity', city);
                        _this.isLocation = true;
                        _this.$emit('changeCity', city);  // 通知父组件的自定义事件，执行相应的函数，修改页面
                        alert(city);
                        // city = _this.$store.state.city ? _this.$store.state.city: city;
                        // _this.$store.commit('changeCity', city);
                    }
                }).catch(function(err) {
                    alert(err);
                });
            }

            function onError() {
                // _this.$store.commit('changeCity', '广州');
                // _this.$emit('changeCity', '广州');
                // console.log(_this.$store.state.city);
                // console.log(134);
                alert('获取定位失败!');
            }
        }
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>