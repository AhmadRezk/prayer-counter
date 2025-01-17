/* Global styles */
body {
    font-family: 'Amiri', serif;
    background-color: #f5f5f5;
    background-image: url("https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/background.jpeg");
    background-size: 600px 400px;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}

/* Main container styling */
.container {
    width: 100%;
    max-width: 540px;
    background-image: url("https://raw.githubusercontent.com/AhmadRezk/prayer-counter/main/Light%20mode.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 32px;
    position: relative;
    aspect-ratio: 1080 / 1920; /* Adjust this to match the exact aspect ratio of your image */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Content area styling */
.content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-height: 100%;
    box-sizing: border-box;
}

/* Form elements styling */
select, button {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    font-size: 18px;
    border: 2px solid #ffd700;
    border-radius: 8px;
    background-color: #fff;
    color: #008000;
    transition: all 0.3s ease;
}

/* Button specific styles */
select:focus, button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5);
}

button {
    background-color: #ffd700;
    color: #008000;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.1s;
}

button:hover {
    background-color: #ffec8b;
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
}

/* Reset button specific styles */
#reset-button {
    background-color: #ff6347;
    color: #fff;
}

#reset-button:hover {
    background-color: #ff4500;
}

/* Checkbox container styling */
.checkbox-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
}

/* Checkbox label styling */
.checkbox-container label {
    margin-right: 8px;
    font-size: 18px;
    color: #008000;
}

/* Prayer information styling */
#prayer-info {
    text-align: center;
    margin-bottom: 16px;
    font-size: 20px;
    color: #008000;
}

/* Prayer image styling */
#prayer-image {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 16px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 5px solid #ffd700;
    box-shadow: 0 0 0 5px #008000;
}

/* Count display styling */
#count-display {
    font-size: 48px;
    font-weight: bold;
    color: #008000;
    margin-bottom: 16px;
    text-align: center;
}

/* Hidden class */
.hidden {
    display: none;
}

/* Pie chart progress styling */
.pie-chart-progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(#008000 0deg, #e0e0e0 0deg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px auto;
}

.pie-chart-progress::before {
    content: attr(data-value);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #008000;
}

/* Counting area styling */
#counting-area {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 215, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 16px;
    cursor: pointer;
    border: 2px solid #ffd700;
    transition: all 0.3s ease;
}

#counting-area:hover {
    background-color: rgba(255, 215, 0, 0.2);
    transform: scale(1.02);
}

/* Start page styling */
#start-page {
    text-align: center;
    color: #008000;
}

#start-page h1 {
    font-size: 36px;
    margin-bottom: 20px;
    font-family: 'Aref Ruqaa', serif;
}

#start-page p {
    font-size: 18px;
    margin-bottom: 30px;
}

.scroll-container {
    max-height: 100%;
    overflow-y: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
}

.inner-content {
    width: 100%;
    max-width: 400px;
}

