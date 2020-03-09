<template>
  <v-row class="border" justify="space-between">
    <CardKontakt />
    <v-window >
      <v-card fluid color="blue lighten-4 " class="cardFormulario">
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-row no-gutters>
              <v-col cols="12" md="8">
                <v-card-text class="mx-auto">
                  <h1 class="text-center display-2 teal--text text--accent-3">Sign in to Diprella</h1>
                  <div class="text-center" mt-4>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-facebook-f</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-google-plus-g</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-linkedin-in</v-icon>
                    </v-btn>
                  </div>
                  <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                  <v-form>
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="email"
                      type="text"
                      color="teal accent-3"
                    />
                    <v-text-field
                      id="Password"
                      label="Password"
                      name="Password"
                      prepend-icon="lock"
                      type="password"
                      color="teal accent-3"
                    />
                    <select class="form-control block contact-form" id="seleccion">
                      <option>Google</option>
                      <option>Firefox</option>
                      <option>outdoor advertising</option>
                      <option>recommendation relationship</option>
                      <option>Others</option>
                    </select>
                  </v-form>
                  <h3 class="text-center mt-3">Forget your password ?</h3>
                </v-card-text>
                <div class="text-center mt-3">
                  <v-btn rounded color="teal accent-3" dark>SIGN IN</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="teal accent-3">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center display-1">Hello, Friends !</h1>
                  <h5 class="text-center">Enter your personel details an start journay with us</h5>
                </v-card-text>
                <div class="text-center">
                  <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2">
            <v-row class="fill-height">
              <v-col cols="12" md="4" class="teal accent-3">
                <v-card-text class="white--text mt-12">
                  <h1 class="text-center display-1">Welcome Back !</h1>
                  <h5
                    class="text-center"
                  >To Keep connected with us please login with your personnel info</h5>
                </v-card-text>
                <div class="text-center">
                  <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="8">
                <v-card-text class="mt-12">
                  <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                  <div class="text-center mt-4">
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-facebook-f</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-google-plus-g</v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab color="black" outlined>
                      <v-icon>fab fa-linkedin-in</v-icon>
                    </v-btn>
                  </div>
                  <h4 class="text-center mt-4">Ensure your email for registration</h4>
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="Name"
                      prepend-icon="person"
                      type="text"
                      color="teal accent-3"
                    />
                    <v-text-field
                      label="Email"
                      name="Email"
                      prepend-icon="email"
                      type="text"
                      color="teal accent-3"
                    />
                    <v-text-field
                      id="Password"
                      label="Password"
                      name="Password"
                      prepend-icon="lock"
                      type="password"
                      color="teal accent-3"
                    />
                    <v-text-field
                      id="PasswordConfirm"
                      label="Confirm your Password"
                      name="Password"
                      prepend-icon="lock"
                      type="password"
                      color="teal accent-3"
                    />
                  </v-form>
                </v-card-text>
                <div class="text-center mt-n5">
                  <v-btn rounded color="teal accent-3 dark">SING UP</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card>
    </v-window>

    <Footer />
  </v-row>
</template>


<script>
import { mapActions, mapState } from "vuex";
import Kontakt from "@/components/Kontakt";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import CardKontakt from "@/components/kontakt/CardKontakt";
import Footer from "@/components/footer/Footer";
import "@fortawesome/fontawesome-free/css/all.css"


export default {
  name: "FormularioContacto",
  components: {
    CardKontakt,
    Footer
  },
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1 != "";
    }
  }
};
</script>
<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
.containerPosition {
  position: relative;
  left: 200px;
}
</style>

</style>

