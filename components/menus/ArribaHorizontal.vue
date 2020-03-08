<template>
  <v-container id="dropwn-menu">
    <v-row justify="end">
      <v-col cols="12" sm="2">
        <p>Miners Kaufen</p>

        <v-overflow-btn
          class="v-size--default mt-4 imca"
          background-color="blue"
          append-icon="fab fa-facebook-f"
          :items="dropdown_icon"
          prefix="Miner"
          loading="red"
          item-color="pinki"
          prepend-inner-icon="fab fa-facebook-f"
          rounded
          success
          solo
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
name: "ArribaHorizontal";
export default {
  data: () => ({
    dropdown_icon: [
      { text: "list", callback: () => console.log("list") },
      { text: "favorite", callback: () => console.log("favorite") },
      { text: "delete", callback: () => console.log("delete") }
    ]
  })
};
</script>

<style lang="scss">
.imca {
  color: $pinki;
}
</style>
