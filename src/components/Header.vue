<template>
  <header class="sticky top-0 z-40 w-full flex bgMain md:h-16 shadow-md">
    <div class="w-3/4 p-2 my-auto ml-5 text-lg md:text-2xl">
      <h5 class="font-medium">I&apos;m Bored...</h5>
    </div>
    <div class="w-1/4 flex justify-end">
      <button title="Favorites" class="p-2 hoverTextSecondary has-tooltip">
        <HeartIcon class="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button class="p-2 hoverTextSecondary" title="History">
        <ClockIcon class="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button class="p-2 hoverTextSecondary" title="Send new activity">
        <MailIcon class="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button class="p-2 mr-5 hoverTextSecondary" title="Jokester">
        <EmojiHappyIcon class="h-6 w-6 md:h-8 md:w-8" />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ClockIcon, MailIcon, EmojiHappyIcon, HeartIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "Header",
  components: { ClockIcon, MailIcon, EmojiHappyIcon, HeartIcon },
});
</script>
