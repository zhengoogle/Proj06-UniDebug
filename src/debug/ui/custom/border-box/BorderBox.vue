<template>
  <div>
    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'1.UNI-自定义组件'">
    </zz-border-box>
  </div>
</template>

<script>
export default {
  name: 'BorderBox',
  data () {
    return {
      data1: 10
    }
  },
  created(){
    console.log(this.name, 'created')
  }
}
</script>

<style scoped lang="scss">

</style>
