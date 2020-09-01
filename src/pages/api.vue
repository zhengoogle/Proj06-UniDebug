<template>
  <div class="zz-page">
    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'1.QRCode ts'">
    </zz-border-box>
    <QRCode></QRCode>
  </div>
</template>

<script>
import QRCode from '../debug/api/qr-code/QRCode'
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
