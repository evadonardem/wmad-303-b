const tally = [
    { name: "eat-all-you-can", count: 0 },
    { name: "movie-marathon", count: 0 },
    { name: "sleeping", count: 0 },
    { name: "traveling", count: 0 }, // Changed from "playing-games" to "traveling"
];

const chartReferences = [];

const surveyResultGenerator = (ctx, data, chartType) => {
    const chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: data.map(row => row.name),
            datasets: [{
                label: 'Preferred Stress Habits',
                data: data.map(row => row.count),
                backgroundColor: ["magenta", "black", "brown", "orange"]
            }]
        }
    });
    chartReferences.push(chart);
};

$('#surveyOptions .btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    const option = tally.find((option) => option.name === stressHabit);
    if (option) {
        option.count++;
        console.log(tally);
    }
});

$('#generateSurveyResults').click(() => {
    // Destroy previous charts
    chartReferences.forEach(chart => chart.destroy());
    chartReferences.length = 0; // Clear the chartReferences array

    for (let i = 0; i < 4; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chart-type'); // Corrected data attribute
        surveyResultGenerator(ctx, tally, chartType);
    }
});