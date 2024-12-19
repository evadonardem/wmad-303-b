let tally = [
    { name: "Eat All You Can", count: 0 },
    { name: "Movie Madnesss", count: 0 },
    { name: "Travel Outside Country", count: 0 },
    { name: "Sleep All Day", count: 0 },
   
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
                        label: 'Preferred Stress Habits',
                        data: data.map(row => row.count),
                        backgroundColor: ["blue", "fusia", "green", "red"]
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
