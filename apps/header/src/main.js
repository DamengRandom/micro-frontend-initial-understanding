import { createApp } from 'vue';
import Header from './components/Header.vue';

export function mount(el) {
  createApp(Header).mount(el);
}
