<template>
  <div>
  </div>
</template>

<script>
/**
 * UNI@build v3 engine
 * --- v3版本使用weex + vue技术，性能大幅提升
 * --- 安卓核心基座越10M，VUE部分语法不支持，非标准HTML开发
 *
 * scene
 * #s1.
 *
 * 场景归类
 * API
 * s01.API场景01
 * @see tsUniV3.tsScene01
 *
 * USE
 * u01.使用场景01
 * @see tsUniV3.useScene01
 *
 * Issue
 * i01.问题场景01
 * @see tsUniV3.ivScene01
 *
 * issue
 * #1.NG
 *
 * ref:
 * ---原生API
 * --- uni-app V3版本上线，App端性能、功能大幅提升
 * --- https://ask.dcloud.net.cn/article/36599
 * ---优质博客&教程
 * ---框架
 * ---问题
 * --- App平台 v3 模式暂不支持在 js 文件中引用
 * --- https://ask.dcloud.net.cn/question/92697
 * ---归档
 *
 * Router
 * --- http://localhost:8800/#/ts/demo1
 */

const tsUniV3 = {
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
  name: 'UniV3',
  data () {
    return {
      data1: 10
    }
  },
  methods: {
    ...tsUniV3
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

</style>
