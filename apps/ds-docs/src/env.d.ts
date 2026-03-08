/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.astro' {
  type Props = Record<string, any>;
  const Component: (props: Props) => any;
  export default Component;
}
