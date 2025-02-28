<template>
    <div :class="['social-icon', { 'bg-black text-white': isBlack, 'bg-white text-black': !isBlack }]">
        <i :class="`fa-brands fa-${icon}`" :style="iconStyle"></i>
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
    width: 40px; /* Adjust size */
    height: 40px; /* Adjust size */
    border-radius: 50%;
    transition: background-color 0.3s;
}
.social-icon:hover {
    background-color: #00C7F9; /* Change hover color as needed */
}
</style>