<template>
  <div class="container">
      <h1 class="display-4">Bem-vindo!</h1>
      <button class="btn btn-danger" @click="efetuarLogout">Sair</button>
  </div>
</template>

<script>
import { logoutMixin } from '@/mixins'
export default {
  name: 'home',
  mixins: [logoutMixin],
  
}
</script>
