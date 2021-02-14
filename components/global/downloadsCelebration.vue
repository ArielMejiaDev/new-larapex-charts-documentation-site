<template>
  <div class="flex p-2 text-gray-600 bg-gray-200 rounded shadow">
    <div>🎉 🎉 🎉</div>
    <div class="ml-4">{{ text }}!!!</div>
  </div>
</template>

<script>
export default {
    props: {text:String}
}
</script>