let tally = [
    { name: "eat_all_you_can", count: 0 },
    { name: "sleep_all_day", count: 0 },
    { name: "travel_all_around", count: 0 },
    { name: "KAPE_lang_sapat_na", count: 0 },
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
                            label: 'Preferred Stress Habits',
                            data: data.map(row => row.count),
                            backgroundColor: [ "blue", "red", "yellow", "green"
                            ] 
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