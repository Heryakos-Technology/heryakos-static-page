<script setup>
import imageUrl from "/images/hospital_mockup.png";
import profile_picture from "/images/profile_picture.jpeg";
</script>

<template>
  <div
    class="mx-auto overflow-x-hidden px-4 pt-24 pb-16 sm:px-10 md:pt-48 lg:max-w-[1080px] xl:max-w-[1200px]"
  >
    <div class="md:flex">
      <div
        class="max-w-[380px] space-y-3 md:mt-8 md:max-w-[400px] lg:max-w-[490px]"
      >
        <p class="text-btnColor w-fit border-2 p-1 text-lg font-bold">
          NDA Protected
        </p>
        <h1 class="text-2xl font-semibold md:text-4xl lg:text-5xl">
          Hospital Management System (HMS)
        </h1>
        <p class="">Web Development</p>
      </div>

      <div
        class="mx-auto h-[250px] w-full max-w-[330px] bg-cover bg-center lg:h-[300px] lg:max-w-[400px] xl:h-[320px] xl:max-w-[470px] 2xl:h-[350px] 2xl:max-w-[500px]"
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
    </div>
    <div class="mt-8 space-y-8 sm:max-w-[640px] md:max-w-full xl:mt-14">
      <h1 class="text-btnColor font-bold">Overview</h1>
      <div class="justify-between space-y-8 gap-x-8 md:flex">
        <div
          class="space-y-4 text-sm md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
        >
          <p class="">
            Heryakos Technology collaborated with a leading Ethiopian healthcare
            provider to create a modern Hospital Management System (HMS) to
            address outdated systems and meet growing demands. Through a
            strategic workshop, we defined a vision and objectives, crafting a
            solution focused on efficiency and scalability. The HMS integrates
            patient record management, appointment scheduling, and billing
            automation.
          </p>
          <p class="">
            Launched successfully, this cloud-based HMS streamlines operations,
            enhances patient care with real-time data, and positions our client
            as a healthcare leader in Ethiopia. Reflecting Heryakos Technology’s
            innovation, the system’s sleek design and robust features ensure
            hospitals thrive in a competitive market.
          </p>
        </div>
        <div class="max-w-[342px] space-y-4 text-sm lg:mr-8">
          <div class="flex gap-x-3">
            <p class="text-btnColor font-semibold">Timeline</p>
            January 2024 - April 2024
          </div>
          <div class="flex gap-x-4">
            <p class="text-btnColor font-semibold">Process</p>
            Strategize, Visualize, Systematize
          </div>
          <div class="flex gap-x-3">
            <p class="text-btnColor font-semibold">Services</p>
            Branding, UX/UI Design, Web Design, Front End Development, Webflow
            Development
          </div>
          <div class="flex gap-x-8">
            <p class="text-btnColor font-semibold">Links</p>
            Link
          </div>
        </div>
      </div>
    </div>
    <div
      class="mx-auto my-8 w-full max-w-[425px] px-2 sm:max-w-[525px] md:my-12 md:max-w-[640px] lg:max-w-[780px] xl:max-w-[900px]"
    >
      <iframe
        class="aspect-video w-full"
        src="https://www.youtube.com/embed/ZK-rNEhJIDs?si=r1lkvulLrptK_QUH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div
      class="bg-thirdColor relative mx-auto mt-8 max-w-[375px] space-y-4 rounded-3xl px-2 py-8 text-center sm:max-w-[420px] sm:py-10 md:max-w-[450px] md:px-3 md:py-12 lg:max-w-[720px] lg:px-16 lg:py-14 xl:my-16"
    >
      <p class="text-sm">
        "Partnering with Heryakos Technology to develop our HMS transformed our
        operations at EthioCare Health Systems. Their innovative system
        streamlined patient records and billing, boosting efficiency and patient
        care. We’re now a healthcare leader in Ethiopia, thanks to their
        expertise!"
      </p>
      <div class="text-sm">
        <p class="font-bold">Dr. Yared Tsegaye,</p>
        <p class="">CEO of EthioCare Health Systems</p>
      </div>

      <div
        class="xs:left-[40%] absolute bottom-[-10%] left-[35%] size-15 rounded-full bg-cover bg-center sm:left-[45%]"
        :style="{ backgroundImage: `url(${profile_picture})` }"
      ></div>
    </div>
  </div>
</template>
