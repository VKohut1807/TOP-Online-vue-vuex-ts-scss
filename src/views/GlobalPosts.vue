<script setup lang="ts">
import {ref, Ref} from "vue";

import TopoPosts from "@/components/Posts.vue";
import TopoPopularTags from "@/components/PopularTags.vue";
import TopoTabs from "@/components/Tabs.vue";

import {baseURL} from "@/data/baseURL";

const apiUrl: Ref<string> = ref("/articles");
const apiUrlPopularTags: Ref<string> = ref("/tags");
</script>

<template>
  <section id="global-posts" class="global-posts">
    <div class="wrapper">
      <topo-tabs />
      <div class="row">
        <topo-posts :api-url="baseURL.realworld + apiUrl" />

        <topo-popular-tags :api-url="baseURL.realworld + apiUrlPopularTags" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@scss/config/config.scss";

.global-posts {
  .row {
    position: relative;
    display: grid;
    grid-template-columns: 75% auto;
    gap: 1rem;

    @include break("s") {
      grid-template-columns: 60% auto;
    }
  }
}
</style>
