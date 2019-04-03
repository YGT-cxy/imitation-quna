<template>
    <div class="recommend">
        <div class="recommend-header">
            <img class="recommend-header-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span class="recommend-header-title">猜你喜欢</span>
        </div>
        <ul class="like-list">
            <router-link
                tag="li"
                :to="{path: '/detail', query: {detail_id: item.id, site: item.title}}"
                class="like-item"
                v-for="item of likeList"
                :key="item.id"
            >
                <div
                    class="like-item-tag"
                    :class="item.tag === '随买随用' ? '': 'like-item-tag-2'"
                    v-if="item.tag"
                >
                    {{item.tag}}
                </div>
                <div class="like-item-left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="like-item-info">
                    <p class="like-title">{{item.title}}</p>
                    <p class="like-comment">
                        <span class="starlevel">
                            <span class="starlevel-default"></span>
                            <span class="starlevel-gain"></span>
                        </span>
                        <span class="like-comment-num">{{item.comment_num}}条评论</span>
                    </p>
                    <p class="like-price">
                        <span class="like-price-num">￥{{item.price}}</span>起
                        <span class="like-price-address">{{item.address}}</span>
                    </p>
                    <p v-if="item.featurText" class="like-feature">{{item.featurText}}</p>
                </div>
            </router-link>
        </ul>
        <a class="recommend-more" href="">查看所有产品</a>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    .recommend
        margin-top: .2rem
        font-size: .28rem
        background: #fff
        .recommend-header
            padding: .24rem 0 .26rem
            .recommend-header-img
                margin-left: .2rem
                width: .3rem
                height: .3rem
            .recommend-header-title
                margin-left: .08rem
                height: .44rem
                line-height: .44rem
                font-size: .28rem
                color: $darkTextColor
        .recommend-more
            display: block
            padding: .2rem 0
            color: #00afc7
            font-size: .28rem
            line-height: .4rem
            text-align: center
            border-top: 1px solid #ccc
            text-decoration: none
    .like-list
        margin-left: .24rem
        .like-item + .like-item
            border-top: 1px solid #ccc
    .like-item
        position: relative
        padding: .2rem 0
        font-size: .24rem
        overflow: hidden
        .like-item-tag
            position: absolute
            top: .2rem
            left: 0
            width: 1.02rem
            height: .38rem
            line-height: .38rem
            color: #fff
            font-size: .2rem
            text-indent: .04rem
            background-image: url('./../../../assets/icon/tag-1.png')
            background-size: 100% 100%
        .like-item-tag-2
            background-image: url('./../../../assets/icon/tag-2.png')
        .like-item-left
            float: left
            width: 2rem
            height: 2rem
            overflow: hidden
            img
                width: 100%
        .like-item-info
            padding-left: .22rem
            overflow: hidden
            .like-title
                margin-top: .26rem
                height: .44rem
                line-height: .44rem
                font-size: .32rem
                color: $darkTextColor
        .like-comment
            margin-top: .14rem
            height: .34rem
            .starlevel
                position: relative
                color: red
            .starlevel-default
                position: absolute
                left: 0
                top: 0
            .starlevel-gain
                position: absolute
                left: 0
                top: 0
            .like-comment-num
                color: #616161
        .like-price
            position: relative
            margin-top: .22rem
            color: #616161
            .like-price-num
                color: #ff8300
                font-size: .4rem
            .like-price-address
                position: absolute
                right: .2rem
                bottom: 0
        .like-feature
            margin-top: .48rem
            margin-right: .24rem
            padding: .1rem .1rem
            color: #f55
            background: #fff9f9
</style>
<script>
export default {
    name: 'HomeRecommendList',
    props: {
        likeList: {
            type: Array
        }
    },
    data() {
        return {};
    }
};
</script>