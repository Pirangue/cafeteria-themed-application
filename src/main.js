import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="cafeteria">
    <header class="header">
      <span class="logo">☕</span>
      <h1>Café & Sabor</h1>
      <p class="subtitle">Seu combo aleatório do dia</p>
    </header>

    <div class="menu-board">
      <div class="menu-item">
        <div class="menu-label">🍽️ Prato do Dia</div>
        <div id="food-container" class="img-container">
          <div class="loading-text">Preparando seu prato...</div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="menu-item">
        <div class="menu-label">☕ Café do Dia</div>
        <div id="coffee-container" class="img-container">
          <div class="loading-text">Passando seu café...</div>
        </div>
      </div>
    </div>

    <button id="new-combo" type="button">Novo Combo ✨</button>

    <footer class="footer">
      <p>"A vida é curta demais para um café ruim."</p>
    </footer>
  </div>
`

const foodContainer = document.querySelector('#food-container')
const coffeeContainer = document.querySelector('#coffee-container')
const newComboBtn = document.querySelector('#new-combo')

async function fetchFood() {
  foodContainer.innerHTML = '<div class="loading-text">Preparando seu prato...</div>'
  try {
    const response = await fetch('https://foodish-api.com/api/')
    const data = await response.json()
    foodContainer.innerHTML = `<img src="${data.image}" alt="Prato aleatório" class="menu-img" />`
  } catch (error) {
    foodContainer.innerHTML = '<div class="error-text">Não foi possível carregar o prato 😔</div>'
    console.error('Erro ao buscar comida:', error)
  }
}

async function fetchCoffee() {
  coffeeContainer.innerHTML = '<div class="loading-text">Passando seu café...</div>'
  const img = new Image()
  img.alt = 'Café aleatório'
  img.className = 'menu-img'
  img.src = `https://coffee.alexflipnote.dev/random?${Date.now()}`
  img.onload = () => {
    coffeeContainer.innerHTML = ''
    coffeeContainer.appendChild(img)
  }
  img.onerror = () => {
    coffeeContainer.innerHTML = '<div class="error-text">Não foi possível carregar o café 😔</div>'
  }
}

async function fetchCombo() {
  newComboBtn.disabled = true
  newComboBtn.textContent = 'Preparando... ⏳'
  await Promise.all([fetchFood(), fetchCoffee()])
  newComboBtn.disabled = false
  newComboBtn.textContent = 'Novo Combo ✨'
}

// Carregar combo ao abrir a página
fetchCombo()

// Novo combo ao clicar
newComboBtn.addEventListener('click', fetchCombo)
