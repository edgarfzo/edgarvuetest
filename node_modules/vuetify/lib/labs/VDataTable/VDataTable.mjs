import { createVNode as _createVNode, resolveDirective as _resolveDirective, Fragment as _Fragment } from "vue";
// Styles
import "./VDataTable.css";

// Components
import { VTable } from "../../components/VTable/index.mjs";
import { VDataTableHeaders } from "./VDataTableHeaders.mjs";
import { VDataTableRows } from "./VDataTableRows.mjs";
import { VDataTableFooter } from "./VDataTableFooter.mjs"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { makeDataTableItemProps, useDataTableItems } from "./composables/items.mjs";
import { createHeaders, makeDataTableHeaderProps } from "./composables/headers.mjs";
import { createSort, makeDataTableSortProps, useSortedItems } from "./composables/sort.mjs";
import { createGroupBy, makeDataTableGroupProps, useGroupedItems } from "./composables/group.mjs";
import { createPagination, makeDataTablePaginateProps, usePaginatedItems } from "./composables/paginate.mjs";
import { createSelection, makeDataTableSelectProps } from "./composables/select.mjs";
import { createExpanded, makeDataTableExpandProps } from "./composables/expand.mjs";
import { useOptions } from "./composables/options.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { computed, toRef } from 'vue';
import { defineComponent, propsFactory, useRender } from "../../util/index.mjs";
import { makeFilterProps, useFilter } from "../../composables/filter.mjs"; // Types
export const makeVDataTableProps = propsFactory({
  ...makeDataTableItemProps(),
  ...makeDataTableHeaderProps(),
  hideNoData: Boolean,
  noDataText: {
    type: String,
    default: '$vuetify.noDataText'
  },
  height: [String, Number],
  width: [String, Number],
  fixedHeader: Boolean,
  fixedFooter: Boolean
}, 'v-data-table');
export const VDataTable = defineComponent({
  name: 'VDataTable',
  props: {
    search: String,
    ...makeVDataTableProps(),
    ...makeDataTableExpandProps(),
    ...makeDataTableGroupProps(),
    ...makeDataTableSelectProps(),
    ...makeDataTableSortProps(),
    ...makeDataTablePaginateProps(),
    ...makeFilterProps()
  },
  emits: {
    'update:modelValue': value => true,
    'update:page': value => true,
    'update:itemsPerPage': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:groupBy': value => true,
    'update:expanded': value => true,
    'click:row': (event, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const groupBy = useProxiedModel(props, 'groupBy');
    const {
      columns
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, 'showSelect'),
      showExpand: toRef(props, 'showExpand')
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      filteredItems
    } = useFilter(props, items, toRef(props, 'search'));
    const {
      sortBy
    } = createSort(props);
    const {
      sortByWithGroups,
      opened,
      extractRows
    } = createGroupBy(props, groupBy, sortBy);
    const {
      sortedItems
    } = useSortedItems(filteredItems, sortByWithGroups, columns);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const {
      page,
      itemsPerPage,
      startIndex,
      stopIndex,
      pageCount
    } = createPagination(props, flatItems);
    const {
      paginatedItems
    } = usePaginatedItems(flatItems, startIndex, stopIndex, itemsPerPage);
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    createSelection(props, paginatedItemsWithoutGroups);
    createExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      pageCount,
      startIndex,
      stopIndex
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, 'hideNoData'),
        noDataText: toRef(props, 'noDataText')
      }
    });
    useRender(() => _createVNode(VTable, {
      "class": ['v-data-table', {
        'v-data-table--show-select': props.showSelect
      }],
      "fixedHeader": props.fixedHeader,
      "fixedFooter": props.fixedFooter,
      "height": props.height
    }, {
      top: slots.top,
      default: slots.default ? slots.default() : () => {
        var _slots$colgroup, _slots$thead, _slots$tbody, _slots$tfoot;
        return _createVNode(_Fragment, null, [(_slots$colgroup = slots.colgroup) == null ? void 0 : _slots$colgroup.call(slots, {
          columns
        }), _createVNode("thead", null, [slots.headers ? slots.headers() : _createVNode(VDataTableHeaders, {
          "sticky": props.fixedHeader,
          "multiSort": props.multiSort
        }, slots)]), (_slots$thead = slots.thead) == null ? void 0 : _slots$thead.call(slots), _createVNode("tbody", null, [slots.body ? slots.body() : _createVNode(VDataTableRows, {
          "items": paginatedItems.value,
          "onClick:row": (event, value) => emit('click:row', event, value)
        }, slots)]), (_slots$tbody = slots.tbody) == null ? void 0 : _slots$tbody.call(slots), (_slots$tfoot = slots.tfoot) == null ? void 0 : _slots$tfoot.call(slots)]);
      },
      bottom: slots.bottom ? slots.bottom() : () => _createVNode(VDataTableFooter, null, {
        prepend: slots['footer.prepend']
      })
    }));
    return {};
  }
});
//# sourceMappingURL=VDataTable.mjs.map