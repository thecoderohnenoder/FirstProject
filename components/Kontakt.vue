<template>

<v-container class="forma">
    <v-col cols="12">
      <v-row :align="alignment" :justify="justify">
        <p class="text-left mr-5 blue--text">
        <ul>
          Rhein-main-Elektrotechnik
          <li>
            <i class="fas fa-map-marker-alt"></i> Gernotstraße 27
          </li>
          <br />Deutschland
          <br />
          <br />
          <li>
            <i class="fas fa-phone"></i>
 Telefon:+049 0171 3556420
          </li>
          <li>
            <i class="fas fa-envelope-open-text"></i> E-mail: Martin-slaby@web.de
          </li>
          <br />
          <br />Inhaber: Martin Slaby
        </ul>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.6236736764663!2d8.258548615948166!3d50.05588062359715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdbd8a22922429%3A0x6a95dfba76946151!2sGernotstra%C3%9Fe%2027%2C%2065205%20Wiesbaden!5e0!3m2!1sde!2sde!4v1581518702787!5m2!1sde!2sde"
          width="250"
          height="250"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>

name: "Kontakt";

export default {
  data() {
    return {
      alignment: "end",
      dense: false,
      justify: "end"
    };
  }
};
</script>

<style>



</style>


