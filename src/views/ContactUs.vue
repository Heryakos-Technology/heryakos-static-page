<template>
  <div class=" mx-auto md:w-2/3 md:mx-auto lg:w-1/2 lg:mx-auto">
    <div class="flex  md:hidden lg:hidden   mx-auto  pb-5 pt-16">
<div class="smbox w-1/2 bg-white shadow-md shadow-purple-300 p-3 rounded-lg animated-card">
    <div class="flex">
        <div><i class="fa-solid fa-envelope"></i></div>
        <div class="ml-2 text-sm">Email & Phone</div>
    </div>
    <p class="mt-2 text-xs">yaredyaya16@gmail.com</p>
    <p class="mt-2 text-xs"></p>
    <p class="text-xs mt-2">+251916897173</p>
</div>
<div class=" smbox1 w-1/2 bg-white shadow-md shadow-purple-300 p-3 rounded-lg ml-5 animated-card">
    <div class="flex">
        <div><i class="fa-solid fa-phone"></i></div>
        <div class="ml-2 text-sm">Project Inquiry</div>
    </div>
    <p class="mt-2 text-xs">0777097173</p>
    <p class="text-xs mt-1">+251916897173</p>
</div>
    </div>
 
      <div class="w-1/2 lg:hidden md:hidden mb-5 mx-auto smboxx bg-white md:w-3/4 md:h-27 lg:h-33 shadow-md shadow-purple-300 p-4 rounded-lg  animated-card ">
    <div class="flex">
        <div><i class="fa-solid fa-location-dot"></i></div>
        <div class="ml-2 text-sm">Our Location</div>
    </div>
    <p class="mt-2 text-xs d:w-3/4 md:mx-auto">Sherifa BLDG 8th
floor,Meskel flower.
Addid Ababa</p>
   
</div>

<div class="hidden md:block lg:block">
<div class="flex pt-30  md:mx-auto mb-10">
    <div class="smboxx md:w-3/4 md:h-27 mr-3 lg:h-33 bg-white shadow-md shadow-purple-300 p-3 rounded-lg animated-card ">
    <div class="flex ">
        <div><i class="fa-solid fa-envelope"></i></div>
        <div class="ml-2 text-sm">Email & Phone</div>
    </div>
    <p class="mt-2 text-xs md:w-3/4 md:mx-auto ">yaredyaya16@gmail.com</p>
    <p class="mt-2 text-xs md:w-3/4 md:mx-auto "></p>
    <p class="text-xs mt-1 md:w-3/4 md:mx-auto ">+251916897173</p>
</div>
<div class="smboxx bg-white shadow-md lg:h-33 md:w-3/4 md:h-27 mr-3 shadow-purple-300 p-3 rounded-lg animated-card ">
    <div class="flex">
        <div><i class="fa-solid  fa-phone"></i></div>
        <div class="ml-2 text-sm">Project Inquiry</div>
    </div>
    <p class="mt-2 text-xs md:w-3/4 md:mx-auto">0777097173</p>
    <p class="text-xs mt-1 md:w-3/4 md:mx-auto">+251916897173</p>
</div>
<div class="smboxx bg-white md:w-3/4 md:h-27 lg:h-33 shadow-md shadow-purple-300 p-3 rounded-lg  animated-card ">
    <div class="flex">
        <div><i class="fa-solid fa-location-dot"></i></div>
        <div class="ml-2 text-sm">Our Location</div>
    </div>
    <p class="mt-2 text-xs d:w-3/4 md:mx-auto">Sherifa BLDG 8th
floor,Meskel flower.
Addid Ababa</p>
   
</div>
</div>
</div>
<div>
    <img src="/team3.png" alt="" class="w-1/2 mx-auto lg:w-1/3 lg:mx-auto">
    <p class="w-1/2 mx-auto text-xl mt-3 lg:w-1/4 lg:mx-auto">Need  a replay fast?</p>
    <h1 class="w-1/3 text-2xl mx-auto mt-2 lg:w-1/6 lg:mx-auto">Let’s <span class="text-purple-500 ">talk!</span></h1>
    <p class="w-10/10 mx-auto text-gray-500 mt-4 px-3 lg:w-2/3 lg:mx-auto">Share your project requirements here or send us an 
        email at yaredyaya16@gmail.com we will follow up in <span class="text-black font-bold">24 hrs</span>  </p>
