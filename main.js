Vue.component('coupon', {
    template: '<input @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit('applied')
        }
    }
})


new Vue({
    el: '#root',
    methods: {
        CouponApplied() {
            alert("test");
        }
    }

});