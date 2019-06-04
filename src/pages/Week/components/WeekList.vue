<<<<<<< HEAD
<template>
    <ul class="week-list">
        <li v-for="(item, index) of weekList" :key="item.id" class="week-item">
            <div class="week-img">
                <img :src="item.imgUrl" :alt="item.name">
            </div>
            <div class="week-info">
                <p class="week-name">{{item.name}}</p>
                <p class="week-desc">{{item.desc}}</p>
                <div class="week-price">
                    <span class="week-qunarprice">{{item.price}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
@import './../../../assets/styles/mixins.styl';
    .week-list
        background: #eee
    .week-item
        background: #fff
        .week-img
            position: relative
            padding-bottom: 43.37288%
            width: 100%
            height: 0
            overflow: hidden
            img
                width: 100%
        .week-info
            position: relative
            padding: .14rem .2rem .24rem .2rem
            .week-name
                padding-right: 2.2rem
                line-height: .54rem
                font-size: .36rem
                color: $darkTextColor
                ellipsis()
            .week-desc
                line-height: .45rem
                font-size: .26rem
                color: #616161
                ellipsis()
            .week-price
                position: absolute
                top: .25rem
                right: .2rem
                font-size: 0
            .week-qunarprice
                display: inline-block
                color: #ff8300
                font-size: .4rem
                font-weight: bold
                &:before
                    content: "￥"
                    display: inline-block
                    margin-right: .04rem
                    font-size: .18rem
                &:after
                    content: "起"
                    display: inline-block
                    margin-left: .04rem
                    color: #616161
                    font-size: .22rem

</style>
<script>
export default {
    name: 'WeekList',
    props: {
        weekList: {
            type: Array
        }
    }
};
=======
<template>
    <ul class="week-list">
        <li v-for="(item, index) of weekList" :key="item.id" class="week-item">
            <div class="week-img">
                <img :src="item.imgUrl" :alt="item.name">
            </div>
            <div class="week-info">
                <p class="week-name">{{item.name}}</p>
                <p class="week-desc">{{item.desc}}</p>
                <div class="week-price">
                    <span class="week-qunarprice">{{item.price}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
@import './../../../assets/styles/mixins.styl';
    .week-list
        background: #eee
    .week-item
        background: #fff
        .week-img
            position: relative
            padding-bottom: 43.37288%
            width: 100%
            height: 0
            overflow: hidden
            img
                width: 100%
        .week-info
            position: relative
            padding: .14rem .2rem .24rem .2rem
            .week-name
                padding-right: 2.2rem
                line-height: .54rem
                font-size: .36rem
                color: $darkTextColor
                ellipsis()
            .week-desc
                line-height: .45rem
                font-size: .26rem
                color: #616161
                ellipsis()
            .week-price
                position: absolute
                top: .25rem
                right: .2rem
                font-size: 0
            .week-qunarprice
                display: inline-block
                color: #ff8300
                font-size: .4rem
                font-weight: bold
                &:before
                    content: "￥"
                    display: inline-block
                    margin-right: .04rem
                    font-size: .18rem
                &:after
                    content: "起"
                    display: inline-block
                    margin-left: .04rem
                    color: #616161
                    font-size: .22rem

</style>
<script>
export default {
    name: 'WeekList',
    props: {
        weekList: {
            type: Array
        }
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>