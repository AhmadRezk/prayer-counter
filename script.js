// Object mapping names to image URLs
const NAME_TO_IMAGE = {
    "الشيخ محمد الشيخ ابراهيم الشيخ محمد عثمان": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/1.png",
        "الشيخ ابراهيم الشيخ محمد عثمان": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/2.png",
        "الشيخ محمد عثمان عبده البرهاني": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/3.png",
        "سيدي احمد عربي الشرنوبي": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/4.png",
        "سيدي موسى ابو العمران": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/5.png",
        "سيدي ابراهيم القرشي الدسوقي": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/6.png",
        "سيدي أبو الحسن الشاذلي": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/7.png",
        "سيدي عبد السلام إبن بشيش": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/8.png",
        "سيدنا ومولانا الإمام الحسين": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/9.png",
        "سيدنا ومولانا الإمام علي بن ابي طالب": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/10.png",
        "زيادة في شرف المصطفى ﷺ": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/11.png",
        "سيدتنا السيدة زينب": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/12.png",
};

// Array of initial prayers
const INITIAL_PRAYERS = [
    { name: "الشيخ محمد الشيخ ابراهيم الشيخ محمد عثمان", content: "الفاتحة" },
    { name: "الشيخ محمد الشيخ ابراهيم الشيخ محمد عثمان", content: "الصمدية" },
    { name: "الشيخ ابراهيم الشيخ محمد عثمان", content: "الفاتحة" },
    { name: "الشيخ ابراهيم الشيخ محمد عثمان", content: "الصمدية" },
    { name: "الشيخ محمد عثمان عبده البرهاني", content: "الفاتحة" },
    { name: "الشيخ محمد عثمان عبده البرهاني", content: "الصمدية" },
    { name: "سيدي احمد عربي الشرنوبي", content: "الفاتحة" },
    { name: "سيدي احمد عربي الشرنوبي", content: "الصمدية" },
    { name: "سيدي موسى ابو العمران", content: "الفاتحة" },
    { name: "سيدي موسى ابو العمران", content: "الصمدية" },
    { name: "سيدي ابراهيم القرشي الدسوقي", content: "الفاتحة" },
    { name: "سيدي ابراهيم القرشي الدسوقي", content: "الصمدية" },
    { name: "سيدي أبو الحسن الشاذلي", content: "الفاتحة" },
    { name: "سيدي أبو الحسن الشاذلي", content: "الصمدية" },
    { name: "سيدي عبد السلام إبن بشيش", content: "الفاتحة" },
    { name: "سيدي عبد السلام إبن بشيش", content: "الصمدية" },
    { name: "سيدنا ومولانا الإمام الحسين", content: "الفاتحة" },
    { name: "سيدنا ومولانا الإمام الحسين", content: "الصمدية" },
    { name: "سيدنا ومولانا الإمام علي بن ابي طالب", content: "الفاتحة" },
    { name: "سيدنا ومولانا الإمام علي بن ابي طالب", content: "الصمدية" },
    { name: "زيادة في شرف المصطفى ﷺ", content: "الفاتحة" },
    { name: "زيادة في شرف المصطفى ﷺ", content: "الصمدية" },
];

// Array of additional prayers
const ADDITIONAL_PRAYERS = [
    { name: "سيدتنا السيدة زينب", content: "الفاتحة", image: "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/12.png" },
    { name: "سيدتنا السيدة زينب", content: "الصمدية", image: "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/12.png" },
    { name: "الشيخ سيد أحمد", content: "الفاتحة" },
    { name: "الشيخ سيد أحمد", content: "الصمدية" }
];

// Initialize state and audio elements
let state = null;
const clickSound = document.getElementById('click-sound');
const transitionSound = document.getElementById('transition-sound');

// Function to convert numbers to Indian numerals
function toIndianNumerals(number) {
    const indianNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map(digit => indianNumerals[parseInt(digit)]).join('');
}

// Function to get prayers based on selected option and inclusion of additional prayers
function getPrayers(selectedOption, includeMore) {
    const [count1, count2] = selectedOption.split(',').map(Number);
    const prayers = [...INITIAL_PRAYERS, ...(includeMore ? ADDITIONAL_PRAYERS : [])].map((prayer, index) => ({
        ...prayer,
        count: index % 2 === 0 ? count1 : count2,
        image: prayer.image || NAME_TO_IMAGE[prayer.name] || '/placeholder.svg'
    }));
    console.log('All prayers:', prayers);
    return prayers;
}

