import { defineStore } from 'pinia';

export const useAlgoliaStore = defineStore('algolia', {
  state: () => ({ isExpanded: false }),
  getters: {
    isActive: (state) => state.isExpanded
  },
  actions: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
    open() {
      this.isExpanded = true;
    },
    close() {
      this.isExpanded = false;
    }
  }
});
