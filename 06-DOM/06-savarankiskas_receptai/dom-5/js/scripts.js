let porcijos = document.getElementById('porcijos')
let porcijosValue = document.getElementById('porcijosValue')
let selectedReceptas = document.getElementById('recipe1Div')

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
svg.setAttribute('width', '25')
svg.setAttribute('height', '25')
svg.setAttribute('viewBox', '0 0 25 25')
svg.style.position = 'absolute' 
svg.style.display = 'none' 
svg.innerHTML = `
  <circle cx="12.5" cy="12.5" r="12.5" fill="#0FC261"/>
  <line x1="6.35355" y1="9.64645" x2="12.3536" y2="15.6464" stroke="white"/>
  <line x1="11.6464" y1="15.6464" x2="19.6464" y2="7.64645" stroke="white"/>
`

const recipes = {
    recipe1: {
        "Vištienos krūtinėlės": "0.75 vienetai",
        "Iceberg salotų": "0.25 gūželė",
        "Raudonosios paprikos": "0.25 vienetas",
        "Salierų stiebų": "0.5 vienetai",
        "Pomidorų": "0.5 vienetai",
        "Žirnelių daigai": "25 gramai",
        "Ilgavaisių agurkų": "0.125 vieneto",
        "Prieskonių vištienai": "0.5 šaukšto",
        "Aliejaus": "0.5 šaukšto",
        "Obuolių acto": "0.75 šaukšto",
        "Rausvųjų svogūnų": "0.125 vieneto",
        "Alyvuogių aliejaus": "0.75 šaukšto"
    },
    recipe2: {
        "Miltai": "21.33 gramai",
        "Kiaušiniai": "0.27 vienetai",
        "Špinatai": "13.33 gramai",
        "Cukrus": "13.33 gramai",
        "Aliejus": "6.67 mililitrai",
        "Kepimo milteliai": "0.37 gramai",
        "Mėlynių": "74 gramai", 
        "Kondensuotas pienas": "26.47 gramai",
        "Grietinėlė (35% riebumo)": "16.67 mililitrai",
        "Vanduo": "9.33 mililitrai",
        "Želatina": "3 šaukštai minus 2 arbatiniai šaukšteliai (ištirpinti)"
    }, 
    recipe3: {
        "Vanduo": "100 mililitrai",
        "Maltos mėsos": "100 gramai", 
        "Konservuotų pomidorų savo sultyse": "83.33 gramai",
        "Makaronai": "66.67 gramai", 
        "Mocarela sūris": "33.33 gramai", 
        "Pomidorų pastos": "13.33 gramai", 
        "Svogūnas": "1/3 dalis", 
        "Česnakas": "1 skiltelė",
        "Alyvuogių aliejus": "1 šaukštas",
        "Paprikos milteliai": "1/3 šaukštas"
    }
}

function updateValuePosition() {
    const min = porcijos.min || 0  
    const max = porcijos.max || 100 
    const offset = porcijos.offsetWidth - 13
    const percentage = (porcijos.value - min) / (max - min)

    porcijosValue.textContent = porcijos.value 
    porcijosValue.style.left = `calc(${percentage * offset}px + 6%)`
    porcijosValue.style.width = `${offset}px`
}

porcijos.addEventListener('input', updateValuePosition)

function populateIngredientsList(selectedRecipe) {
    const ingredientList = document.getElementById('ingredientuSarasas')
    let porcijosValue = 1

    const porcijos = document.getElementById('porcijos')
    porcijos.addEventListener('input', function() {
        porcijosValue = parseInt(porcijos.value)
        updateIngredients(selectedRecipe) 
    })

    function updateIngredients(selectedRecipe) {
        ingredientList.innerHTML = ''

        const ingredients = recipes[selectedRecipe]

        if (!ingredients) {
            console.error(`Receptas nerastas: ${selectedRecipe}`)
            return
        }

        for (const [ingredient, quantity] of Object.entries(ingredients)) { 
            const listItem = document.createElement('li')
            const quantityText = document.createElement('strong')

            const quantityParts = quantity.split(' ')
            let numericQuantity = parseFloat(quantityParts[0]) 

            numericQuantity *= porcijosValue

            quantityText.textContent = `${(numericQuantity).toFixed(2)} ${quantityParts.slice(1).join(' ')}`
            listItem.textContent = `${ingredient}: `
            listItem.appendChild(quantityText)
            ingredientList.appendChild(listItem)
        }
    }

    updateIngredients(selectedRecipe)
}

function handleRecipeSelection(selectedRecipe, receptasDiv) {
    populateIngredientsList(selectedRecipe)

    if (!svg.parentNode) {
        document.body.appendChild(svg)
    }

    selectedReceptas.classList.remove('selected')
    receptasDiv.classList.add('selected')
    selectedReceptas = receptasDiv

    setSvgPosition()

    svg.style.display = 'block'
}

function setSvgPosition() {
    const rect = selectedReceptas.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft
  
    svg.style.top = `${rect.top + scrollTop - 10}px`
    svg.style.left = `${rect.right + scrollLeft - svg.clientWidth + 10}px`
  }

document.getElementById('recipe1Div').addEventListener('click', function() {
    handleRecipeSelection('recipe1', this)
})

document.getElementById('recipe2Div').addEventListener('click', function() {
    handleRecipeSelection('recipe2', this)
})

document.getElementById('recipe3Div').addEventListener('click', function() {
    handleRecipeSelection('recipe3', this)
})

populateIngredientsList('recipe1')
updateValuePosition()
handleRecipeSelection('recipe1', document.getElementById('recipe1Div'))

window.addEventListener('load', setSvgPosition)