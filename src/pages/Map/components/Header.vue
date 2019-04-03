<template>
    <div class="city-header">
        景点地图
        <router-link
            :to="{path: '/detail', query: {detail_id: detailId, site: site}}"
        >
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
    name: 'CityHeader',
    props: {
        detailId: {
            type: String
        },
        site: {
            type: String
        }
    }
};
</script>