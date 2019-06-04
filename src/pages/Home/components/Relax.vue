<<<<<<< HEAD
<template>
    <div>
        <h2 class="relax-h2">周末去哪儿</h2>
        <ul>
            <router-link
                tag="li"
                :to="{ path: '/week', query: { skuId: item.skuId}}"
                class="relax-item"
                v-for="item of likeList"
                :key="item.skuId"
            >
            <!-- <li class="relax-item" v-for="item of likeList" :key="item.skuId"> -->
                <div class="relax-img">
                    <img :src="item.imgUrl" :alt="item.name">
                </div>
                <div class="relax-info">
                    <p class="relax-title">{{item.name}}</p>
                    <p class="relax-desc">{{item.desc}}</p>
                </div>
            </router-link>
            <!-- </li> -->
        </ul>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    @import './../../../assets/styles/mixins.styl';
    .relax-h2
        padding-left: .26rem
        height: .8rem
        line-height: .8rem
        font-size: .3rem
        font-weight: normal
        color: $darkTextColor
    .relax-item
        margin-bottom: .1rem
        color: $darkTextColor
        background: #fff
        .relax-img
            padding-bottom: 37.4375%
            height: 0
            overflow: hidden
            img
                width: 100%
        .relax-info
            margin-right: 1.4rem
            padding: .14rem .2rem .2rem .2rem
            .relax-title
                line-height: .48rem;
                font-size: .28rem
                ellipsis()
            .relax-desc
                line-height: .42rem;
                font-size: .24rem
                ellipsis()
</style>
<script>
export default {
    name: 'HomeRelax',
    props: {
        likeList: {
            type: Array
        }
    },
    data() {
        return {
            // relaxList: [
            //     {
            //         id: 1,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
            //         name: '清远周边逛',
            //         desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
            //     },{
            //         id: 2,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
            //         name: '浮在海上的绿洲',
            //         desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
            //     },{
            //         id: 3,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
            //         name: '广州必打卡',
            //         desc: '感受现代与传统相融合的广州'
            //     },{
            //         id: 4,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
            //         name: '广州泡汤圣地',
            //         desc: '解压之地，放松自己，来一段轻松的旅程。'
            //     }
            // ]
        };
    }
};
=======
<template>
    <div>
        <h2 class="relax-h2">周末去哪儿</h2>
        <ul>
            <router-link
                tag="li"
                :to="{ path: '/week', query: { skuId: item.skuId}}"
                class="relax-item"
                v-for="item of likeList"
                :key="item.skuId"
            >
            <!-- <li class="relax-item" v-for="item of likeList" :key="item.skuId"> -->
                <div class="relax-img">
                    <img :src="item.imgUrl" :alt="item.name">
                </div>
                <div class="relax-info">
                    <p class="relax-title">{{item.name}}</p>
                    <p class="relax-desc">{{item.desc}}</p>
                </div>
            </router-link>
            <!-- </li> -->
        </ul>
    </div>
</template>
<style scoped lang="stylus">
    @import './../../../assets/styles/varibles.styl';
    @import './../../../assets/styles/mixins.styl';
    .relax-h2
        padding-left: .26rem
        height: .8rem
        line-height: .8rem
        font-size: .3rem
        font-weight: normal
        color: $darkTextColor
    .relax-item
        margin-bottom: .1rem
        color: $darkTextColor
        background: #fff
        .relax-img
            padding-bottom: 37.4375%
            height: 0
            overflow: hidden
            img
                width: 100%
        .relax-info
            margin-right: 1.4rem
            padding: .14rem .2rem .2rem .2rem
            .relax-title
                line-height: .48rem;
                font-size: .28rem
                ellipsis()
            .relax-desc
                line-height: .42rem;
                font-size: .24rem
                ellipsis()
</style>
<script>
export default {
    name: 'HomeRelax',
    props: {
        likeList: {
            type: Array
        }
    },
    data() {
        return {
            // relaxList: [
            //     {
            //         id: 1,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
            //         name: '清远周边逛',
            //         desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
            //     },{
            //         id: 2,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
            //         name: '浮在海上的绿洲',
            //         desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
            //     },{
            //         id: 3,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
            //         name: '广州必打卡',
            //         desc: '感受现代与传统相融合的广州'
            //     },{
            //         id: 4,
            //         imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
            //         name: '广州泡汤圣地',
            //         desc: '解压之地，放松自己，来一段轻松的旅程。'
            //     }
            // ]
        };
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>