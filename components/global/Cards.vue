<template>
<div class="flex flex-col lg:flex-row">

    <div class="text-sm font-semibold flex items-center p-6 shadow rounded bg-gradient-to-r from-yellow-400 to-pink-500 text-white w-full lg:w-1/2 lg:mr-1 hover:shadow-lg my-2">

        <div class="text-white mr-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
        </div>

        <div>{{ texts[language].first }}</div>

    </div>

    <div class="text-sm font-semibold flex items-center p-6 shadow rounded bg-gradient-to-r from-green-400 to-blue-500 text-white w-full lg:w-1/2 lg:ml-1 hover:shadow-lg my-2">

        <div class="text-white mr-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>

        <div>{{ texts[language].second }}</div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            texts: {
                english: {
                    first: 'A fluent api for apex chart library.', 
                    second: 'Interact with Facade or the class directly.'
                },
                spanish: {
                    first: 'Una API fluida para manipular la librería apex chart JS.', 
                    second: 'Interactua con el Facade o la clase del paquete directamente.'
                },

            }
        }
    },
    props: {
        language: String
    }
}
</script>