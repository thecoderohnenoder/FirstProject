<template>
  <div>
    <div class="float-right">
      <FormularioContacto />
    </div>
    <CardKontakt />
    <Footer />
  </div>
</template>

<script>
import FormularioContacto from "@/components/FormularioContacto";
import CardKontakt from "@/components/kontakt/CardKontakt";
import Footer from "@/components/footer/Footer";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  components: {
    FormularioContacto,
    CardKontakt,
    Footer
  }
};
</script>
