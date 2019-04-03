<template>
    <div class="week-header">
        <router-link
            tag="i"
            class="iconfont"
            to="/"
        >&#xe624;</router-link>
        <!-- <i class="iconfont">&#xe624;</i> -->
        <h1>{{weekTitle}}</h1>
    </div>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
    .week-header
        position: relative
        height: $headHeight
        line-height: $headHeight
        background: $headbgColor = #00bcd4
        text-align: center
        i
            display: inline-block
            position: relative
            left: .12rem;
            float: left
            width: .64rem
            color: #fff
            font-size: .4rem
            z-index: 9
        h1
            position: absolute
            top: 0
            bottom: 0
            width: 100%
            font-size: .32rem
            text-overflow: ellipsis
            color: #fff
            white-space: nowrap
</style>
<script>
export default {
    name: 'WeekHeader',
    props: {
        weekTitle: {
            type: String
        }
    }
};
</script>