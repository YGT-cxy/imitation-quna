<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-center">
            <span class="iconfont search-icon">&#xe632;</span>
            <span>输入城市/景点/游玩主题</span>
        </div>
        <router-link to="/city">
            <div class="header-right">
                <span>{{this.city}}</span>
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>
<style scoped lang="stylus">
    @import '~@/assets/styles/varibles.styl'
    .header
        display: flex
        height: $headHeight
        line-height: $headHeight
        color: #fff
        font-size: .24rem
        background: $headbgColor
        a
            text-decoration: none
        .header-left
            float: left
            width: .8rem
            text-align: center
            .back-icon
                font-size: .36rem
        .header-center
            flex: 1
            margin-top: .12rem
            height: .64rem
            line-height: .64rem
            color: #e4e7ea
            border-radius: .1rem
            background: #fff
            .search-icon
                margin-right: .1rem
                margin-left: .1rem
                vertical-align: middle
        .header-right
            padding: 0 .22rem
            flaot: right
            // width: 1.24rem
            font-size: .3rem
            color: #fff
            text-align: center
            .arrow-icon
                font-size: .34rem
                vertical-align: middle
</style>
<script>
import { mapState } from 'vuex';
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
};
</script>