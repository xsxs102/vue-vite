<script lang="jsx">
import { ref } from "vue";
export default {
  setup(props) {
    const count = ref(0);
    const onclick = () => {
      count.value++;
    };
    return () => (
      <div style={{ padding: "10px" }}>
        <div>VueJsxComp</div>
        <div onClick={onclick} style={{ cursor: "pointer" }}>
          {count.value}
        </div>
      </div>
    );
  },
};
</script>

<style scoped></style>
