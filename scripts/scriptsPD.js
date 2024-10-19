let tally = [
    { name: "eating", count: 0 },
    { name: "movies", count: 0 },
    { name: "gaming", count: 0 },
    { name: "sleeping", count: 0 }
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
                            borderColor: [
                                '#dc3545',
                                '#ffc107',
                                '#198754',
                                '#0dcaf0'
                            ],
                            backgroundColor: [
                                'rgba(220, 53, 69, 0.4)',
                                'rgba(255, 193, 7, 0.4)',
                                'rgba(25, 135, 84, 0.4)',
                                'rgba(13, 202, 240, 0.4)'
                            ],
                            borderWidth: 1
                        }
                    ]
                }
            }
        ));
};

$('#surveyOptions .btn').click((event) => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
    console.log(tally);
});

$('#generate-survey-result').click(() => {
    chartReferences.forEach(chart => chart.destroy());
    for (let i = 0; i < 4; i++) {
        const ctx = document.getElementById(`surveyResult${i}`);
        const chartType = $(ctx).data('chartType');
        surveyResultGenerator(ctx, tally, chartType);
    };
});
