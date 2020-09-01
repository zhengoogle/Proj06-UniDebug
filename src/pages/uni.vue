<template>
  <div class="zz-page">
    <UniProj></UniProj>
    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'1.UNI frame'">
    </zz-border-box>
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
