<template>
  <div>
    <border-box></border-box>
  </div>
</template>

<script>
import BorderBox from '../debug/ui/custom/border-box/BorderBox'
export default {
  name: 'UI',
  components: {BorderBox},
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