</div>
<div class="bg-white rounded-md w-3/4 mx-auto p-4 mb-5 mt-10 lg:w-2/3 lg:mx-auto ">
    <div class="lg:w-6/7 lg:mx-auto">

        <p class="w-2/3">Name <span class="text-red-400 -mb-1">*</span></p>
        <input type="text" class="bg-gray-100 pl-3 mt-2 rounded-sm w-10/11 mx-auto h-10 focus:outline-none" placeholder="enter your name" v-model="formData.name" required>
    </div>
    <div class="mt-7 lg:w-6/7 lg:mx-auto">

<p class="w-2/3">Email <span class="text-red-400 -mb-1">*</span></p>
<input type="text" class="bg-gray-100 pl-3 mt-2 rounded-sm w-10/11 mx-auto h-10 focus:outline-none" placeholder="enter your email"   v-model="formData.email" required >
</div>
<div class="mt-7 lg:w-6/7 lg:mx-auto">

<p class="w-2/3">Phone <span class="text-red-400 -mb-1">*</span></p>
<input type="text" class="bg-gray-100 pl-3 mt-2 rounded-sm w-10/11 mx-auto h-10 focus:outline-none" placeholder="enter your phone" v-model="formData.phone" required>
</div>
<div class="mt-7 lg:w-6/7 lg:mx-auto">

<p class="w-2/3">Subject</p>
<input type="text" class="bg-gray-100 pl-3 mt-2 rounded-sm w-10/11 mx-auto h-10 focus:outline-none" placeholder="enter your subject" v-model="formData.subject" required>
</div>
<div class="mt-7 lg:w-6/7 lg:mx-auto">

<p class="w-2/3">Details <span class="text-red-400 -mb-1">*</span></p>
<textarea name="" id="" class="bg-gray-100 pl-3 mt-2 rounded-sm w-10/11 mx-auto h-15 focus:outline-none pt-2 " placeholder="enter your details" v-model="formData.detail" required  />

</div>
<button v-if="!status" class="bg-purple-500 text-white px-5 py-2 rounded-sm w-2/3 mt-4 lg:w-1/2 ml-7" @click="sendEmail">SEND MESSAGE</button>
<div v-if="status" class="bg-purple-500 text-white px-5 py-2 rounded-sm w-9/10 mt-4 lg:w-1/2 lg:mx-auto">{{ status }}</div>
</div>
<div class="flex mt-10 w-10/10 mx-auto ml-3 lg:hidden">
                <!-- <div>

                    <hr class="text-gray-400 w-40 lg:w-76  md:w-70">
                </div> -->
                <div class="bg-gray-400 w-40 h-0.5 md:w-1/2 ">

                </div>
                <div>
                    <h1 class="-mt-4 mx-1">or</h1>
                </div>
                <!-- <div class="">

                    <hr class="text-gray-400 w-40 lg:w-76 md:w-70">
                </div> -->
                <div class="bg-gray-400 w-40 h-0.5 md:w-1/2 ">

</div>
            </div>
            <div class="text-sm   font-semibold lg:text-lg w-6/7 mx-auto lg:w-3/4 lg:mx-auto">
                <p class="text-sm lg:w-1/2 lg:text-right lg:ml-54 mt-12  ml-25"></p>
                <p class="lg:w-3/4 lg:mx-auto lg:text-sm mt-10 ">Filling out the form above is the
