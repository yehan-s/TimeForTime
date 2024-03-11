import { createApp } from "vue";
// tailwindcss
import "./style/tailwind.css";
// 引入清除默认样式
import "@/style/reset.scss";
import store from "@/store";
import router from "@/router";
import App from "./App.vue";

createApp(App).use(router).use(store).mount("#app");
