import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Components
import { VTable } from "../../components/VTable/index.mjs";
import { VDataTableFooter } from "./VDataTableFooter.mjs";
import { VDataTableHeaders } from "./VDataTableHeaders.mjs";
import { VDataTableRows } from "./VDataTableRows.mjs"; // Composables
import { createExpanded, makeDataTableExpandProps } from "./composables/expand.mjs";
import { createHeaders, makeDataTableHeaderProps } from "./composables/headers.mjs";
import { makeDataTableItemProps, useDataTableItems } from "./composables/items.mjs";
import { createSort, makeDataTableSortProps } from "./composables/sort.mjs";
import { createPagination, makeDataTablePaginateProps } from "./composables/paginate.mjs";
import { createSelection, makeDataTableSelectProps } from "./composables/select.mjs";
import { useOptions } from "./composables/options.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utilities
import { provide, toRef } from 'vue';
import { defineComponent, useRender } from "../../util/index.mjs";
import { makeVDataTableProps } from "./VDataTable.mjs"; // Types
export const VDataTableServer = defineComponent({
  name: 'VDataTableServer',
  props: {
    color: String,
    loading: [Boolean, String],
    loadingText: {
      type: String,
      default: '$vuetify.dataIterator.loadingText'
    },
    itemsLength: [Number, String],
    ...makeVDataTableProps(),
    ...makeDataTableExpandProps(),
    ...makeDataTableHeaderProps(),
    ...makeDataTableItemProps(),
    ...makeDataTableSelectProps(),
    ...makeDataTableSortProps(),
    ...makeDataTablePaginateProps()
  },
  emits: {
    'update:modelValue': value => true,
    'update:page': page => true,
    'update:itemsPerPage': page => true,
    'update:sortBy': sortBy => true,
    'update:options': options => true,
    'update:expanded': options => true,
    'click:row': (event, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    createExpanded(props);
    const {
      columns
    } = createHeaders(props, {
      showSelect: toRef(props, 'showSelect'),
      showExpand: toRef(props, 'showExpand')
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      sortBy,
      toggleSort
    } = createSort(props);
    const {
      page,
      itemsPerPage,
      startIndex,
      stopIndex,
      pageCount
    } = createPagination(props, items);
    createSelection(props, items);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      startIndex,
      stopIndex,
      pageCount
    });
    provide('v-data-table', {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, 'hideNoData'),
        noDataText: toRef(props, 'noDataText'),
        loading: toRef(props, 'loading'),
        loadingText: toRef(props, 'loadingText')
      }
    });
    useRender(() => _createVNode(VTable, {
      "class": ['v-data-table', {
        'v-data-table--loading': props.loading
      }],
      "fixedHeader": props.fixedHeader,
      "fixedFooter": props.fixedFooter,
      "height": props.height
    }, {
      top: slots.top,
      default: slots.default ? slots.default() : () => {
        var _slots$thead, _slots$tbody, _slots$tfoot;
        return _createVNode(_Fragment, null, [_createVNode("thead", {
          "class": "v-data-table__thead",
          "role": "rowgroup"
        }, [slots.headers ? slots.headers() : _createVNode(VDataTableHeaders, {
          "sticky": props.fixedHeader,
          "loading": props.loading,
          "color": props.color
        }, null)]), (_slots$thead = slots.thead) == null ? void 0 : _slots$thead.call(slots), _createVNode("tbody", {
          "class": "v-data-table__tbody",
          "role": "rowgroup"
        }, [slots.body ? slots.body() : _createVNode(VDataTableRows, {
          "items": items.value,
          "onClick:row": (event, value) => emit('click:row', event, value)
        }, slots)]), (_slots$tbody = slots.tbody) == null ? void 0 : _slots$tbody.call(slots), (_slots$tfoot = slots.tfoot) == null ? void 0 : _slots$tfoot.call(slots)]);
      },
      bottom: slots.bottom ? slots.bottom() : () => _createVNode(VDataTableFooter, null, {
        prepend: slots['footer.prepend']
      })
    }));
  }
});
//# sourceMappingURL=VDataTableServer.mjs.map