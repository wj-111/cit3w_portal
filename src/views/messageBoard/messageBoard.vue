<template>
    <div class="messageBoard">
        <AwHeader class="aboutUs_header" ref="aboutUs_header"></AwHeader>
        <div class="page">
            <h1>{{ msg }}</h1>
        </div>
        <AwFooter></AwFooter>
    </div>
</template>

<script>
import AwHeader from '../../publicComponents/Header'
import AwFooter from '../../publicComponents/Footer'
export default {
    name: "messageBoard",
    components: {
        AwHeader,
        AwFooter
    },
    data() {
        return {
            msg: "这是留言板页",
        };
    },
};
</script>

<style scoped>
.page {
    padding-top: 60px;
}
</style>
