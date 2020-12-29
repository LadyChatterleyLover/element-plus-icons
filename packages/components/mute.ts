import { h } from 'vue'
import Icon from '../icon/icon'

import type { FunctionalComponent } from 'vue'
const d = 'M412.16 592.128l-45.44 45.44A191.232 191.232 0 01320 512V256a192 192 0 11384 0v44.352l-64 64V256a128 128 0 10-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 00640 512v-57.152l64-64V512a192 192 0 01-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 00480 768h64a224 224 0 00224-224v-32a32 32 0 1164 0v32a288 288 0 01-288 288v64h64a32 32 0 110 64H416a32 32 0 110-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 01192 544v-32a32 32 0 0164 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z'

const Mute = function (props: any) {
  return h(
    Icon,
    props,
    {
      default: () => h('path', { d }, null),
    },
  );
} as FunctionalComponent;

Mute.displayName = 'Mute';

export default Mute;