// Function to update the UI based on current state
function updateUI() {
    if (!state || state.finished) return;
    const prayer = state.prayers[state.currentIndex];
    console.log('Current prayer:', prayer);
    document.getElementById('prayer-image').src = prayer.image || '';
    document.getElementById('prayer-info').innerHTML = `${prayer.name}<br>${prayer.content}`;
    document.getElementById('count-display').textContent = `${toIndianNumerals(state.currentCount)} / ${toIndianNumerals(prayer.count)}`;

    // Update pie chart progress
    const progressPercentage = (state.totalCount / state.totalCountable) * 100;
    const pieChart = document.getElementById('pie-chart-progress');
    pieChart.style.background = `conic-gradient(#008000 ${progressPercentage * 3.6}deg, #e0e0e0 0deg)`;
    pieChart.setAttribute('data-value', `${Math.round(progressPercentage)}%`);

    // Save state to localStorage
    localStorage.setItem('prayerCounterState', JSON.stringify(state));
}

// Function to start the prayer counter
function startPrayers(selectedOption, includeMore) {
    const prayers = getPrayers(selectedOption, includeMore);
    const totalCountable = prayers.reduce((sum, prayer) => sum + prayer.count, 0);
    state = {
        prayers: prayers,
        currentIndex: 0,
        currentCount: 0,
        totalCount: 0,
        completedCount: 0,
        finished: false,
        totalCountable: totalCountable,
        selectedOption: selectedOption,
        includeMore: includeMore
    };
    // Hide start page and show prayer section
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('prayer-section').classList.remove('hidden');
    updateUI();
}

// Function to update the prayer count
function updatePrayerCount() {
    if (!state || state.finished) return;

    state.currentCount++;
    state.totalCount++;

    if (state.currentCount >= state.prayers[state.currentIndex].count) {
        state.currentIndex++;
        state.currentCount = 0;
        state.completedCount++;
        transitionSound.play();
    }

    state.finished = state.currentIndex >= state.prayers.length;

    updateUI();
    return state.finished;
}

// Function to skip to the next prayer
function skipPrayer() {
    if (!state || state.finished) return;

    if (state.currentIndex < state.prayers.length - 1) {
        const remainingCount = state.prayers[state.currentIndex].count - state.currentCount;
        state.currentIndex++;
        state.currentCount = 0;
        state.totalCount += remainingCount;
        state.completedCount++;
        transitionSound.play();
    } else {
        state.completedCount++;
    }

    state.finished = state.currentIndex >= state.prayers.length;

    updateUI();
    return state.finished;
}

// Function to reset the prayer counter
function resetPrayers() {
    state = null;
    localStorage.removeItem('prayerCounterState');
    document.getElementById('start-page').classList.remove('hidden');
    document.getElementById('prayer-section').classList.add('hidden');
    document.getElementById('pie-chart-progress').style.background = 'conic-gradient(#008000 0deg, #e0e0e0 0deg)';
    document.getElementById('pie-chart-progress').setAttribute('data-value', '0%');
}

// Event listener for the start button
document.getElementById('start-button').addEventListener('click', function() {
    const selectedOption = document.getElementById('count-option').value;
    const includeMore = document.getElementById('include-more').checked;

    startPrayers(selectedOption, includeMore);
    
});

// Event listener for the counting area
document.getElementById('counting-area').addEventListener('click', function(event) {
    if (event.target.id !== 'skip-button' && event.target.id !== 'reset-button') {
        if (!state || state.finished) return;
        clickSound.play();
        const finished = updatePrayerCount();
        if (finished) {
            alert('جميع الفواتح اكتملت!');
            resetPrayers();
        }
    }
});

// Event listener for the skip button
document.getElementById('skip-button').addEventListener('click', function() {
    if (!state || state.finished) return;
    const finished = skipPrayer();
    if (finished) {
        alert('جميع الفواتح اكتملت!');
        resetPrayers();
    }
});

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', resetPrayers);

// Load saved state on page load
window.addEventListener('load', function() {
    const savedState = localStorage.getItem('prayerCounterState');
    if (savedState) {
        state = JSON
