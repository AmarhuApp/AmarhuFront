<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center mb-4">Inicio de Sesión</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico:</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña:</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3" role="alert">
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        this.error = 'Por favor, ingresa tu correo electrónico y contraseña.';
        return;
      }
      // Aquí iría tu lógica de autenticación
      // Por ejemplo, enviar los datos al servidor y manejar la respuesta
      // Si la autenticación falla, establece this.error con un mensaje adecuado
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 5%;
}
.card {
  border-radius: 15px;
}
</style>
