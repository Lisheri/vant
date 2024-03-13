import { defineComponent } from 'vue';
import Tab from '../../Tab';
export default defineComponent({
  name: 'SubTab',
  props: {
    title: {
      type: String,
      default: '',
    },
    id: {
      type: [Number, String],
      default: 1,
    },
    aaaaaa: {
      type: String,
      default: 'aaaaa',
    },
  },
  setup(props, { slots }) {
    return () => {
      const { id } = props;

      return (
        <Tab
          class={'brand-sub-tab'}
          title-class={`data-id-${id}`}
          title={props.title}
          name={id}
          key={id}
        >
          {slots.default?.()}
        </Tab>
      );
    };
  },
});
