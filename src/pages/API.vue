<template>
  <div>
    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'2.'">
    </zz-border-box>
    <QRCode></QRCode>
  </div>
</template>

<script>
import QRCode from '../debug/uni/qr-code/QRCode'
export default {
  name: 'API',
  components: {QRCode},
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">

</style>
