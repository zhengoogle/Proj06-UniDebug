<template>
    <div>
        <!-- ------------------------- divider ------------------------ -->
        <zz-border-box :height="'30vw'"
                       :title="'1.UNI-扫码'">
        </zz-border-box>
    </div>
</template>

<script>
export default {
  name: 'QRCode',
  data () {
    return {
      data1: 10
    }
  },
  onLaunch: function () {
    console.log('App Launch')
    uni.scanCode({
      success: function (res) {
        console.log('条码类型：' + res.scanType)
        console.log('条码内容：' + res.result)
      }
    })
  }
}
</script>

<style>

</style>
