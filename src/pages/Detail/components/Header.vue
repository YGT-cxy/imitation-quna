<<<<<<< HEAD
<template>
    <div class="detail-header">
        {{site}}
        <router-link to="/">
            <span class="iconfont detail-header-bark">&#xe624;</span>
        </router-link>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    .detail-header
        height: $headHeight
        line-height: $headHeight
        color: #fff
        font-size: .32rem
        text-align: center
        background: $headbgColor
        .detail-header-bark
            float: left
            width: .64rem
            color: #fff
            font-size: .4rem
</style>
<script>
export default {
    name: 'DetailHeader',
    props: {
        site: {
            type: String
        }
    },
    data() {
        return {};
    }
};
=======
<template>
    <div class="detail-header">
        {{site}}
        <router-link to="/">
            <span class="iconfont detail-header-bark">&#xe624;</span>
        </router-link>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    .detail-header
        height: $headHeight
        line-height: $headHeight
        color: #fff
        font-size: .32rem
        text-align: center
        background: $headbgColor
        .detail-header-bark
            float: left
            width: .64rem
            color: #fff
            font-size: .4rem
</style>
<script>
export default {
    name: 'DetailHeader',
    props: {
        site: {
            type: String
        }
    },
    data() {
        return {};
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>