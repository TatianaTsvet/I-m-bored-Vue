<template>
  
    <CardList @fetchActivity="fetchActivity" />
  
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Spinner from "../serviceComponents/Spinner.vue";
import axios from "axios";
import CardList from "./CardList.vue";

export default defineComponent({
  name: "Cards",
  components: { CardList, Spinner },
  data() {
    return {};
  },
  methods: {
    async fetchActivity(title: string) {
      const newType = title.replace(" ", "");
      try {
        this.$emit("isLoading", true);
        setTimeout(async () => {
          await axios
            .get(`https://www.boredapi.com/api/activity?${newType}`)
            .then((response) => {
              this.$emit("getActivity", response.data);
            });
        }, 20000);
       
      } catch (e) {
        console.log(e);
      } finally {
        this.$emit("isLoading", false);
        this.$emit("openModal", true);
      }
    },
  },
});
</script>
