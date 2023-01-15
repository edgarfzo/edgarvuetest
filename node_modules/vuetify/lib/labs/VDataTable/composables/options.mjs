// Utilities
import { computed, watch } from 'vue';
import { deepEqual, getCurrentInstance } from "../../../util/index.mjs"; // Types
export function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    startIndex,
    stopIndex,
    pageCount
  } = _ref;
  const vm = getCurrentInstance('VDataTable');
  const options = computed(() => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    startIndex: startIndex.value,
    stopIndex: stopIndex.value,
    pageCount: pageCount.value,
    sortBy: sortBy.value
  }));

  // Reset page when sorting changes
  watch(sortBy, () => {
    page.value = 1;
  }, {
    deep: true
  });

  // Reset page when items-per-page changes
  watch(itemsPerPage, () => {
    page.value = 1;
  });
  let oldOptions = null;
  watch(options, () => {
    if (deepEqual(oldOptions, options.value)) return;
    vm.emit('update:options', options.value);
    oldOptions = options.value;
  }, {
    deep: true,
    immediate: true
  });
}
//# sourceMappingURL=options.mjs.map