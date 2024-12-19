let tally = [
    { name: "Troubleshooting", count: 0 },
    { name: "Playing", count: 0 },
    { name: "Cycling", count: 0 },
    { name: "Sleeping", count: 0 },
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
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count),
                            backgroundColor: ["blue", "gray", "green", "red", "yellow"]
                        }
                    ]
                }
            }
        )
    );
}
$('#surveyOptions .btn').click(event => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
    console.log(tally);
});
$('#generateSurveyResult').click(() => {
    chartReferences.forEach(chart => chart.destroy())
    for (let i = 0; i < 3; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chartType');
        surveyResultGenerator(ctx, tally, chartType);
    }
});