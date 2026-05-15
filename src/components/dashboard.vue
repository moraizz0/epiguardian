<template>
  <div class="shell">
    <aside class="sidebar">
    <div class="logo-container">
      <img src="../assets/armor.png" alt="Logo" class="logo-image" />
      <h1 class="logo">
      EPI Guardian
      </h1>
    </div>

    <nav class="menu">
      <RouterLink to="/dashboard/funcionarios" class="menu-item" active-class="active">
        <span>Funcionários</span>
      </RouterLink>

      <RouterLink to="/dashboard/cadastro" class="menu-item" active-class="active">
        <span>Cadastro de EPIs</span>
      </RouterLink>

      <RouterLink to="/dashboard/entregas" class="menu-item" active-class="active">
        <span>Entregas de EPI</span>
      </RouterLink>

      <RouterLink to="/dashboard/reports" class="menu-item" active-class="active">
        <span>Relatório</span>
      </RouterLink>
    </nav>

  <!-- botão de sair -->
      <button @click="sair" class="botao-sair">
          <span>Sair</span>
      </button>
    </aside>

    <main class="conteudo">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { useSupabase } from '../composable/useSupabase'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

const { supabase } = useSupabase()

const router = useRouter()

// ===== FUNÇÃO: LOGOUT =====
async function sair() {
  try {
    await supabase.auth.signOut()
    router.push('/login')
  }
  catch (err) {
    console.error('Erro ao fazer logout:', err)
  }
}
</script>

<style scoped>
/* ===== ESTILOS GERAIS ===== */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Arial;
}

/* ===== SHELL ===== */
/* Divide a tela em Sidebar + Conteúdo */
.shell {
  display: flex;
  height: 100vh;
  background-color: #FFFFFF;
}

/* ===== SIDEBAR ===== */
.sidebar {
  width: 250px;
  background-color: #343A40;
  color: #FFFFFF;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  box-shadow: 2px 0 8px rgba(12, 4, 4, 0.1);
  z-index: 1000;
  overflow-y: auto;
}

.logo-container{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin-bottom: 50px;
}

.logo-image{
  width: 60px;
  height: auto;
}

.logo{
  font-size: 25px;
  font-weight: 700;
  color: #f8f9fa;
  margin: 0;
}


/* ===== MENU ===== */
.menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ===== ITENS DO MENU ===== */
.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 12px;
}

/* Quando passa o mouse no item do menu */
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Quando o item está ativo (a página atual) */
.menu-item.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
  border-left: 4px solid #FFFFFF;
  padding-left: 16px;
}

/* Ícone do menu */
.menu-item i {
  font-size: 20px;
  width: 24px;
  text-align: center;
}

/* ===== BOTÃO SAIR ===== */
.botao-sair {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
}

/* Quando passa o mouse no botão Sair */
.botao-sair:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Quando clica no botão Sair */
.botao-sair:active {
  transform: scale(0.98);
}

/* Ícone do botão Sair */
.botao-sair i {
  font-size: 18px;
}

/* ===== CONTEÚDO CENTRAL ===== */
.conteudo {
  flex-grow: 1;
  /* Ocupa todo o espaço restante */
  margin-left: 250px;
  /* Deixa espaço para a Sidebar fixa (250px) */
  padding: 30px;
  /* Espaço interno */
  overflow-y: auto;
  /* Permite rolar o conteúdo se necessário */
  background-color: #ADB5BD;
}

/* ===== RESPONSIVIDADE: Telas pequenas (celulares) ===== */
@media (max-width: 768px) {
  /* Em telas pequenas, a Sidebar fica escondida ou reduzida */
  .sidebar {
    width: 200px;
    /* Reduz a largura da Sidebar */
  }

  .conteudo {
    margin-left: 200px;
    /* Ajusta o espaço para a nova largura */
    padding: 20px;
    /* Reduz o padding */
  }

  .logo {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .menu-item {
    padding: 12px 15px;
    font-size: 14px;
  }
}

/* ===== RESPONSIVIDADE: Telas muito pequenas (celulares pequenos) ===== */
@media (max-width: 480px) {
  /* Em telas muito pequenas, a Sidebar pode ser ocultada com JavaScript */
  .sidebar {
    width: 100%;
    position: absolute;
    height: auto;
  }

  .conteudo {
    margin-left: 0;
    padding: 15px;
  }
}
</style>