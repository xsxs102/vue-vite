import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 路由
import { store } from "./store"; // vuex
import "styles/index.scss"; // 引入样式

const app = createApp(App);

app.use(store).use(router).mount("#app");
