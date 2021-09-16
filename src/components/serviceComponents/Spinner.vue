<template>
  <div
    v-if="isActivityLoading"
    @click="isloading"
    class="
      justify-center
      items-center
      flex
      overflow-x-hidden overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
    "
  >
    <div class="w-auto my-6 mx-auto max-w-3xl">
      <div class="border-0 rounded-lg shadow-lg w-96 flex flex-col items-center m-2">
        <div
          class="
            border-0
            h-40
            w-40
            z-50
            rounded-lg
            shadow-lg
            flex flex-col
            justify-center
            items-center
            content-center
            p-3
            bgSecondary
          "
        >
          <div className="lds-dual-ring "></div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Spinner",

  props: {
    isActivityLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    isloading() {
      console.log(this.isActivityLoading);
    },
  },
});
</script>
