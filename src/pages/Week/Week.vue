<template>
    <div id="week">
        <week-header :week-title="weekTitle"></week-header>
        <week-list :week-list="weekList"></week-list>
    </div>
</template>
<style scoped lang="stylus">

</style>
<script>
import WeekHeader from './components/WeekHeader.vue';
import WeekList from './components/WeekList.vue';
export default {
    name: 'Week',
    components: {
        WeekHeader,
        WeekList
    },
    data() {
        return {
            weekList: [],  // 周末推荐列表
            weekTitle: '',  // 周末主题
            skuId: null  // 周末推荐项ID
        };
    },
    methods: {
        getWeekList() {
            const _this = this;
            _this.weekList = [];
            _this.weekTitle = '';
            _this.$axios.get('/weekend?skuId=' + _this.$route.query.skuId)
            .then( ({data: {data}}) => {
                // console.log(data);
                _this.weekTitle = data.title;
                _this.weekList = data.weekData;
            });
        }
    },
    mounted() {
        console.log(this.$route);
        // console.log(this.$route.query.skuId);
        this.getWeekList();
    },
    activated() {
        this.getWeekList();
    }
};
</script>