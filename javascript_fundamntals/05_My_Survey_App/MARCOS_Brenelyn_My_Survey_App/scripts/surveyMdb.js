let tally = [
    { name: "going-out", count: 0 },
    { name: "movies", count: 0 },
    { name: "sleep-all-day", count: 0 },
    { name: "coffee-is-life", count: 0 },
    { name: "stress-eating", count: 0 },

];

const chartReferences = [];

const surveyResultGenerator = (ctx, data, chartType) => {

    chartReferences.push (new Chart(
        ctx,
        {
            type: chartType,
            data: {
                labels: data.map(row => row.name),
                datasets: [
                    {
                        label: 'Preferred Stress Habits' ,
                        data: data.map(row => row.count),
                        backgroundColor: ["black", "green", "red", "blue", "yellow"]
                    }
                ]
            }
        }
    )
);
}

$('#surveyOptions .btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
    console.log(tally);
});

$('#generateSurveyResults').click(() => {
    chartReferences.forEach(chart => chart.destroy());
    for (let i = 0; i<4; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chartType');
        surveyResultGenerator(ctx, tally, chartType);
    }
});
