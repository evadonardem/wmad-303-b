let tally = [
    { name: "travel-around-the-world", count: 0 },
    { name: "gym-exercise", count: 0 },
    { name: "eat-all-you-can", count: 0 },
    { name: "sleep-all-you-want", count: 0 },
    { name: "movie-madness", count: 0 },
    { name: "motorcycle-ride", count: 0 }
];

const chartReferences = [];

const surveyResultGenerator = (ctx, data, chartType) => {
    chartReferences.push(
        new Chart(ctx, {
            type: chartType,
            data: {
                labels: data.map(row => row.name),
                datasets: [{
                    label: 'Preferred Stress Habits',
                    data: data.map(row => row.count),
                    backgroundColor: [
                        'rgba(0, 123, 255, 0.6)', 
                        'rgba(40, 167, 69, 0.6)', 
                        'rgba(255, 193, 7, 0.6)',  
                        'rgba(23, 162, 184, 0.6)',
                        'rgba(108, 117, 125, 0.6)', 
                        'rgba(220, 53, 69, 0.6)'  
                    ],
                }],
            },
        })
    );
};

$('.btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    const habitIndex = tally.findIndex(option => option.name === stressHabit);
    if (habitIndex !== -1) {
        tally[habitIndex].count++;
    }
    console.log(tally);
});

$('#generate-survey-result').click(() => {
    chartReferences.forEach(chart => chart.destroy());
    chartReferences.length = 0; // Clear the references

    for (let i = 0; i < 4; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chart-type'); // Use 'chart-type' here
        surveyResultGenerator(ctx, tally, chartType);
    }
});
