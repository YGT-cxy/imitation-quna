<<<<<<< HEAD
<template>
    <div class="detail-banner">
        <div class="banner-wrap">
            <img class="banner-img" :src="'https:' + header.imgUrl" alt="">
        </div>
        <div class="banner-imgswipeicon">
            <span class="iconfont icon-img">&#xe60f;</span><span class="img-num">{{header.imgNum}}</span>
        </div>
        <div class="banner-info">{{site}}</div>
    </div>
</template>
<style lang="stylus" scoped>
    .detail-banner
        position: relative
        &:after
            content: ""
            display: block
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            min-height: .6rem
            background-color: transparent
            background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)))
        .banner-wrap
            padding-bottom: 55%
            height: 0
            overflow: hidden
            .banner-img
                width: 100%;
        .banner-imgswipeicon
            position: absolute
            left: .2rem
            bottom: .86rem
            width: 1.2rem
            height: .4rem
            line-height: .4rem
            color: #fff
            font-size: .26rem
            text-align: center
            background: rgba(0,0,0,.5);
            border-radius: .2rem
            .icon-img
                margin-right: .16rem
                font-size: .24rem
        .banner-info
            position: absolute
            right: .2rem
            bottom: .36rem
            left: .2rem
            min-height: .4rem
            line-height: .4rem
            font-size: .36rem
            color: #fff
            text-shadow: 0 1px 2px rgba(0,0,0,0.70)

</style>
<script>
export default {
    name: 'DetailBanner',
    props: {
        header: {
            type: Object
        },
        site: {
            type: String
        }
    }
};
=======
<template>
    <div class="detail-banner">
        <div class="banner-wrap">
            <img class="banner-img" :src="'https:' + header.imgUrl" alt="">
        </div>
        <div class="banner-imgswipeicon">
            <span class="iconfont icon-img">&#xe60f;</span><span class="img-num">{{header.imgNum}}</span>
        </div>
        <div class="banner-info">{{site}}</div>
    </div>
</template>
<style lang="stylus" scoped>
    .detail-banner
        position: relative
        &:after
            content: ""
            display: block
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            min-height: .6rem
            background-color: transparent
            background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)))
        .banner-wrap
            padding-bottom: 55%
            height: 0
            overflow: hidden
            .banner-img
                width: 100%;
        .banner-imgswipeicon
            position: absolute
            left: .2rem
            bottom: .86rem
            width: 1.2rem
            height: .4rem
            line-height: .4rem
            color: #fff
            font-size: .26rem
            text-align: center
            background: rgba(0,0,0,.5);
            border-radius: .2rem
            .icon-img
                margin-right: .16rem
                font-size: .24rem
        .banner-info
            position: absolute
            right: .2rem
            bottom: .36rem
            left: .2rem
            min-height: .4rem
            line-height: .4rem
            font-size: .36rem
            color: #fff
            text-shadow: 0 1px 2px rgba(0,0,0,0.70)

</style>
<script>
export default {
    name: 'DetailBanner',
    props: {
        header: {
            type: Object
        },
        site: {
            type: String
        }
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>