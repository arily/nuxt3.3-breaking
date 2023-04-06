import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/Shared/git/nuxt3.3-breaking/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}