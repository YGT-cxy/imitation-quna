<<<<<<< HEAD
<template>
    <div class="hot-list">
        <div class="hot-header">
            <img class="hot-icon" src="../../../assets/icon/hot-icon.png" alt="本周热门榜单">
            <span class="hot-title">本周热门榜单</span>
            <a class="hot-link" href="javascript:;">全部榜单<span class="iconfont">&#xe65e;</span></a>
        </div>
        <ul class="hot-con">
            <router-link
                tag="li"
                :to="{path: '/detail', query: {detail_id: item.id, site: item.title}}"
                class="hot-item media"
                v-for="(item, index) of hotList"
                :key="item.id"
                :index="index"
            >
                <div v-if="index === 0" class="hot-tag hot-tag-one"></div>
                <div v-else-if="index === 1" class="hot-tag hot-tag-two"></div>
                <div v-else-if="index === 2" class="hot-tag hot-tag-three"></div>
                <div class="media-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <p class="media-title site">{{item.title}}</p>
                <p class="media-title"><span class="text-price">￥{{item.price}}</span>起</p>
            </router-link>
        </ul>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/mixins.styl';
    @import './../../../assets/styles/varibles.styl';
    .hot-list
        margin-top: .2rem
        font-size: .28rem
        background: #fff
        .hot-header
            position: relative
            padding: .24rem 0 .26rem
            .hot-icon
                margin-left: .2rem
                width: .3rem
                height: .3rem
            .hot-title
                margin-left: .08rem
                height: .44rem
                line-height: .44rem
                color: #212121
                font-sizse: .32rem
            .hot-link
                position: absolute
                top: .36rem
                right: .32rem
                color: #616161
                font-size: .24rem
                text-decoration: none
        .hot-con
            padding: 0 .24rem
            overflow-x: scroll
            white-space: nowrap
            .hot-item + .hot-item
                margin-left: .12rem
            .hot-item
                position: relative
                .hot-tag
                    position: absolute
                    top: 0
                    left: 0
                    width: .84rem
                    height: .4rem
                    z-index: 1
                .hot-tag-one
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png')
                    background-size: 100% 100%;
                .hot-tag-two
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png')
                    background-size: 100% 100%;
                .hot-tag-three
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png')
                    background-size: 100% 100%;
                .site
                    margin-top: .1rem
    .media
        display: inline-block
        padding: .06rem 0 .2rem
        width: 2rem
        .media-img
            padding-bottom: 100%
            width: 2rem
            height: 0
            overflow: hidden
            img
                width: 100%
        .media-title
            line-height: .36rem;
            text-align: center
            font-size: .24rem
            color: $darkTextColor
            ellipsis()
    .text-price
        color: #ff8300
        font-size: .28rem
</style>
<script>
export default {
    name: 'HotList',
    props: {
        hotList: {
            type: Array
        }
    },
    data() {
        return {
            // hotList: [
            //     {
            //         id: 0,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_250x250_86778c54.jpg',
            //         title: '长隆野生动物世界',
            //         price: 208.7
            //     },
            //     {
            //         id: 1,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_250x250_2e9029da.jpg',
            //         title: '长隆国际大马戏剧院',
            //         price: 66
            //     },
            //     {
            //         id: 2,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_250x250_d4ca7f0a.jpg',
            //         title: '长隆欢乐世界',
            //         price: 174
            //     },
            //     {
            //         id: 3,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_250x250_9f556831.jpg',
            //         title: '广州塔',
            //         price: 75
            //     }
            // ]
        };
    }
};
=======
<template>
    <div class="hot-list">
        <div class="hot-header">
            <img class="hot-icon" src="../../../assets/icon/hot-icon.png" alt="本周热门榜单">
            <span class="hot-title">本周热门榜单</span>
            <a class="hot-link" href="javascript:;">全部榜单<span class="iconfont">&#xe65e;</span></a>
        </div>
        <ul class="hot-con">
            <router-link
                tag="li"
                :to="{path: '/detail', query: {detail_id: item.id, site: item.title}}"
                class="hot-item media"
                v-for="(item, index) of hotList"
                :key="item.id"
                :index="index"
            >
                <div v-if="index === 0" class="hot-tag hot-tag-one"></div>
                <div v-else-if="index === 1" class="hot-tag hot-tag-two"></div>
                <div v-else-if="index === 2" class="hot-tag hot-tag-three"></div>
                <div class="media-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <p class="media-title site">{{item.title}}</p>
                <p class="media-title"><span class="text-price">￥{{item.price}}</span>起</p>
            </router-link>
        </ul>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/mixins.styl';
    @import './../../../assets/styles/varibles.styl';
    .hot-list
        margin-top: .2rem
        font-size: .28rem
        background: #fff
        .hot-header
            position: relative
            padding: .24rem 0 .26rem
            .hot-icon
                margin-left: .2rem
                width: .3rem
                height: .3rem
            .hot-title
                margin-left: .08rem
                height: .44rem
                line-height: .44rem
                color: #212121
                font-sizse: .32rem
            .hot-link
                position: absolute
                top: .36rem
                right: .32rem
                color: #616161
                font-size: .24rem
                text-decoration: none
        .hot-con
            padding: 0 .24rem
            overflow-x: scroll
            white-space: nowrap
            .hot-item + .hot-item
                margin-left: .12rem
            .hot-item
                position: relative
                .hot-tag
                    position: absolute
                    top: 0
                    left: 0
                    width: .84rem
                    height: .4rem
                    z-index: 1
                .hot-tag-one
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png')
                    background-size: 100% 100%;
                .hot-tag-two
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png')
                    background-size: 100% 100%;
                .hot-tag-three
                    background-image: url('http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png')
                    background-size: 100% 100%;
                .site
                    margin-top: .1rem
    .media
        display: inline-block
        padding: .06rem 0 .2rem
        width: 2rem
        .media-img
            padding-bottom: 100%
            width: 2rem
            height: 0
            overflow: hidden
            img
                width: 100%
        .media-title
            line-height: .36rem;
            text-align: center
            font-size: .24rem
            color: $darkTextColor
            ellipsis()
    .text-price
        color: #ff8300
        font-size: .28rem
</style>
<script>
export default {
    name: 'HotList',
    props: {
        hotList: {
            type: Array
        }
    },
    data() {
        return {
            // hotList: [
            //     {
            //         id: 0,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_250x250_86778c54.jpg',
            //         title: '长隆野生动物世界',
            //         price: 208.7
            //     },
            //     {
            //         id: 1,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_250x250_2e9029da.jpg',
            //         title: '长隆国际大马戏剧院',
            //         price: 66
            //     },
            //     {
            //         id: 2,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_250x250_d4ca7f0a.jpg',
            //         title: '长隆欢乐世界',
            //         price: 174
            //     },
            //     {
            //         id: 3,
            //         imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ee/ee2fb567add7969390.water.jpg_250x250_9f556831.jpg',
            //         title: '广州塔',
            //         price: 75
            //     }
            // ]
        };
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>