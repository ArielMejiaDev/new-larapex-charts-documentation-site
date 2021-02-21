<template>
  <div>
    <!-- Video -->
    <div class="flex items-center text-gray-900 my-4 py-4 border-t-2 border-b-2 border-gray-300">
        <span :class="`px-2 py-1 ${badgeColors} font-semibold rounded-full text-sm mr-2`">
            {{ theme }}
        </span>
        <div class="font-semibold">
            {{ title }}
        </div>
    </div>

    <iframe class="shadow-xl rounded-lg mb-20" style="width: 100%;" height="315" :src="`https://www.youtube.com/embed/${video}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <!-- End Video -->
  </div>
</template>

<script>
export default {
    props: {
        theme: String,
        title: String,
        video: String
    },
    computed: {
        badgeColors() {
            if(this.theme === 'Blade') {
                return 'bg-red-200 text-red-700';
            }
            return 'bg-green-200 text-green-700';
        }
    }
}
</script>