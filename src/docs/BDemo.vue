<template>
  <div class="zz-page">

    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'"
                   :title="'2.'">
    </zz-border-box>

    <!-- ------------------------- divider ------------------------ -->
    <zz-border-box :height="'30vw'" :marginBottom="'5vw'" :borderWidth="'1vw'"
                   :borderColorMode="'random'"
                   :title="'1.'">
      <div class="bd-ts1">
      </div>
    </zz-border-box>
  </div>
</template>

<script>
/**
 * H5工程@HTML/label
 * ---
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see tsDemo.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see tsDemo.useScene01
 *
 * Issue
 * i01.问题场景01
 * @see tsDemo.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * ---优质博客&教程
 * ---框架
 * ---归档
 *
 * Router
 * --- http://localhost:8800/#/ts/demo1
 */

const tsDemo = {
  /**
   * API场景01
   */
  tsScene01 () {
    console.warn('tsScene01')
  },
  /**
   * 使用场景01
   */
  useScene01 () {
    console.warn('useScene01')
  },
  /**
   * 问题场景01
   */
  ivScene01 () {
    console.warn('ivScene01')
  }
}

export default {
  name: 'tsDemo',
  components: {},
  methods: {
    ...tsDemo
  },
  created () {
  },
  mounted () {
    this.tsScene01()
    // this.useScene01()
    // this.ivScene01()
  }
}
</script>

<style scoped lang="scss">
  .bd-ts1 {
  }
</style>
