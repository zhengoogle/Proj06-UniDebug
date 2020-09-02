<template>
  <div class="zz-page">
    <!-- ------------------------- divider ------------------------ -->
    <!-- <zz-border-box :height="'30vw'"
                   :title="'1.UNI项目结构'">
    </zz-border-box> -->
    <div style="color: #2C405A;">BBBa02</div>
  </div>
</template>

<script>
export default {
  name: 'UniProj',
  data () {
    return {
      data1: 10
    }
  },
  beforeCreate: function () {
    console.log('LifeCycle beforeCreate')
  },
  created: function () {
    console.log('LifeCycle created')
  },
  beforeMount: function () {
    console.log('LifeCycle beforeMount')
  },
  mounted: function () {
    console.log('LifeCycle mounted')
  },
  beforeUpdate: function () {
    console.log('LifeCycle beforeUpdate')
  },
  updated: function () {
    console.log('LifeCycle updated')
  },
  activated: function () {
    console.log('LifeCycle activated')
  },
  deactivated: function () {
    console.log('LifeCycle deactivated')
  },
  beforeDestroy: function () {
    console.log('LifeCycle beforeDestroy')
  },
  destroyed: function () {
    console.log('LifeCycle destroyed')
  },
  errorCaptured: function () {
    console.log('LifeCycle errorCaptured')
  }
}
</script>

<style scoped lang="scss">

</style>
