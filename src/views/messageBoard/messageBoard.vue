<template>
  <div class="messageBoard">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'messageBoard',
  data () {
    return {
      msg: '这是留言板页'
    }
  }
}
</script>

<style scoped>

</style>
