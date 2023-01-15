import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Components
import { VDataTableGroupHeaderRow } from "./VDataTableGroupHeaderRow.mjs";
import { VDataTableRow } from "./VDataTableRow.mjs"; // Composables
import { useExpanded } from "./composables/expand.mjs";
import { useHeaders } from "./composables/headers.mjs";
import { useLocale } from "../../composables/locale.mjs"; // Utilities
import { defineComponent, useRender } from "../../util/index.mjs"; // Types
export const VDataTableRows = defineComponent({
  name: 'VDataTableRows',
  props: {
    loading: [Boolean, String],
    loadingText: {
      type: String,
      default: '$vuetify.dataIterator.loadingText'
    },
    hideNoData: Boolean,
    items: {
      type: Array,
      default: () => []
    },
    noDataText: {
      type: String,
      default: '$vuetify.noDataText'
    },
    rowHeight: Number
  },
  emits: {
    'click:row': (event, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expanded,
      expand,
      expandOnClick
    } = useExpanded();
    const {
      t
    } = useLocale();
    useRender(() => {
      var _slots$loading, _slots$noData;
      return _createVNode(_Fragment, null, [props.loading ? ((_slots$loading = slots.loading) == null ? void 0 : _slots$loading.call(slots)) ?? _createVNode(VDataTableRow, {
        "class": "v-data-table-rows-no-data",
        "key": "loading"
      }, {
        default: () => [t(props.loadingText)]
      }) : undefined, !props.loading && !props.items.length && !props.hideNoData && (((_slots$noData = slots['no-data']) == null ? void 0 : _slots$noData.call(slots)) ?? _createVNode(VDataTableRow, {
        "class": "v-data-table-rows-no-data",
        "key": "no-data"
      }, {
        default: () => [t(props.noDataText)]
      })), props.items.map((item, index) => {
        var _slots$expandedRow;
        if (item.type === 'group-header') {
          return _createVNode(VDataTableGroupHeaderRow, {
            "key": `group-header_${item.id}`,
            "item": item
          }, slots);
        }
        return _createVNode(_Fragment, null, [_createVNode(VDataTableRow, {
          "key": `item_${item.value}`,
          "onClick": event => {
            if (expandOnClick.value) {
              expand(item, !expanded.value.has(item.value));
            }
            emit('click:row', event, {
              item
            });
          },
          "item": item
        }, slots), expanded.value.has(item.value) && ((_slots$expandedRow = slots['expanded-row']) == null ? void 0 : _slots$expandedRow.call(slots, {
          item,
          columns: columns.value
        }))]);
      })]);
    });
    return {};
  }
});
//# sourceMappingURL=VDataTableRows.mjs.map