<template>
    <div class="baseinfo">
        <div class="baseinfo-card">
            <div class="item">
                <div>
                    <span class="item-score">{{baseinfo.score}}</span>
                    <span class="item-text">分</span>
                    <span class="item-desc">{{baseinfo.desc}}</span>
                </div>
                <div>
                    <span class="item-commentnum">{{baseinfo.comment}}条评论</span>
                    <span class="item-commentnum">{{baseinfo.strategy}}条攻略</span>
                    <span class="iconfont item-rightarrow">&#xe65e;</span>
                </div>
            </div>
            <div class="item">
                <div>
                    <span class="item-sightcard">景点简介</span>
                </div>
                <div>
                    <span class="item-sighttext">开放时间、贴士</span>
                    <span class="iconfont item-rightarrow">&#xe65e;</span>
                </div>
            </div>
        </div>
        <div class="baseinfo-address">
            <router-link
                tag="div"
                :to="{path: '/map', query: {site: site, detail_id: detailId, locations: locations}}"
                class="address-text"
            >
                <span class="iconfont icon-address">&#xe64d;</span>
                <span>{{baseinfo.address}}</span>
                <span class="iconfont address-rightarrow">&#xe65e;</span>
            </router-link>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .baseinfo
        position: relative;
        top: -.1rem;
        padding: .1rem .2rem 0 .2rem
        margin-bottom: .1rem
        font-size: .4em
        background: #fff
        border-radius: .1rem .1rem 0 0
    .baseinfo-card
        display: flex
        padding-top: .1rem
        padding-bottom: .2rem
        width: 100%
        .item
            position: relative
            flex: 1
            color: #ff8300
            .item-score
                font-size: .44rem
            .item-text
                font-size: .28rem
            .item-desc
                margin-left: .2rem
                font-size: .28rem
            .item-commentnum
                font-size: .24rem
                color: #9e9e9e
                line-height: .32rem
                margin-right: .2rem
            .item-sightcard
                padding-left: .3rem
                color: #212121
                font-size: .28rem
            .item-sighttext
                padding-left: .3rem
                color: #9e9e9e
                font-size: .24rem
            .item-rightarrow
                position: absolute
                top: .3rem
                right: .2rem
                color: #9e9e9e
                font-size: .28rem
    .baseinfo-address
        padding: .2rem 0;
        line-height: .36rem;
        .address-text
            position: relative
            padding-left: .56rem
            padding-right: .56rem
            font-size: .28rem
            .icon-address
                display: block
                position: absolute
                left: 0
                top: .16rem
                margin-top: -.16rem
                margin-right: .2rem
                height: 100%
                line-height: 100%
                color: #9e9e9e
                font-size: .36rem
            .address-rightarrow
                position: absolute
                right: 0
                top: 50%
                margin-top: -.14rem;
                color: #9e9e9e
                fotn-size: .28rem
</style>
<script>
export default {
    name: 'DetailBaseinfo',
    props: {
        baseinfo: {
            type: Object
        },
        site: {
            type: String
        },
        detailId: {
            type: String
        },
        locations: {
            type: String
        }
    }
};
</script>