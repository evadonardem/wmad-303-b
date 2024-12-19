let tally = [
    { name: "movie-marathon", count: 0 },
    { name: "sleeping-all-day", count: 0 },
    { name: "traveling", count: 0 },
    { name: "eating", count: 0 },
];

const chartReferences = [];
const surveyResultGenerator = (ctx, data, chartType) => {
    const backgroundColors = [
        '#dc3545', 
        '#0d6efd', 
        '#198754', 
        '#ffc107' 
    ];

    const chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: data.map(row => row.name),
            datasets: [{
                label: 'Preferred Stress Habits',
                data: data.map(row => row.count),
                backgroundColor: backgroundColors,
            }]
        }
    });
    chartReferences.push(chart);
};

$('#surveyOptions .btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
    console.log(tally);
});

$('#generate-survey-result').click(() => {
    // Clear previous charts
    chartReferences.forEach(chart => chart.destroy());
    chartReferences.length = 0; 

    for (let i = 0; i < 4; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chart-type'); 
        surveyResultGenerator(ctx, tally, chartType);
    }
});
