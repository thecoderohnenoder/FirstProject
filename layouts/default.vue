<template>
  <v-app >
    <v-content>
      <HauptBar />
      <v-container>
        <nuxt />
      </v-container>
      <FooterFinal />
    </v-content>
  </v-app>
</template>

<script>
import HauptBar from "@/components/bars/HauptBar";
import FooterFinal from "@/components/footer/FooterFinal";
export default {
  
  components: {
    HauptBar,
    FooterFinal
  }
};
</script>
<style>
.dark {
  max-height: 100%;
}
</style>
