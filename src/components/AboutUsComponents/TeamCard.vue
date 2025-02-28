<template>
    <div class="photoContainer w-56 rounded-md shadow-md shadow-gray-400 relative group lg:w-1/2 lg:h-96 h-60">
        <div>
            <img :src="imgSrc" alt="" class="w-full rounded-md h-44 lg:h-80" />
            <div class="hoverContainer absolute inset-0 rounded-md opacity-0 group-hover:opacity-75 flex items-center justify-center transition-opacity h-44 lg:h-80">
                <div class="flex px-1 lg:w-80 lg:justify-between">
                    <SocialIcon icon="facebook" />
                    <SocialIcon icon="twitter" />
                    <SocialIcon icon="linkedin" isBlack />
                    <SocialIcon icon="instagram" />
                </div>
            </div>
        </div>
        <div class="pl-3 text-sm lg:mt-2 mt-2">
            <h1>{{ name }} <br />
                <span class="span">{{ role }}</span>
            </h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import SocialIcon from '@/components/AboutUsComponents/SocialIcon.vue'; 

export default defineComponent({
    name: 'TeamCard',
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        }
    },
    components: {
        SocialIcon
    }
});
</script>

<style>
.photoContainer {
    background-color: #debcf7d3;
}
.span {
    color: #5200e0;
}
.hoverContainer {
    background-color: #00C7F9;
}
</style>