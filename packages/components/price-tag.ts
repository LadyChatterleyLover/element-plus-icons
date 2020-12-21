import { h } from 'vue'
import Icon from '../icon'

import type { FunctionalComponent } from 'vue'
const d = 'M224 318.336V896h576V318.336L552.512 115.84a64 64 0 00-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 01864 303.168V928a32 32 0 01-32 32H192a32 32 0 01-32-32V303.168a32 32 0 0111.712-24.768l259.2-212.096a128 128 0 01162.112 0z'

const PriceTag = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

PriceTag.displayName = 'PriceTag';

export default PriceTag;
