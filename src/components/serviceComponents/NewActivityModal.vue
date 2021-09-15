<template>
    <div  
    v-if='show === true'   
    @click="hideModal"     
     class="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div class="w-auto my-6 mx-auto max-w-3xl">
        <div class="border-0 rounded-lg shadow-lg w-96 flex flex-col items-center m-2 content-center">
           <div 
          @click.stop
        :key='randomActivity.key' 
        class="border-0 z-50 rounded-lg shadow-lg flex flex-row justify-between w-full p-3 bgSecondary "
      >
        <div >
          <p class="text-lg italic text md:text-xl m-2 ">{{randomActivity.activity}}</p>         
          <p class=" md:text-xl ml-2 mt-4 flex ">
            Participants:
            <span v-for="counter in numberOfParticipants"
       class="inline-block textMain ml-2"><UserIcon class='w-7 h-7' /></span>
          </p>
          <button
          @click="addToFavorites"
            class="textMain m-2 rounded-full h-11 w-11 flex justify-center items-center content-center hoverBg hoverTextSecondary"
           
          >
           <HeartIcon class='w-7 h-7'/>
          </button>
        </div>
        <div>
          <button @click="hideModal"  class="rounded-full textMain hoverBg hoverTextSecondary" >
            <XIcon class="w-7 h-7 m-2" />
          </button>
        </div>
      </div>
        </div>
      </div>
      <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import {HeartIcon, UserIcon, XIcon } from '@heroicons/vue/solid'

export default defineComponent({
    name: 'NewActivityModal',
    components: {HeartIcon, UserIcon, XIcon},
   
    props:  {
        show: {
        type: Boolean,
        default: true
    },
      randomActivity: {
        type: Object,
        required: true,
      }
    },
    methods: {
        hideModal() {
          this.$emit('openModal', false)  
        },
        addToFavorites() {
          this.$emit('addToFavorites', this.randomActivity)
        }
    },
    computed: {
      numberOfParticipants () {
        let participants = 1
        for(let i=1; i < this.randomActivity.participants; i++) {
          participants += 1;
        }        
        return participants
      }    
    } 
})

  </script>