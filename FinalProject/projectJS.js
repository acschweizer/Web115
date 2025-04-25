document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mealForm');
    const clearBtn = document.getElementById('clearbtn');
    const submitBtn = document.getElementById('submitbtn');
    const inputs = form.querySelectorAll('input, textarea');

    // Clear form
    clearBtn.addEventListener('click', () => {
        inputs.forEach(input => input.value = '');
    });

    // Submission

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // This section will be for validating emails
        const userEmail = document.getElementById('userEmail').value;
        const userName = document.getElementById('userName').value;
        const userGoal = document.getElementById('userGoal').value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(userEmail)) {
            alert('Please enter a vaild email adress!');
            return;
        }

        // Grabbing meal inputs
        const mealInputs = {
            monday: {
                breakfast: document.querySelector('[name="monBreakfast"]').value,
                snack1: document.querySelector('[name="monSnack1"]').value,
                lunch: document.querySelector('[name="monLunch"]').value,
                snack2: document.querySelector('[name="monSnack2"]').value,
                dinner: document.querySelector('[name="monDinner"]').value,
            },
            tuesday: {
                breakfast: document.querySelector('[name="tueBreakfast"]').value,
                snack1: document.querySelector('[name="tueSnack1"]').value,
                lunch: document.querySelector('[name="tueLunch"]').value,
                snack2: document.querySelector('[name="tueSnack2"]').value,
                dinner: document.querySelector('[name="tueDinner"]').value,
            },
            wednesday: {
                breakfast: document.querySelector('[name="wedBreakfast"]').value,
                snack1: document.querySelector('[name="wedSnack1"]').value,
                lunch: document.querySelector('[name="wedLunch"]').value,
                snack2: document.querySelector('[name="wedSnack2"]').value,
                dinner: document.querySelector('[name="wedDinner"]').value,
            },
            thursday: {
                breakfast: document.querySelector('[name="thuBreakfast"]').value,
                snack1: document.querySelector('[name="thuSnack1"]').value,
                lunch: document.querySelector('[name="thuLunch"]').value,
                snack2: document.querySelector('[name="thuSnack2"]').value,
                dinner: document.querySelector('[name="thuDinner"]').value,
            },
            friday: {
                breakfast: document.querySelector('[name="friBreakfast"]').value,
                snack1: document.querySelector('[name="friSnack1"]').value,
                lunch: document.querySelector('[name="friLunch"]').value,
                snack2: document.querySelector('[name="friSnack2"]').value,
                dinner: document.querySelector('[name="friDinner"]').value,
            },
            saturday: {
                breakfast: document.querySelector('[name="satBreakfast"]').value,
                snack1: document.querySelector('[name="satSnack1"]').value,
                lunch: document.querySelector('[name="satLunch"]').value,
                snack2: document.querySelector('[name="satSnack2"]').value,
                dinner: document.querySelector('[name="satDinner"]').value,
            },
            sunday: {
                breakfast: document.querySelector('[name="sunBreakfast"]').value,
                snack1: document.querySelector('[name="sunSnack1"]').value,
                lunch: document.querySelector('[name="sunLunch"]').value,
                snack2: document.querySelector('[name="sunSnack2"]').value,
                dinner: document.querySelector('[name="sunDinner"]').value,
            }
        };

        const mealPage = `
            <html>
        <head>
            <title>Meal Plan for ${userName}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    background-color: #f4f4f4;
                    color: #333;
                }
                #banner {
                    background-color: #4CAF50;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                    background-color: white;
                    border-radius: 10px;
                    overflow: hidden;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: center;
                }
                th {
                    background-color: #4CAF50;
                    color: white;
                }
                button {
                    margin-top: 20px;
                    padding: 10px 15px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div id='banner'>
                <h1>Meal Plan for ${userName}</h1>
                <p><strong>Email:</strong> ${userEmail}</p>
                <p><strong>Goal for the week:</strong> ${userGoal}</p>
            </div>

            <h2>Weekly Meal Plan</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Snack 1</th>
                        <th>Lunch</th>
                        <th>Snack 2</th>
                        <th>Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.keys(mealInputs).map(day => `
                        <tr>
                            <td>${day.charAt(0).toUpperCase() + day.slice(1)}</td>
                            <td>${mealInputs[day].breakfast}</td>
                            <td>${mealInputs[day].snack1}</td>
                            <td>${mealInputs[day].lunch}</td>
                            <td>${mealInputs[day].snack2}</td>
                            <td>${mealInputs[day].dinner}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <button onclick="window.print()">Print Meal Plan</button>
        </body>
    </html>
`;

        const newWindow = window.open();
        newWindow.document.write(mealPage)
        newWindow.document.close();
    });
});