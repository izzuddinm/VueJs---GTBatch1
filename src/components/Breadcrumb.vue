<template>
  <div class="header p-4">
      <a
        class="text-dark"
        href="#"
        style="font-family: Verdana, Geneva, Tahoma, sans-serif"
        >Home /</a
      >
      <a
        class="text-dark"
        href="#"
        style="font-family: Verdana, Geneva, Tahoma, sans-serif"
        >Office Room /</a
      >
      <a
        class="text-dark"
        href="#"
        style="font-family: Verdana, Geneva, Tahoma, sans-serif"
        >Details /</a
      >
  </div>
</template>

<script>
export default {
    name: 'BreadcrumbComponents',
    props: {
        msg: String
    }

}
</script>

<style>

</style>