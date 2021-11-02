<template>
    <div class="recruitment">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <div class="page">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>

<script>
import AwHeader from '../../publicComponents/header.vue'
export default {
    name: "recruitment",
    components: {
        AwHeader
    },
    data() {
        return {
            msg: "这是招聘页",
        };
    },
};
</script>

<style scoped>
.page {
    padding-top: 60px;
}
</style>
