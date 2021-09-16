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
      this.$emit("isLoading", true);
      const newType = title.replace(" ", "");
      try {
        axios.get(`https://www.boredapi.com/api/activity?${newType}`).then((response) => {
          this.$emit("getActivity", response.data);
        });
      } catch (e) {
        console.log(e);
      }

      setTimeout(() => {
        this.$emit("isLoading", false);
        this.$emit("openModal", true);
      }, 2000);
    },
  },
});
</script>
