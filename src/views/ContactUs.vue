<script setup>
import { defineComponent } from 'vue';
import { onMounted } from 'vue';

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>
<template>
    <div class="mb-20 lg:w-2/3 lg:mx-auto  md:w-4/5 md:mx-auto lg:pt-10">

        <div class="mt-20 md:">
            <img src="/threeProples.png" alt="" class="max-w-full max-h-full mx-auto lg:w-1/3">
        </div>
        <div class="mt-8 ">
            <h1 class="text-center text-4xl lg:text-3xl">Need a reply fast?</h1>
            <h1 class="text-center text-4xl mt-10">Let's <span class="talk">talk!</span> </h1>
            <p class="text-xl  mt-10 font-light w-5/6 mx-auto leading-9 lg:w-2/3 lg:mx-auto md:w-120 md:mx-auto">Share
                your project requirements
                here or send us an email at
                info@orizon.com we will follow up
                in <span class="font-bold">24 hrs</span> </p>
        </div>
        <div class="ml-8 mt-10 text-xl font-light lg:w-3/4 lg:mx-auto md:mx-auto">
            <div>
                <div class="">
                    <p class="text-2xl lg:text-xl">Name</p>
                </div>
                <div class="mt-4">
                    <input type="text" placeholder="Don from Earth,Inc."
                        class="input  focus:outline-none w-13/14  py-6 pl-6 rounded-xl placeholder:text-gray-500  placeholder:text-xl lg:w-7/8 lg:h-20"
                        v-model="formData.name" required>

                </div>
            </div>
            <div class="hidden lg:block mt-16">
                <div class="flex">
                    <div class="w-3/4">
                        <div class="">
                            <p class="text-2xl lg:text-xl">Email</p>
                        </div>
                        <div class="mt-4 ">
                            <input type="text" placeholder="don@norman.me"
                                class="input  focus:outline-none   border-pink-200 py-6 pl-6 rounded-xl placeholder:text-gray-500  lg:h-20 placeholder:text-xl w-3/4 "
                                v-model="formData.email" required>
                        </div>
                    </div>
                    <div class="w-3/4">
                        <div class="">
                            <p class="text-2xl lg:text-xl">Phone</p>
                        </div>
                        <div class="mt-4 ">
                            <input type="text" placeholder="(555) 555-555"
                                class="lg:h-20 input  focus:outline-none border-pink-200 py-6 pl-6 rounded-xl placeholder:text-gray-500  placeholder:text-xl w-3/4"
                                v-model="formData.phone" required>
                        </div>
                    </div>

                </div>

            </div>
            <div class="mt-16 lg:hidden">
                <div>
                    <p class="text-2xl">Email </p>
                </div>
                <div class="mt-4">
                    <input type="text" placeholder="don@norman.me"
                        class="lg:h-20 input  focus:outline-none w-13/14 border-pink-200 py-6 pl-6 rounded-xl placeholder:text-gray-500  placeholder:text-xl"
                        v-model="formData.email" required>
                </div>
            </div>
            <div class="mt-16 lg:hidden">
                <div>
                    <p class="text-2xl">Phone Number </p>
                </div>
                <div class="mt-4">
                    <input type="text" placeholder="(555) 555-555"
                        class="lg:h-20 input  focus:outline-none w-13/14 border-pink-200 py-6 pl-6 rounded-xl placeholder:text-gray-500  placeholder:text-xl"
                        v-model="formData.phone" required>
                </div>
            </div>
            <div class="mt-16">
                <div>
                    <p class="text-2xl lg:text-xl">Details </p>
                </div>
                <div class="mt-4 lg:hidden">
                    <textarea cols="24" rows="6" type="text"
                        placeholder="We need to launch Earth’s new UI and improve usability on key user flows such as climate, health and orbital escape velocity..."
                        class="input  focus:outline-none  border-pink-200 py-6 w-13/14 pl-6 pr-2 pt-12 pb-1 rounded-xl placeholder:text-gray-500  placeholder:text-xl "
                        style="white-space: pre-line;" v-model="formData.detail" required />
                </div>
                <div class="mt-4 hidden lg:block">
                    <textarea cols="49" rows="5" type="text"
                        placeholder="We need to launch Earth’s new UI and improve usability on key user flows such as climate, health and orbital escape velocity..."
                        class="input  focus:outline-none border-pink-200 py-6 pl-6 pr-2 lg:pt-16 lg:w-7/8 lg:pb-0 pt-12 pb-1 rounded-xl placeholder:text-gray-500  placeholder:text-xl "
                        style="white-space: pre-line;" v-model="formData.detail" required />
                </div>
            </div>
            <div class="mt-16">
                <div>
                    <p class="text-2xl lg:text-xl">Subject </p>
                </div>
                <div class="mt-4">
                    <input type="text" placeholder="enter your subject here."
                        class="lg:h-20 input  w-13/14 border-pink-200 py-6 pl-6 rounded-xl focus:outline-none placeholder:text-gray-500  placeholder:text-xl lg:w-7/8"
                        v-model="formData.subject" required>
                </div>
            </div>
            <div class="mt-16 ml-40  justify-end">
                <button v-if="!status"
                    class=" button text-white py-2 px-5 w-10/11 -ml-3   rounded-lg text-2xl lg:rounded-3xl lg:text-lg lg:px-8 lg:ml-40 lg:w-1/2"
                    @click="sendEmail">Send Message</button>

            </div>
            <div v-if="status" class="font-semibold text-center lg:w-2/3 md:2/3 md:mx-auto bg-pink-50 rounded-md lg:mx-auto shadow-md mt-10 py-4">{{ status }}</div>
            <div v-if="loading">Loading</div>

            <div class="text-xl   font-semibold  mt-8 lg:mx-auto">
                <h1 class="w-4/5 ml-12 md:w-1/2 md:ml-auto">⭐️ Join 100+ happy customers</h1>
            </div>
            <div class="flex mt-20 mx-auto lg:mx-auto lg:mr-20">
                <!-- <div>

                    <hr class="text-gray-400 w-40 lg:w-76  md:w-70">
                </div> -->
                <div class="bg-gray-400 w-40 h-0.5 md:w-1/2 ">

                </div>
                <div>
                    <h1 class="-mt-5 mx-1">or</h1>
                </div>
                <!-- <div class="">

                    <hr class="text-gray-400 w-40 lg:w-76 md:w-70">
                </div> -->
                <div class="bg-gray-400 w-40 h-0.5 md:w-1/2 ">

                </div>
            </div>
            <div class="text-xl font-semibold w-6/7 mx-auto mt-16 lg:w-3/4 lg:mx-auto">
                <p>Filling out the form above is the
                    fastest way to get an answer,
                    but you can also schedule a cal
                    l in the upcoming days if you
                    prefer.</p>
            </div>
        </div>

        <div class="ml-2 mt-24 bg-black text-white rounded-4xl pt-2 pb-5 lg:hidden">
            <div class="flex bg-black text-white rounded-4xl lg:rounded-full lg:hidden">
                <div class="ml-4">
                    <img src="/groupImageBottom.png" alt="">
                </div>
                <div class="pt-4 ml-4 lg:mt-5">
                    <h1 class="font-semibold">Want to jump on a <br class="lg:hidden">
                        telegram chat?</h1>
                    <p class="mt-2 text-xl font-light">Book a 30 minute
                        <br class="lg:hidden"> chat
                    </p>
                </div>

            </div>
            <div class="ml-36 mt-5">
                <button class="button text-white py-3 px-12 rounded-2xl text-2xl">Continue</button>
            </div>
        </div>
        <div class="hidden lg:block text-white  bg-black mt-20 pr-10 pl-16 rounded-full pb-10 pt-5  w-4/5 mx-auto">
            <div class="flex">
                <div>
                    <img src="/groupImageBottom.png" alt="">
                </div>
                <div>
                    <div class="pt-4 ml-4 lg:mt-2">
                        <h1 class="font-semibold lg:text-2xl lg:w-90">Want to jump on a <br class="lg:hidden">
                            telegram chat?</h1>
                        <p class="mt-2 text-xl font-light ">Book a 30 minute
                            <br class="lg:hidden"> chat
                        </p>
                    </div>
                </div>
                <div class="ml-36 mt-5">
                    <button class="button text-white py-3 px-12 rounded-full mt-8 -ml-46 text-2xl">Continue</button>
                </div>
            </div>
        </div>
        <div class="mt-28 lg:w-4/5 lg:mx-auto">
            <div class="flex ml-1 mr-1 ">
                <div
                    class="card flex cardDiv pl-3 pr-3 w-3/4 rounded-lg pt-3 pb-6 shadow-md lg:w-4/5 lg:mr-5 lg:pl-10 lg:pt-6">
                    <div class="last flex">

                        <div class="mr-2">
                            <i class="fa-solid fa-envelope text-black text-2xl lg:text-4xl"></i>
                        </div>
                        <div class="lg:ml-5">
                            <h1 class="font-semibold lg:text-xl">Email & Phone</h1>
                            <p class="text-sm text-gray-500 mt-2 font-semibold lg:text-lg">yared123@gmail.com</p>
                            <p class="text-sm text-gray-500  font-semibold lg:text-lg">+251916897173</p>
                        </div>
                    </div>
                </div>
                <div
                    class="card flex cardDiv w-3/4 pl-3 pr-3 rounded-lg py-4 ml-3 lg:w-3/4 lg:h-48 lg:mr-5 lg:pl-10 lg:pt-6">
                    <div class="last flex">

                        <div class="mr-2">
                            <i class="fa-solid fa-location-dot text-black text-2xl lg:text-4xl"></i>
                        </div>
                        <div class="lg:ml-5">
                            <h1 class="font-semibold lg:text-xl">Our Location</h1>
                            <p class="text-sm text-gray-500 font-semibold mt-2 lg:text-lg">Sherifa BLDG 8th
                                floor,Meskel
                                flowerAddid Ababa</p>

                        </div>
                    </div>
                </div>
            </div>
            <div
                class="card flex cardDiv w-1/2 pl-3 pr-2  rounded-lg pt-3 pb-7 ml-1 shadow-md mt-10 lg:h-48  lg:pr-1 lg:pl-10  lg:pt-6 lg:w-1/2 lg:mx-auto">
                <div class="last flex">
                    <div class="mr-2">
                        <i class="fa-solid fa-phone text-black text-2xl lg:text-4xl mt-2"></i>
                    </div>
                    <div class="lg:ml-5">
                        <h1 class="font-semibold lg:text-xl">Project Inquiry</h1>
                        <p class="text-sm text-gray-500 font-semibold mt-2 lg:text-lg">+251916897173</p>
                        <p class="text-sm text-gray-500 font-semibold lg:text-lg">+251916897173</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { onMounted } from 'vue';
