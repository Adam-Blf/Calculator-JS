/**
 * Scientific Calculator
 * Author: Adam Beloucif
 * Description: Calculatrice scientifique avec historique et opérations avancées
 */

// ===================================================
// STATE MANAGEMENT
// ===================================================
let currentValue = '0';
let previousValue = '';
let operation = null;
let shouldResetScreen = false;
let calculationHistory = [];

// ===================================================
// DOM ELEMENTS
// ===================================================
const elements = {
    current: document.getElementById('current'),
    history: document.getElementById('history'),
    historyPanel: document.getElementById('historyPanel'),
    historyList: document.getElementById('historyList'),
    toggleHistory: document.getElementById('toggleHistory'),
    clearHistory: document.getElementById('clearHistory'),
    buttons: document.querySelectorAll('.btn')
};

// ===================================================
// CALCULATOR LOGIC
// ===================================================
function appendNumber(number) {
    if (shouldResetScreen) {
        currentValue = '';
        shouldResetScreen = false;
    }
    
    if (currentValue === '0' && number !== '.') {
        currentValue = number;
    } else if (currentValue.length < 15) {
        currentValue += number;
    }
    
    updateDisplay();
}

function appendDecimal() {
    if (shouldResetScreen) {
        currentValue = '0';
        shouldResetScreen = false;
    }
    
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
    
    updateDisplay();
}

function chooseOperation(operator) {
    if (previousValue !== '') {
        calculate();
    }
    
    operation = operator;
    previousValue = currentValue;
    shouldResetScreen = true;
    
    updateHistoryDisplay();
}

function calculate() {
    if (operation === null || previousValue === '') return;
    
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    let result;
    let operatorSymbol;
    
    switch (operation) {
        case '+':
            result = prev + current;
            operatorSymbol = '+';
            break;
        case '-':
            result = prev - current;
            operatorSymbol = '−';
            break;
        case '*':
            result = prev * current;
            operatorSymbol = '×';
            break;
        case '/':
            if (current === 0) {
                alert('❌ Division par zéro impossible !');
                clear();
                return;
            }
            result = prev / current;
            operatorSymbol = '÷';
            break;
        default:
            return;
    }
    
    // Add to history
    addToHistory(`${prev} ${operatorSymbol} ${current} = ${result}`);
    
    currentValue = roundResult(result).toString();
    operation = null;
    previousValue = '';
    shouldResetScreen = true;
    
    updateDisplay();
    updateHistoryDisplay();
}

function roundResult(number) {
    return Math.round(number * 100000000) / 100000000;
}

function clear() {
    currentValue = '0';
    previousValue = '';
    operation = null;
    shouldResetScreen = false;
    
    updateDisplay();
    updateHistoryDisplay();
}

function deleteNumber() {
    if (currentValue.length === 1 || currentValue === '0') {
        currentValue = '0';
    } else {
        currentValue = currentValue.slice(0, -1);
    }
    
    updateDisplay();
}

function calculatePercent() {
    const current = parseFloat(currentValue);
    if (isNaN(current)) return;
    
    currentValue = (current / 100).toString();
    updateDisplay();
}

function calculateSquareRoot() {
    const current = parseFloat(currentValue);
    if (isNaN(current)) return;
    
    if (current < 0) {
        alert('❌ Racine carrée d\'un nombre négatif impossible !');
        return;
    }
    
    const result = Math.sqrt(current);
    addToHistory(`√${current} = ${result}`);
    
    currentValue = roundResult(result).toString();
    updateDisplay();
}

function calculatePower() {
    const current = parseFloat(currentValue);
    if (isNaN(current)) return;
    
    const result = current * current;
    addToHistory(`${current}² = ${result}`);
    
    currentValue = roundResult(result).toString();
    updateDisplay();
}

function insertPi() {
    currentValue = Math.PI.toString();
    shouldResetScreen = true;
    updateDisplay();
}

// ===================================================
// UI UPDATES
// ===================================================
function updateDisplay() {
    elements.current.textContent = formatNumber(currentValue);
}

function updateHistoryDisplay() {
    if (operation && previousValue) {
        const operatorSymbols = {
            '+': '+',
            '-': '−',
            '*': '×',
            '/': '÷'
        };
        elements.history.textContent = `${formatNumber(previousValue)} ${operatorSymbols[operation]}`;
    } else {
        elements.history.textContent = '';
    }
}

function formatNumber(number) {
    if (number.includes('.')) {
        const parts = number.split('.');
        if (parts[0].length > 12) {
            return parseFloat(number).toExponential(6);
        }
        return number;
    }
    
    if (number.length > 12) {
        return parseFloat(number).toExponential(6);
    }
    
    return number;
}

// ===================================================
// HISTORY MANAGEMENT
// ===================================================
function addToHistory(calculation) {
    calculationHistory.unshift(calculation);
    
    // Keep only last 50 calculations
    if (calculationHistory.length > 50) {
        calculationHistory.pop();
    }
    
    saveHistory();
    updateHistoryList();
}

function updateHistoryList() {
    if (calculationHistory.length === 0) {
        elements.historyList.innerHTML = '<p class="empty-history">Aucun calcul pour le moment</p>';
        return;
    }
    
    elements.historyList.innerHTML = '';
    
    calculationHistory.forEach((calc, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = calc;
        
        historyItem.addEventListener('click', () => {
            const result = calc.split('=')[1].trim();
            currentValue = result;
            updateDisplay();
        });
        
        elements.historyList.appendChild(historyItem);
    });
}

function clearHistory() {
    if (confirm('Voulez-vous vraiment effacer tout l\'historique ?')) {
        calculationHistory = [];
        saveHistory();
        updateHistoryList();
    }
}

function saveHistory() {
    localStorage.setItem('calculatorHistory', JSON.stringify(calculationHistory));
}

function loadHistory() {
    const saved = localStorage.getItem('calculatorHistory');
    if (saved) {
        calculationHistory = JSON.parse(saved);
        updateHistoryList();
    }
}

// ===================================================
// EVENT LISTENERS
// ===================================================
elements.buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        
        switch (action) {
            case 'number':
                appendNumber(button.dataset.number);
                break;
            case 'operator':
                chooseOperation(button.dataset.operator);
                break;
            case 'equals':
                calculate();
                break;
            case 'clear':
                clear();
                break;
            case 'delete':
                deleteNumber();
                break;
            case 'decimal':
                appendDecimal();
                break;
            case 'percent':
                calculatePercent();
                break;
            case 'sqrt':
                calculateSquareRoot();
                break;
            case 'power':
                calculatePower();
                break;
            case 'pi':
                insertPi();
                break;
        }
        
        // Add button animation
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100);
    });
});

// Toggle History Panel
elements.toggleHistory.addEventListener('click', () => {
    elements.historyPanel.classList.toggle('show');
    elements.toggleHistory.textContent = elements.historyPanel.classList.contains('show') 
        ? '✖️ Fermer' 
        : '📋 Historique';
});

// Clear History
elements.clearHistory.addEventListener('click', clearHistory);

// Keyboard Support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendDecimal();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        chooseOperation(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    } else if (e.key === 'Escape') {
        clear();
    } else if (e.key === 'Backspace') {
        deleteNumber();
    }
});

// ===================================================
// INITIALIZATION
// ===================================================
loadHistory();
updateDisplay();

console.log('🧮 Calculatrice chargée avec succès !');
console.log('📋 Raccourcis clavier :');
console.log('  • 0-9 : Chiffres');
console.log('  • +, -, *, / : Opérations');
console.log('  • Enter : Calculer');
console.log('  • Escape : Effacer');
console.log('  • Backspace : Supprimer');
