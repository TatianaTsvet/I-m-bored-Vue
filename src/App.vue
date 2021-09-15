<template>
  <div className=" mx-auto p-1">
    <Header />
    <Cards @openModal="openModal" @getActivity="getActivity" />
    <NewActivityModal
      @openModal="openModal"
      v-model:show="modalVisible"
      v-model:randomActivity="randomActivity"
      @addToFavorites="addToFavorites"
    />
    <!-- <Spinner/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "./components/Header.vue";
import Cards from "./components/cardsComponent/Cards.vue";
import NewActivityModal from "./components/serviceComponents/NewActivityModal.vue";
import Spinner from "./components/serviceComponents/Spinner.vue";
import { IActivity } from "./interfaces/interfaces";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Cards,
    NewActivityModal,

    
    Spinner,
  },
  data() {
    return {
      modalVisible: false,
      randomActivity: {},
      likedActivity: JSON.parse(localStorage.getItem("favoritesList") ?? "[]"),
      historyActivity: JSON.parse(localStorage.getItem("historyList") ?? "[]"),
    };
  },
  methods: {
    openModal(modal: boolean) {
      this.modalVisible = modal;
    },
    filterActivity(stateActivity: IActivity[], activityKey: number) {
      stateActivity.filter((item) => item.key !== activityKey);
    },
    findActivity(stateActivity: IActivity[], activityKey: number): void {
      stateActivity.find((item) => item.key === activityKey);
    },

    getActivity(newActivity: IActivity) {
      const randomActivity = { ...newActivity, liked: false };
      const sameHistoryActivity = !!this.findActivity(
        this.historyActivity,
        newActivity.key
      );
      this.historyActivity = sameHistoryActivity
        ? this.historyActivity
        : [...this.historyActivity, randomActivity];
      this.randomActivity = randomActivity;

      localStorage.setItem("historyList", JSON.stringify(this.historyActivity));
    },
    addToFavorites(favoriteActivity: IActivity) {
      const likeActivity = { ...favoriteActivity, liked: true };
      //  const sameActivity = !!this.findActivity(this.likedActivity, favoriteActivity.key);
      const sameActivity = !!this.likedActivity.find(
        (item: { key: number }) => item.key === favoriteActivity.key
      );
      this.likedActivity = sameActivity
        ? this.likedActivity
        : [...this.likedActivity, likeActivity];

      this.historyActivity = this.historyActivity.map(
        (item: { key: number }) => {
          if (item.key === favoriteActivity.key) {
            return { ...item, liked: true };
          } else {
            return item;
          }
        }
      );
      localStorage.setItem("historyList", JSON.stringify(this.historyActivity));
      localStorage.setItem("favoritesList", JSON.stringify(this.likedActivity));
    },
  },
});
</script>
