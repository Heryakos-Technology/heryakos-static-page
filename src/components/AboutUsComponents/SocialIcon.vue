<template>
    <div :class="[ { 'bg-black text-white': isBlack, 'bg-white text-black': !isBlack }]" class="flex align-middle justify-center rounded-full transition duration-300 ease-in-out w-8 h-8 mr-1 items-center lg:w-16 lg:h-16">
        <i :class="`fa-brands fa-${icon}`"  class="text-xl lg:text-3xl"></i>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SocialIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        isBlack: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        iconStyle() {
            return {
                fontSize: '2rem',
                margin: '0.25rem' 
            };
        }
    }
});
</script>

<style scoped>
.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px; 
    border-radius: 50%;
    transition: background-color 0.3s;
}
.social-icon:hover {
    background-color: #00C7F9; /* Change hover color as needed */
}
</style>