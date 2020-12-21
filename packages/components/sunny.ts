import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M512 704a192 192 0 100-384 192 192 0 000 384zm0 64a256 256 0 110-512 256 256 0 010 512zM512 64a32 32 0 0132 32v64a32 32 0 01-64 0V96a32 32 0 0132-32zm0 768a32 32 0 0132 32v64a32 32 0 11-64 0v-64a32 32 0 0132-32zM195.2 195.2a32 32 0 0145.248 0l45.248 45.248a32 32 0 11-45.248 45.248L195.2 240.448a32 32 0 010-45.248zm543.104 543.104a32 32 0 0145.248 0l45.248 45.248a32 32 0 01-45.248 45.248l-45.248-45.248a32 32 0 010-45.248zM64 512a32 32 0 0132-32h64a32 32 0 010 64H96a32 32 0 01-32-32zm768 0a32 32 0 0132-32h64a32 32 0 110 64h-64a32 32 0 01-32-32zM195.2 828.8a32 32 0 010-45.248l45.248-45.248a32 32 0 0145.248 45.248L240.448 828.8a32 32 0 01-45.248 0zm543.104-543.104a32 32 0 010-45.248l45.248-45.248a32 32 0 0145.248 45.248l-45.248 45.248a32 32 0 01-45.248 0z'

const Sunny = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Sunny.displayName = 'Sunny';

export default Sunny;
