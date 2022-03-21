import {createApp} from 'vue'
import App from './App.vue'
import './scss/main.scss'

createApp(App).mount("#app")


const test = (val) => {
    console.log(val)
}

test('test')