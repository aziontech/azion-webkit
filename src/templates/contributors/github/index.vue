<template>
  <div class="m-0 p-0">
    <ul class="avatar-list list-none flex m-0x p-0 pl-[.5rem]">
      <li
        v-for="contributor in contributors"
        class="m-0 p-0 ml-[-.5rem]">

        <a :href={`https://github.com/${contributor.login}`}>
          <img
            class="w-[40px] h-[40px] m-0 p-0 rounded-full border"
            :alt="contributor.login"
            :title="contributor.login"
            loading="lazy"
            width="3rem"
            height="3rem"
            :src=`https://avatars.githubusercontent.com/u/${contributor.id}?s=64}`
          />
        </a>
      </li>
    </ul>

    <!--
    {
      contributors.length === 0 && (
        <p>
          <a href={contributorsLink}>
            <UIString key="contributors.seeAll" />
          </a>
        </p>
      )
    }
    -->
  </div>
</template>

<script setup>
// contributor.login
// contributor.id
const props = defineProps({
  contributors: {
    type: Array,
    required: true
  }
});
</script>