import { animate, inView, hover } from 'motion';
export default defineComponent({
    setup() {
        
       
        onMounted(() => {
            const startAnimation = (element, animationProps) => {
                animate(element, animationProps, {
                    duration: 4,
                    repeat: 1,
                    easing: [0.17, 0.55, 0.55, 1],
                    direction: 'alternate',

                });
            };


            inView(".last", (element, isInView) => {
                if (isInView) {
                    startAnimation(element, { opacity: 1, y: [-100, 10] }, { delay: 100 });
                } else {

                    animate(element, { opacity: 0, x: 0 });
                }
            });
            hover(".card", (element) => {
                startAnimation(element, { scale: 0.9, duration: 2 })

                return () => animation.stop()
            })



            // inView(".box1", (element, isInView) => {
            //     if (isInView) {
            //         animate(element, { opacity: 0, x: 0 });
            //         startAnimation(element, { opacity: 1, x: [0, -500] },{delay:100});
            //     } else {

            //         animate(element, { opacity: 0, x: 0 });
            //     }
            // });



        });

        const formData = ref({
      name: '',
      email: '',
      phone:'',
      detail: '',
      subject: ''
    });
    const status = ref('');
    const sendEmail = () => {
        status.value = 'Loading'
      emailjs.send('service_39uy8wh', 'template_0bvbznb', formData.value, '4dKz9Oxhr-ezR17-0')
        .then(() => {
          status.value = 'Email sent successfully!';
          console.log('data',formData.value)
          resetForm();
         
        })
        .catch(() => {
          status.value = 'Failed to send email. Please try again.';
 
        });
        const status = ref('');
        const sendEmail = () => {
            emailjs.send('service_39uy8wh', 'template_0bvbznb', formData.value, '4dKz9Oxhr-ezR17-0')
                .then(() => {
                    status.value = 'Email sent successfully!';
                    console.log('data', formData.value)
                    resetForm();
                })
                .catch(() => {
                    status.value = 'Failed to send email. Please try again.';
                });
        };


        const resetForm = () => {
            formData.value.name = '';
            formData.value.email = '';
            formData.value.phone = '';
            formData.value.detail = '';
            formData.value.subject = '';
        };
        return {
            formData,
            status,
            sendEmail
        };



    }

});
</script>

<style scoped>
.talk {
    font-size: 48px;
    background: linear-gradient(to right,
            #9B4AF7 0%,
            #8523F5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.input {
    background-color: #e6d3f0;
}

.button {
    background: linear-gradient(to right, #9B4AF7 0%, #8523F5 100%);

}

.cardDiv {
    background: linear-gradient(to right, #D6C4F2 0%, #B693F5 100%);

}
</style>