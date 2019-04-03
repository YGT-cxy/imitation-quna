<template>
    <div class="city-search">
        <input class="search-input" type="text" placeholder="请输入城市或拼音">
    </div>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
    .city-search
        height: .72rem
        padding: 0 .1rem
        background: $headbgColor
        .search-input
            padding: 0 .1rem
            width: 100%
            height: .62rem
            line-height: .62rem
            font-size: .28rem
            color: #666
            text-align: center
            border: none
            border-radius: .06rem
            box-sizing: border-box
            outline: none
</style>
<script>
export default {
    name: 'CitySearch'
}
</script>