fastest way to get an answer,
but you can also schedule a cal
l in the upcoming days if you
prefer.</p>
            </div>
        </div>
        <div class="smboxblacksm  md:hidden lg:hidden mt-10 w-11/12 md:w-3/4 md:mx-auto mx-auto  bg-black text-white rounded-4xl pt-2 pb-5 lg:w-1/2 lg:rounded-full lg:mx-auto mb-20 animated-card">
            <div class="flex bg-black md:w-3/4 md:mx-auto text-white rounded-4xl lg:rounded-full ">
                <div class="ml-4">
                    <img src="/groupImageBottom.png" alt="" class="smbox3 animated-card -ml-1">
                </div>
                <div class="pt-4 ml-4 lg:mt-5">
                    <h1 class="font-semibold ">Want to jump on  a <br class="lg:hidden">
                        telegram chat?</h1>
                    <p class="mt-2 text-xl font-light">Book a 30 minute 
                      <br class="lg:hidden">  chat</p>
                </div>
                
            </div>
            <div class="ml-36 mt-5">
                <button class="button text-white py-3 px-10 w-3/4 md:w-1/2 mx-auto rounded-2xl text-xl lg:w-1/3 lg:rounded-full lg:ml-55" @click="redirectToTelegram">Continue</button>
            </div>
        
  </div>
        <div class="smboxblack hidden md:block lg:block mt-10 w-11/12 md:w-3/4 md:mx-auto mx-auto  bg-black text-white rounded-4xl pt-2 pb-5 lg:w-1/2 lg:rounded-full lg:mx-auto mb-20 animated-card">
            <div class="flex bg-black md:w-3/4 md:mx-auto text-white rounded-4xl lg:rounded-full ">
                <div class="ml-4">
                    <img src="/groupImageBottom.png" alt="" class="smbox3 animated-card -ml-1">
                </div>
                <div class="pt-4 ml-4 lg:mt-5">
                    <h1 class="font-semibold ">Want to jump on  a <br class="lg:hidden">
                        telegram chat?</h1>
                    <p class="mt-2 text-xl font-light">Book a 30 minute 
                      <br class="lg:hidden">  chat</p>
                </div>
                
            </div>
            <div class="ml-36 mt-5">
                <button class="button text-white py-3 px-10 w-3/4 md:w-1/2 mx-auto rounded-2xl text-xl lg:w-1/3 lg:rounded-full lg:ml-55" @click="redirectToTelegram">Continue</button>
            </div>
        
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import emailjs from 'emailjs-com';
import { animate, inView,hover } from 'motion';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      phone:'',
      detail: '',
      subject: ''
    });
   
 
    const status = ref('');
    const sendEmail = () => {
        const isFormFilled = Object.values(formData.value).every(value => value !== '');
        if(isFormFilled){
            status.value = 'Sending...'
      emailjs.send('service_wpherlc', 'template_xu8fqgb', formData.value, 'F3IkIe64O19PEt25n')
        .then(() => {
          status.value = 'Email sent successfully!';
          console.log('data',formData.value)
          resetForm();
         
        })
        .catch((error) => {
          status.value = 'Failed to send email. Please try again.';
          console.log('erroer',error)
        });
    };
   

    const resetForm = () => {
      formData.value.name = '';
      formData.value.email = '';
      formData.value.phone = '';
      formData.value.detail = '';
      formData.value.subject = '';
    };
   
        }
        const redirectToTelegram = () => {
        const username = ref('yared123yared') 
      if (username.value) {
        window.location.href = `https://t.me/${username.value}`;
      } else {
        alert('Please enter a username.');
      }
    };
    const cards = ref([]);
    const cardss = ref([]);
    // const mdcards = ref([]);
    // const lgcards = ref([]);
    const sideCard = ref([]);
    const cards2 = ref([]);
    const cards3 = ref([]);
    const cards4 = ref([]);
    const cardsblack = ref([]);
    const cardsblacksm = ref([]);
    // const mdcards2 = ref([]);
    // const lgcards2 = ref([]);



const cardobserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('cdvisible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateY(-10px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('cdvisible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(150px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    const cardobserver2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('cd2visible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateY(40px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('cd2visible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(30px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//


const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visible');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(190px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(0px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//
const observerblack = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visibleblack');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(50px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visibleblack');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(0px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//

const observerblacksm = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visibleblacksm');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(5px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visibleblacksm');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(0px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//
const observerr = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visiblee');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(20px)',
          }, {
            duration: 1.7,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visiblee');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(60px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    //
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          entry.target.classList.add('visible4');
          animate(entry.target, {
            opacity: 1,
          
            transform: 'translateX(5px)',
          }, {
            duration: 1.6,
            easing: [0.17, 0.55, 0.55, 1],
            
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible4');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(0px)';
        }
      });
    }, {
      threshold: 0.1,
    });
    //mediumm
    // const mdobserver = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
  
    //       entry.target.classList.add('mdvisible');
    //       animate(entry.target, {
    //         opacity: 1,
          
    //         transform: 'translateX(260px)',
    //       }, {
    //         duration: 1.6,
    //         easing: [0.17, 0.55, 0.55, 1],
            
    //         direction: 'alternate',
    //       });
    //     } else {
          
    //       entry.target.classList.remove('mdvisible');
    //       entry.target.style.opacity = 0;
    //       entry.target.style.transform = 'translateX(0px)';
    //     }
    //   });
    // }, {
    //   threshold: 0.1,
    // });


    //large
    // const lgobserver = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
  
    //       entry.target.classList.add('lgvisible');
    //       animate(entry.target, {
    //         opacity: 1,
          
    //         transform: 'translateX(340px)',
    //       }, {
    //         duration: 1.6,
    //         easing: [0.17, 0.55, 0.55, 1],
            
    //         direction: 'alternate',
    //       });
    //     } else {
          
    //       entry.target.classList.remove('lgvisible');
    //       entry.target.style.opacity = 0;
    //       entry.target.style.transform = 'translateX(0px)';
    //     }
    //   });
    // }, {
    //   threshold: 0.1,
    // });
    //
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible2');
          animate(entry.target, {
            opacity: 1,
            transform: 'translateX(-190px)',
          }, {
            duration: 1.1,
            easing: [0.17, 0.55, 0.55, 1],
            direction: 'alternate',
          });
        } else {
          
          entry.target.classList.remove('visible2');
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(0px)';
        }
      });
    }, {
      threshold: 0.1,
    });
//medium
// const mdobserver2 = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('mdvisible');
//           animate(entry.target, {
//             opacity: 1,
//             transform: 'translateX(-230px)',
//           }, {
//             duration: 1.1,
//             easing: [0.17, 0.55, 0.55, 1],
//             direction: 'alternate',
//           });
//         } else {
          
//           entry.target.classList.remove('mdvisible2');
//           entry.target.style.opacity = 0;
//           entry.target.style.transform = 'translateX(0px)';
//         }
//       });
//     }, {
//       threshold: 0.1,
//     });
//
// const lgobserver2 = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('lgvisible');
//           animate(entry.target, {
//             opacity: 1,
//             transform: 'translateX(-340px)',
//           }, {
//             duration: 1.1,
//             easing: [0.17, 0.55, 0.55, 1],
//             direction: 'alternate',
//           });
//         } else {
          
//           entry.target.classList.remove('lgvisible2');
//           entry.target.style.opacity = 0;
//           entry.target.style.transform = 'translateX(0px)';
//         }
//       });
//     }, {
//       threshold: 0.1,
//     });
    // 
