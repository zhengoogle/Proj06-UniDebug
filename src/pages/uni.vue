<template>
  <div class="zz-page">
    <!-- ------------------------- divider ------------------------ -->
    <!-- <zz-border-box :height="'30vw'"
                   :title="'1.UNI frame'">
    </zz-border-box> -->
    <div style="color: #2C405A;">AAAa0</div>
    <uni-proj></uni-proj>
  </div>
</template>

<script>
import UniProj from '../debug/uni/uni-proj/UniProj'
export default {
  name: 'UNI',
  components: {UniProj},
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">

</style>
