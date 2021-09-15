<template>
  <div>
    <CardList @openModal="openModal" @fetchActivity="fetchActivity" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import CardList from "./CardList.vue";

export default defineComponent({
  name: "Cards",
  components: { CardList },
  methods: {
    openModal(modal: boolean) {
      this.$emit("openModal", true);
    },
    async fetchActivity(title: string) {
      const newType = title.replace(" ", "");
      try {
        await axios
          .get(`https://www.boredapi.com/api/activity?${newType}`)
          .then((response) => {
            this.$emit("getActivity", response.data);
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>
