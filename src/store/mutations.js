export default {
    changeCity(state, city) {
        // console.log(city);
        // console.log(state);
        state.city = city;
        try {
            localStorage.city = city;
        } catch(e) {}
        // console.log(state.city);
    },
    changeClassIndex(state, index) {
        state.cityListIndex = index;
    }
};