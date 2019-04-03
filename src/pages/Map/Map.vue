<template>
    <div>
        <map-header :detail-id="detailId" :site="site"></map-header>
        <div class="map">
            <iframe :src="mapUrl" frameborder="0"></iframe>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    @import './../../assets/styles/varibles.styl';
    .map
        position: absolute
        top: $headHeight
        bottom: 0
        width: 100%
        iframe
            width: 100%
            height: 100%

</style>
<script>
import MapHeader from './components/Header.vue';
export default {
    name: 'Map',
    components: {
        MapHeader
    },
    computed: {
        mapUrl() {
            return 'https://m.amap.com/navi/?dest=' + this.locations + '&destName=' + this.site + '&hideRouteIcon=1&key=91e9cca196520443351b4d250ddab204';
        },
        detailId() {
            return this.$route.query.detail_id;
        },
        site() {
            return this.$route.query.site;
        },
        locations() {
            return this.$route.query.locations;
        }
    },
    mounted() {
        console.log(this.locations);
        // console.log(this.mapUrl);
    }
};
</script>