//large
    onMounted(() => {
      cards.value = [...document.querySelectorAll('.smbox')];
      cards.value.forEach(card => {
        observer.observe(card);
      });
      cardss.value = [...document.querySelectorAll('.smboxx')];
      cardss.value.forEach(card => {
        observerr.observe(card);
      });
      //
      sideCard.value = [...document.querySelectorAll('.sideCard')];
      sideCard.value.forEach(card => {
        cardobserver.observe(card);
      });
      //
      cardsblack.value = [...document.querySelectorAll('.smboxblack')];
      cardsblack.value.forEach(card => {
        observerblack.observe(card);
      });
      //
      cardsblacksm.value = [...document.querySelectorAll('.smboxblacksm')];
      cardsblacksm.value.forEach(card => {
        observerblacksm.observe(card);
       
      });
      //
      cards2.value = [...document.querySelectorAll('.smbox1')];
      cards2.value.forEach(card => {
        observer2.observe(card);
      });
      cards3.value = [...document.querySelectorAll('.card3')];
      cards3.value.forEach(card => {
        cardobserver2.observe(card);
      });
      cards4.value = [...document.querySelectorAll('.smbox3')];
      cards4.value.forEach(card => {
        observer3.observe(card);
      });
      //medium
    //   mdcards.value = [...document.querySelectorAll('.mdbox')];
    //   mdcards.value.forEach(card => {
    //     mdobserver.observe(card);
    //   });
    //   mdcards2.value = [...document.querySelectorAll('.mdbox1')];
    //   mdcards2.value.forEach(card => {
    //     mdobserver2.observe(card);
    //   });
    //   //large
    //   lgcards.value = [...document.querySelectorAll('.lgbox')];
    //   lgcards.value.forEach(card => {
    //     lgobserver.observe(card);
    //   });
    //   lgcards2.value = [...document.querySelectorAll('.lgbox1')];
    //   lgcards2.value.forEach(card => {
    //     lgobserver2.observe(card);
    //   });
      onBeforeUnmount(() => {
        cards.value.forEach(card => {
          observer.unobserve(card);
        });
        //
        cardsblack.value.forEach(card => {
          observerblack.unobserve(card);
        });
        //
        cardss.value.forEach(card => {
          observerr.unobserve(card);
        });
        
        sideCard.value.forEach(card => {
          cardobserver.unobserve(card);
        });
        cardsblacksm.value.forEach(card => {
            observerblacksm.unobserve(card);
        });
        
        
        // mdcards.value.forEach(card => {
        //   mdobserver.unobserve(card);
        // });
        cards2.value.forEach(card => {
          observer2.unobserve(card);
        });
        cards3.value.forEach(card => {
            cardobserver2.unobserve(card);
        });
        cards4.value.forEach(card => {
            observer3.unobserve(card);
        });
        
        // mdcards2.value.forEach(card => {
        //   mdobserver2.unobserve(card);
        // });
      });
    });
    

    return {
      cards,
    //   mdcards,
      cards2,
      formData,
      status,
      sendEmail,
      //username,ser
      redirectToTelegram
    //   mdcards2,
    };
  },
};
</script>

<style scoped>
.animated-card {
  opacity: 0; 
  transition: opacity 1.5s ease, transform 1.5s ease; 
  transform: translateX(190);
}

.visible {
  opacity: 1; 
  transform: translateX(190); 
}
.visiblee {
  opacity: 1; 
  transform: translateX(190); 
}
.visibleblack {
  opacity: 1; 
  transform: translateX(190); 
}
.visibleblacksm {
  opacity: 1; 
  transform: translateX(190); 
}
.cdvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.cd2visible {
  opacity: 1; 
  transform: translateX(190); 
}
.mdvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.lgvisible {
  opacity: 1; 
  transform: translateX(190); 
}
.visible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.mdvisible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.lgvisible2 {
  opacity: 1; 
  transform: translateX(10); 
}
.intro-image {
  width: 700px;
  height: 600px;
}
@keyframes slideInImage {
      to {
          opacity: 1;
          transform: translateX(0); 
      }
  }
  
  @keyframes slideInText {
      to {
          opacity: 1;
          transform: translateX(0); 
      }
  }
  
  .animated-image {
      opacity: 0;
      transform: translateY(-50px); 
      animation: slideInImage 0.8s forwards; 
  }
  
  .animated-content {
      opacity: 0;
      transform: translateY(50px); 
      animation: slideInContent 0.8s forwards; 
      animation-delay: 0.4s; 
  }
  
  @keyframes slideInImage {
      to {
          opacity: 1;
          transform: translateY(0);
      }
  }
  
  @keyframes slideInContent {
      to {
          opacity: 1;
          transform: translateY(0); 
      }
  }
</style>