<template>
    <div id="detail">
        <!-- <detail-header :site="site"></detail-header> -->
        <detail-banner :header="header" :site="site"></detail-banner>
        <detail-baseinfo :baseinfo="baseinfo" :site="site" :detail-id="detail_id" :locations="locations"></detail-baseinfo>
        <!-- <a class="iconfont header-back" href="/">&#xe624;</a> -->
        <router-link
            to="/"
            class="iconfont header-back"
        >&#xe624;</router-link>
    </div>
</template>
<style lang="stylus" scoped>
    .header-back
        position: absolute
        top: .1rem
        left: .1rem
        width: .72rem
        height: .72rem
        line-height: .72rem
        color: #fff
        text-align: center
        background: rgba(0,0,0,.5)
        border-radius: 100%
        text-decoration: none
</style>
<script>
import DetailHeader from './components/Header.vue';
import DetailBanner from './components/Banner.vue';
import DetailBaseinfo from './components/baseinfo.vue';
export default {
    name: 'Detail',
    data() {
        return {
            lastDetailId: this.$route.query.detail_id,
            baseinfo: {},
            header: {},
            locations: ''
        };
    },
    components: {
        DetailHeader,
        DetailBanner,
        DetailBaseinfo
    },
    computed: {
        detail_id() {
            return this.$route.query.detail_id;
        },
        site() {
            return this.$route.query.site;
        }
    },
    methods: {
        getSiteDetail() {  // 获取地点详情
            const _this = this;
            _this.$axios.get('/detail?detail_id=' + this.detail_id)
            .then(({data}) => {
                if(data.code === 200) {
                    // console.log(data);
                    _this.baseinfo = data.data.baseinfo;
                    _this.header = data.data.header;
                }
            });
        },
        getLocation() {  // 获取地点的经纬度
            const _this = this;
            _this.$axios.get('https://restapi.amap.com/v3/geocode/geo?address=' + _this.site + '&key=c0461f8625a7922389537f6029fd0d3d')
            .then(({data}) => {
                if(data.status) {
                    _this.locations = data.geocodes[0].location;
                } else {
                    alert(data.info);
                }
                // console.log(data.geocodes);
                // console.log(_this.locations);
                // console.log(data);
            });
        }
    },
    mounted() {
        // console.log(this.lastDetailId);
        this.getSiteDetail();
        this.getLocation();
    },
    activated() {
        if(this.$route.query.detail_id !== this.lastDetailId) {
            this.baseinfo = {};
            this.header = {};
            this.lastDetailId = this.$route.query.detail_id;
            this.getSiteDetail();
            this.getLocation();
        }
    }
};
</script>