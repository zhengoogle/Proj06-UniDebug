<template>
  <div class="zz-page">
    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'1.QRCode ts'">
    </zz-border-box>
    <qr-code></qr-code>
  </div>
</template>

<script>
import QrCode from '../debug/api/qr-code/QrCode'
export default {
  name: 'API',
  components: {QrCode},
  data () {
    return {
      data1: 10
    }
  }
}
</script>

<style scoped lang="scss">

</style>
