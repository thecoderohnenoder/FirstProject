<template>
  <v-app class="pr-1"  style="height:250px">
    <v-card class="joder mx-auto" width="1800">
      <v-img
        height="200px"
        src="https://firebasestorage.googleapis.com/v0/b/pula-41000.appspot.com/o/atomhousing.png?alt=media&token=684ae37b-517b-4e33-934e-f55d53c0c1f2"
      ></v-img>
    </v-card>
    <v-navigation-drawer o v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon large color="blue darken-2">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app class="light-blue darken-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer"></v-btn>
      <ArribaHorizontal />
    </v-app-bar>
  </v-app>
</template>

<script>
import ArribaHorizontal from "@/components/menus/ArribaHorizontal";

name: "HauptBar";
export default {
  components: {
    ArribaHorizontal
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "mdi-rotate-3d-variant",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-file-star-outline",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-color-helper mdi-theme-light-dark",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "account-check",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Rhein-Main-Electrotechnik"
    };
  }
};
</script>

<style>
.joder {
  margin: 0;
  padding: 0;
}
.color {
  color: aqua;
}
</style>
