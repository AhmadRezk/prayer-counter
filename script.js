const prayerDropdown = document.getElementById('prayerDropdown');
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

const INITIAL_PRAYERS = [
    { id: 1, name: 'Prayer 1' },
    { id: 2, name: 'Prayer 2' }
];
const ADDITIONAL_PRAYERS = [
    { id: 3, name: 'Prayer 3' },
    { id: 4, name: 'Prayer 4' }
];
let count = 0;

// Load prayers into dropdown
const loadPrayers = () => {
    const allPrayers = [...INITIAL_PRAYERS, ...ADDITIONAL_PRAYERS];
    allPrayers.forEach(prayer => {
        const option = document.createElement('option');
        option.value = prayer.id;
        option.textContent = prayer.name;
        prayerDropdown.appendChild(option);
    });
};

// Increment count
const incrementCount = () => {
    count++;
    updateDisplay();
};

// Reset count
const resetCount = () => {
    count = 0;
    updateDisplay();
};

// Update display with Indian numerals
const updateDisplay = () => {
    const indianNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    const formattedCount = count.toString().split('').map(digit => indianNumerals[parseInt(digit)]).join('');
    countDisplay.textContent = formattedCount;
};

// Initialize the app
const initializeApp = () => {
    loadPrayers();
    incrementBtn.addEventListener('click', incrementCount);
    resetBtn.addEventListener('click', resetCount);
    updateDisplay();
};

// Run the app
initializeApp();
