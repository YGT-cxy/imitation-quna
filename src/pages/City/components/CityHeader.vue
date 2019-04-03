<template>
    <div class="city-header">
        城市选择
        <router-link to="/">
            <span class="iconfont city-header-bark">&#xe624;</span>
        </router-link>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    .city-header
        height: $headHeight
        line-height: $headHeight
        color: #fff
        font-size: .32rem
        text-align: center
        background: $headbgColor
        .city-header-bark
            float: left
            width: .64rem
            color: #fff
            font-size: .4rem
</style>
<script>
export default {
    name: 'CityHeader'
};
</script>