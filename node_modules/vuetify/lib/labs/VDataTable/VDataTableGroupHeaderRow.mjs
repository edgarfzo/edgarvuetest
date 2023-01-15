import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VCheckboxBtn } from "../../components/VCheckbox/index.mjs";
import { VDataTableColumn } from "./VDataTableColumn.mjs"; // Composables
import { useHeaders } from "./composables/headers.mjs";
import { useSelection } from "./composables/select.mjs";
import { useGroupBy } from "./composables/group.mjs"; // Utilities
import { computed } from 'vue';
import { defineComponent } from "../../util/index.mjs"; // Types
export const VDataTableGroupHeaderRow = defineComponent({
  name: 'VDataTableGroupHeaderRow',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      opened,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => _createVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        '--v-data-table-group-header-row-depth': props.item.depth
      }
    }, [columns.value.map(column => {
      if (column.key === 'data-table-group') {
        var _slots$dataTableGro;
        const icon = opened.value.has(props.item.id) ? '$expand' : '$next';
        const onClick = () => toggleGroup(props.item.id);
        return ((_slots$dataTableGro = slots['data-table-group']) == null ? void 0 : _slots$dataTableGro.call(slots, {
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        })) ?? _createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [_createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), _createVNode("span", null, [props.item.value]), _createVNode("span", null, [_createTextVNode("("), rows.value.length, _createTextVNode(")")])]
        });
      }
      if (column.key === 'data-table-select') {
        var _slots$dataTableSel;
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = v => select(rows.value, v);
        return ((_slots$dataTableSel = slots['data-table-select']) == null ? void 0 : _slots$dataTableSel.call(slots, {
          props: {
            modelValue,
            indeterminate,
            'onUpdate:modelValue': selectGroup
          }
        })) ?? _createVNode("td", null, [_createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return _createVNode("td", null, null);
    })]);
  }
});
//# sourceMappingURL=VDataTableGroupHeaderRow.mjs.map