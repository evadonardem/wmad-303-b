let tally = [
    {name: "eating", count: 0},
    {name: "movie-madness", count: 0},
    {name: "sleep-all-day", count: 0},
    {name: "travel-anywhere", count: 0}
];

const chartReferences = [];

const surveyResultGenerator = (ctx, data, chartType) => {
    chartReferences.push(
    new Chart(
        ctx,
        {
            type: chartType,
            data: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Prefered Stress Habits',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    )
)};

$('#surveyOptions .btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
});

$('#generateSurveyResult').click(() => {
    chartReferences.forEach(chart => chart.destroy());

    for(let i = 0; i < 4; i++){
        const ctx = document.getElementById(`surveyResult${i}`);
        const charType = $(ctx).data('chartType');
        surveyResultGenerator(ctx, tally, charType);
    }
});