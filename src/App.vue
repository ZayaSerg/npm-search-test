<template>
    <v-app>
      <router-view />
      <v-footer padless app>
        <v-col class="text-center" cols="12">
          <span class="px-4"><strong>Serhii Zaitsev</strong></span>
          <span><a href="https://github.com/zayaserg">https://github.com/zayaserg</a></span>
        </v-col>
      </v-footer>
    </v-app>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

@media (max-width: 1024px) {
  #app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }
}

</style>
