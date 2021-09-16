<template>
  <main className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
    <div v-for="item in pictures" :key="item.title">
      <img
        class="h-40 md:h-52 w-full object-cover"
        :alt="`${item.title}`"
        :src="`./images/${item.src}`"
      />
      <div
        class="
          inset-x-0
          bottom-0
          h-16
          flex
          items-center
          justify-between
          bg-gray-800 bg-opacity-60
          px-2
        "
      >
        <div class="textSecondary">
          <h4>{{ item.title.toUpperCase() }}</h4>
          <h6>{{ item.subtitle }}</h6>
        </div>
        <button
          @click="getActivity(item.title)"
          class="
            justify-self-end
            flex flex-wrap
            content-center
            p-3
            rounded-full
            textYellow
            bg-yellow-100
            hover:bg-yellow-200 hover:text-yellow-900
          "
        >
          <component class="w-6 h-6" :is="item.icon" />
        </button>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import picturesData from "../../assets/picturesData";
import {
  AcademicCapIcon,
  SunIcon,
  UserGroupIcon,
  BeakerIcon,
  GiftIcon,
  CakeIcon,
  MoonIcon,
  MusicNoteIcon,
  DesktopComputerIcon,
  ColorSwatchIcon,
} from "@heroicons/vue/outline";

export default defineComponent({
  name: "CardList",
  components: {
    AcademicCapIcon,
    SunIcon,
    UserGroupIcon,
    BeakerIcon,
    GiftIcon,
    CakeIcon,
    MoonIcon,
    MusicNoteIcon,
    DesktopComputerIcon,
    ColorSwatchIcon,
  },
  data() {
    return {
      pictures: picturesData,
    };
  },
  methods: {
    getActivity(title: string) {
      this.$emit("fetchActivity", title);
    },
  },
});
</script>
