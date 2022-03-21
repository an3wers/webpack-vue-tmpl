<template>
    <div class="wrapper">
        {{ test }}
    </div>
</template>
<script>
import {ref} from 'vue'

export default {
    setup() {
        const test = ref('test my app')

        return {
            test
        }
    },
}
</script>