<template>
  <div class="home">

    <!-- NAVBAR -->
    <header class="navbar">
      <div class="logo">
         <img src="../assets/logo.png" alt="Logo EPI Guardian" class="logo-img" />
        <span>EPI GUARDIAN</span>
      </div>

<RouterLink to="/login">
      <button class="login-btn">LOGIN</button>
</RouterLink>

    </header>
    <!-- HERO -->
    <section class="hero">

      <h1>EPI GUARDIAN</h1>

      <h2>SISTEMA DE GESTÃO DE EPIs</h2>

      <p>
        O EPI Guardian é a solução definitiva para o gerenciamento eficiente dos
        equipamentos de proteção individual. 
      </p>

      <div class="hero-buttons">
        <button class="primary">SAIBA MAIS</button>
      </div>

    </section>

    <!-- FEATURES -->
    <section class="features">

      <h2>GERENCIE SEUS EPIs COM EFICIÊNCIA</h2>

      <p class="subtitle">
        O EPI Guardian oferece uma plataforma fácil de usar
        para o gerenciamento eficaz dos equipamentos de proteção individual.
      </p>

      <div class="cards">

        <div class="card">
          <h3>Gestão de Controle</h3>
          <p>
            Cadastre, controle e acompanhe a retirada, devolução e validade
            dos EPIs.
          </p>
          <RouterLink to="/about">
            <button class="about-btn">SAIBA MAIS</button>
          </RouterLink>
        </div>


        <div class="card">
          <h3>Monitoramento e Relatórios</h3>
          <p>
            Obtenha relatórios detalhados sobre o uso dos EPIs, inspeções
            e conformidade com normas regulamentadoras.
          </p>
          <button>SAIBA MAIS</button>
        </div>

      </div>

    </section>

  </div>
</template>

<style scoped>

.home{
  font-family: 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, #0c1c3a, #020812);
  color: white;
}


/* NAVBAR */

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 60px;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(10px);
}

.logo{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:bold;
  color:#5db3ff;
}

.logo img{
  height:40px;
}

.menu a{
  margin:0 15px;
  color:#c7d9ff;
  text-decoration:none;
  font-size:15px;
  transition:0.3s;
}

.menu a:hover{
  color:#4db3ff;
}

.login-btn{
  padding:10px 22px;
  border:none;
  border-radius:6px;
  background:linear-gradient(90deg,#2a7fff,#0c3cff);
  color:white;
  cursor:pointer;
}


/* HERO */

.hero{
  text-align:center;
  padding:100px 20px;
}

.hero-logo{
  width:300px;
  margin-bottom:20px;
}

.hero h1{
  font-size:48px;
  color:#4db3ff;
}

.hero h2{
  margin-top:10px;
  font-weight:500;
}

.hero p{
  margin-top:20px;
  max-width:650px;
  margin-left:auto;
  margin-right:auto;
  color:#c7d9ff;
}

.hero-buttons{
  margin-top:35px;
}

.primary{
  padding:14px 28px;
  border:none;
  border-radius:6px;
  margin-right:15px;
  background:linear-gradient(90deg,#2a7fff,#0c3cff);
  color:white;
  cursor:pointer;
}

.secondary{
  padding:14px 28px;
  border:1px solid #4db3ff;
  border-radius:6px;
  background:transparent;
  color:white;
  cursor:pointer;
}


/* FEATURES */

.features{
  padding:80px 60px;
  text-align:center;
}

.features h2{
  font-size:28px;
}

.subtitle{
  max-width:700px;
  margin:auto;
  margin-top:15px;
  color:#a7c3ff;
}

.cards{
  margin-top:60px;
  display:flex;
  justify-content:center;
  gap:40px;
  align-items:center;
  flex-wrap:wrap;
}

.card{
  width:260px;
  padding:30px;
  border-radius:12px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(6px);
  border:1px solid rgba(255,255,255,0.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
  box-shadow:0 0 20px rgba(77,179,255,0.4);
}

.card img{
  width:60px;
  margin-bottom:15px;
}

.card h3{
  margin-bottom:10px;
}

.card p{
  font-size:14px;
  color:#c7d9ff;
}

.card button{
  margin-top:15px;
  padding:10px 18px;
  border:none;
  border-radius:5px;
  background:#2a7fff;
  color:white;
}

.mockup img{
  width:420px;
}
</style>