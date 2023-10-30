<template>
  <div class="flex gap-4 mb-8">
    <div class="px-8">
      <div class="flex justify-between">
        <div class="flex">
          <Tag value="Featured" />
          <Tag value="Edge Computing" />
        </div>
        <p class="m-0">
          NOV, 24, 2022 • 10 min read
        </p>
      </div>
      <h1 class="text-5xl">
        Women in Tech: Celebrating the Women's Month With a Conversation on Equity, Diversity and Opportunity
      </h1>
      <div class="flex">
        <AvatarGroup>
          <Avatar image="https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg" shape="circle" />
          <Avatar image="https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg" shape="circle" />
          <Avatar image="https://assets.azion.com/static/images/uploads/whatsapp-image-2021-12-08-at-16-22-01.jpeg" shape="circle" />
        </AvatarGroup>
        <p>
          Writted by Rachel Kempf (Editor-in-Chief), Giovani Rinaldi (Developer & Systems Specialist),
          Nick Sandoval (Product Marketing Manager), and Giovani Rinaldi (Developer & Systems Specialist).
        </p>
      </div>
    </div>
    <figure class="hidden lg:block p-0 m-0 min-w-fit">
      <img src="https://www.azion.com/static/images/uploads/thumb-blog-let-s-encrypt-kv.png?ims=478x" alt="" class="h-auto w-full">
    </figure>
  </div>
</template>

<script setup>
  import Avatar from 'primevue/avatar'
  import AvatarGroup from 'primevue/avatargroup'
  import Tag from 'primevue/tag'
</script>
