<template>
  <div class="home">
    <MyHeader></MyHeader>
    <h1>{{count}}</h1>
    <p>
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
    </p>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  export default {
    name: 'Home',
    components: {
      MyHeader
    },
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increase: function () {
        this.$store.dispatch('increase').then(() => {
          console.log('更新state之后渲染到页面')
          this.count = this.$store.state.home.count
        })
      },
      decrease: function () {
        this.$store.dispatch('decrease').then(() => {
          this.count = this.$store.state.home.count
        })
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: .6rem;
    color: white;
    text-align: center;
    height: 1rem;
  }
  p {
    text-align: center;
  }
  button {
    font-size: 1rem;
    background: white;
    color: #000;
    width: 1rem;
    height: 1rem;
  }
</style>
