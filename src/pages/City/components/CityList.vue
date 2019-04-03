<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area" v-for="(item, index) of cityList" :key="index" :ref="index">
                <h2 class="area-title">{{index}}</h2>
                <ul class="area-list">
                    <li
                        v-for="city of item"
                        :key="city.id"
                        @click="switchCity(city.name)"
                    >
                        <router-link to="/">{{city.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    @import './../../../assets/styles/mixins.styl';
    .city-list
        position: absolute
        top: 2.43rem
        bottom: 0
        left: 0
        right: 0
        overflow: hidden
    .area
        .area-title
            padding: .24rem .3rem;
            color: $darkTextColor
            font-size: .24rem
            background: #eee
        .area-list
            position: relative
            background: #fff
            overflow: hidden
            &:after
                content: ""
                display: block
                position: absolute
                left: 33.3%
                width: 33.3%
                height: 100%
                border-left: .02rem solid #ddd
                border-right: .02rem solid #ddd
                z-index: 1
            &:before {
                content: ""
                display: block
                position: absolute
                bottom: 0
                left: 0
                right: 0
                height: .02rem
                background: #eee
            }
            li
                position: relative
                box-sizing: border-box
                padding: 0 .02rem
                float: left
                width: 33.3%
                height: .9rem
                line-height: .9rem
                text-align: center
                border-bottom: .02rem solid #ddd
                z-index: 2
                a
                    display: block
                    color: $darkTextColor
                    text-decoration: none
                    ellipsis()
</style>
<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';
export default {
    name: 'CityList',
    props: {
        cityList: {
            type: Object
        },
        letter: {
            type: String
        }
    },
    methods: {
        switchCity(city) {
            // console.log(city);
            // 通过actions去调用mutations
            // this.$store.dispatch('changeCity', city);
            // 直接调用mutations
            // this.$store.commit('changeCity', city);
            // 使用辅助函数
            this.changeCity(city);
            // console.log(e.target.innerHTML);
        },
        ...mapMutations(['changeCity'])
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.wrapper, {click: true});
    },
    watch: {
        letter() {  // 监听右侧的字母列表是否点击
            if(this.letter) {  // 滚动到相应的列表项
                const element = this.$refs[this.letter][0];
                // console.log(element);
                this.scroll.scrollToElement(element);
            }
            // console.log(this);
            // console.log(this.letter);
        }
    }
    // data() {
    //     return {
    //         domestic: {},
    //         foreign: {}
    //     };
    // }
};
</script>