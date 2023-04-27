import DefaultTheme from "vitepress/theme";
import { h } from 'vue';
import vitepressNprogress from 'vitepress-plugin-nprogress';
import 'vitepress-plugin-nprogress/lib/css/index.css';
import './style/index.css';
import AnimateTitle from '../components/AnimateTitle.vue';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info': () => h(AnimateTitle)
    })
  },
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx);
  }
}