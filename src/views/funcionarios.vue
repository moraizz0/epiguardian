<template>
    <header clas="layout-container">
    <h1>Cadastro de Funcionários</h1>
    </header>
    <main class="content">

      <section class="card-form">
        <div class="card-header">
          <h3>{{ editandoId ? 'Alterar Registro' : 'Novo Funcionário' }}</h3>
        </div>

        <form @submit.prevent="salvar" class="main-form">

          <div class="form-row">
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input
                v-model="form.nome"
                type="text"
                id="nome"
                placeholder="Digite o nome"
                required
              />
            </div>

           <!--
            <div class="form-group">
              <label for="matricula">Nº Matrícula</label>
              <input
                v-model="form.matricula"
                type="text"
                id="matricula"
                placeholder="Ex: 5542"
                required
              />
            </div>
            -->
            <div class="form-group">
              <label for="cpf">CPF</label>
              <input
                v-model="form.cpf"
                type="text"
                id="cpf"
                placeholder="Ex: 123.456.789-00"
                required
              />
            </div>
          </div>

            <div class="form-row">
            <div class="form-group">
              <label for="dataDeNascimento">Data de Nascimento</label>
              <input
                v-model="form.dataDeNascimento"
                type="text"
                id="dataDeNascimento"
                placeholder="Ex: 01/01/1990"
                required
              />
            </div>

            <div class="form-group">
              <label for="telefone">Telefone</label>
              <input
                v-model="form.telefone"
                type="text"
                id="telefone"
                placeholder="Ex: (11) 99999-9999"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                placeholder="Ex: joao.silva@empresa.com"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="setor">Setor</label>
              <input
                v-model="form.setor"
                type="text"
                id="setor"
                placeholder="Ex: Manutenção"
                required
              />
            </div>

            <div class="form-group">
              <label for="cargo">Cargo</label>
              <input
                v-model="form.cargo"
                type="text"
                id="cargo"
                placeholder="Ex: Pedreiro"
                required
              />
            </div>
          </div>

          <div class="action-bar">
            <button type="submit" class="btn btn-primary">
              {{ editandoId ? 'Atualizar Dados' : 'Finalizar Cadastro' }}
            </button>

            <button
              v-if="editandoId"
              type="button"
              @click="cancelarEdicao"
              class="btn btn-outline"
            >
              Cancelar
            </button>
          </div>

        </form>
      </section>

      <section class="card-table">
        <table class="styled-table">
          <thead>
            <tr>
              <th class="text-center">Matrícula</th>
              <th class="text-center">Colaborador</th>
              <th class="text-center">CPF</th>
              <th class="text-center">Data de Nascimento</th>
              <th class="text-center">Telefone</th>
              <th class="text-center">Email</th>  
              <th class="text-center">Setor / Cargo</th>
              <th class="text-center">Gerenciar</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="f in se1" :key="f.e1_mat">
              <td>
                <span class="text-bold">{{ f.e1_mat }}</span>
              </td>

              <td>{{ f.e1_nome }}</td>
              <td>{{ f.e1_cpf }}</td>
              <td>{{ f.e1_dtnasc }}</td>
              <td>{{ f.e1_tel }}</td>
              <td>{{ f.e1_email }}</td>
              <td>
                <span class="badge">{{ f.e1_setor }}</span>
                <span class="cargo-text">{{ f.e1_cargo }}</span>
              </td>

              <td class="text-center">
                <button
                  @click="prepararEdicao(f)"
                  class="btn-action edit"
                >
                  Editar
                </button>

                <button
                  @click="excluir(f.e1_mat)"
                  class="btn-action delete"
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>

</template>

<script>
export default {
    name: 'SE1'
}
</script>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useSupabase } from '../composable/useSupabase'

const { supabase } = useSupabase()
 
// Variáveis que controlam os dados na tela
const se1 = ref([])
const editandoId = ref(null)

const form = reactive({
  matricula: '',
  nome: '',
  cpf: '',
  dataDeNascimento: '',
  telefone: '',
  email: '',
  setor: '',
  cargo: ''
})

// Busca os dados do Supabase
const carregar = async () => {
  const { data, error } = await supabase
    .from('se1')
    .select('*')
    .order('e1_mat', { ascending: true })

  if (error) {
    console.error('Erro ao carregar:', error.message)
    return
  }

  se1.value = data || []
}

// Salva um novo ou atualiza um existente
const salvar = async () => {
  if (editandoId.value) {
    await supabase
      .from('se1')
      .update(form)
      .eq('e1_mat', editandoId.value)
  } else {
    await supabase
      .from('se1')
      .insert([form])
  }

  cancelarEdicao()
  carregar()
}

// Prepara o formulário para edição ao clicar no botão
const prepararEdicao = (f) => {
  editandoId.value = f.e1_mat

  Object.assign(form, {
    nome: f.e1_nome,
    matricula: f.e1_mat,
    cpf: f.e1_cpf,
    dataDeNascimento: f.e1_dtnasc,
    telefone: f.e1_tel,
    email: f.e1_email,
    setor: f.e1_setor,
    cargo: f.e1_cargo
  })
}

// Deleta um registro
const excluir = async (e1_mat) => {
  const confirmar = confirm(
    'Deseja realmente remover este registro?'
  )

  if (!confirmar) return

  await supabase
    .from('se1')
    .delete()
    .eq('e1_mat', e1_mat)

  carregar()
}

// Limpa o formulário e sai do modo de edição
const cancelarEdicao = () => {
  editandoId.value = null

  Object.assign(form, {
    nome: '',
    matricula: '',
    cpf: '',
    dataDeNascimento: '',
    telefone: '',
    setor: '',
    cargo: '',
    email: ''
  })
}

// Inicia a busca de dados assim que a tela abre
onMounted(carregar)
</script>

<style scoped>
.layout-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8fafc;
  min-height: 100vh;
}

.header-section {
  margin-bottom: 30px;
}

.header-section h1 {
  color: #0f172a;
  font-size: 1.8rem;
}

.header-section p {
  color: #64748b;
}

.card-form,
.card-table {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  overflow: hidden;
}

.card-header {
  background-color: #f8fafc;
  padding: 16px 24px;
  border-bottom: 1px solid #e2e8f0;
}

.main-form {
  padding: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 10px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
}

input {
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.action-bar {
  display: flex;
  gap: 0px;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background: #2563eb;
  color: white;
  border: none;
}

.btn-outline {
  background: white;
  color: #64748b;
  border: 1px solid #cbd5e1;
}

.styled-table {
  width:100%;
  border-collapse: collapse;
}

.styled-table th {
  background-color: #f1f5f9;
  padding: 16px 55px;
  text-align: center;
  font-size: 0.75rem;
  color: #64748b;
  text-transform: uppercase;
}

.styled-table td {
  padding: 16px 24px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.95rem;
}

.text-bold {
  font-weight: 600;
  color: #1e293b;
}

.badge {
  background: #dbeafe;
  color: #1d4ed8;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 10px;
}

.cargo-text {
  color: #64748b;
  font-size: 0.85rem;
}

.btn-action {
  background: none;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

.edit {
  color: #2563eb;
  margin-right: 0px;
}

.delete {
  color: #ef4444;
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: fr;
  }
}
</style>