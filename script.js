const NAME_TO_IMAGE = {
    "الشيخ محمد الشيخ ابراهيم الشيخ محمد عثمان": "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/1.png",
    // Add more mappings
};
const INITIAL_PRAYERS = [
    { name: "الشيخ محمد الشيخ ابراهيم الشيخ محمد عثمان", content: "الفاتحة" },
    // Add more prayers
];
const ADDITIONAL_PRAYERS = [
    { name: "سيدتنا السيدة زينب", content: "الفاتحة", image: "https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/12.png" },
    // Add more prayers
];
let state = null;

function toIndianNumerals(number) {
    const indianNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number.toString().split('').map(digit => indianNumerals[parseInt(digit)]).join('');
}

function getPrayers(selectedOption, includeMore) {
    const [count1, count2] = selectedOption.split(',').map(Number);
    return [...INITIAL_PRAYERS, ...(includeMore ? ADDITIONAL_PRAYERS : [])].map((prayer, index) => ({
        ...prayer,
        count: index % 2 === 0 ? count1 : count2,
        image: prayer.image || NAME_TO_IMAGE[prayer.name] || '/placeholder.svg'
    }));
}

function startPrayers(selectedOption, includeMore) {
    state = { prayers: getPrayers(selectedOption, includeMore), currentIndex: 0, finished: false };
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('prayer-section').classList.remove('hidden');
    updateUI();
}

function updateUI() {
    if (!state || state.finished) return;
    const prayer = state.prayers[state.currentIndex];
    document.getElementById('prayer-info').textContent = `${prayer.name} - ${prayer.content}`;
    // Update other elements
}

document.getElementById('start-button').addEventListener('click', () => {
    const selectedOption = document.getElementById('count-option').value;
    const includeMore = document.getElementById('include-more').checked;
    startPrayers(selectedOption, includeMore);
});
