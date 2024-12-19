let tally = [
  { name: "eat-all-you-can", count: 0 },
  { name: "movie-marathon", count: 0 },
  { name: "travel-outside-country", count: 0 },
  { name: "sleep-all-day", count: 0 },
];

const chartReference = [];
const surveyResultGenerator = (ctx, data, chartType) => {
  chartReference.push(
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: data.map(row => row.name),
        datasets: [
          {
            label: `Preferred Stress Habits`,
            data: data.map(row => row.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)', 
              'rgba(54, 162, 235, 0.6)', 
              'rgba(255, 206, 86, 0.6)',  
              'rgba(75, 192, 192, 0.6)',
            ]
          }
        ]
      }
    })
  );
}

$('#surveyOptions .btn').click((event) => {
  const stressHabit = $(event.target).data('stress-habit');
  tally.find(option => option.name === stressHabit).count++;

  console.log(tally);
});

$('#generateSurveyResult').click(() => {
  chartReference.forEach(chart => chart.destroy());
  for (let i = 0; i < 4; i++) {
    const ctx = document.getElementById(`surveyResult${i}`).getContext('2d'); 
    const chartType = $(ctx.canvas).data('chart-type');
    surveyResultGenerator(ctx, tally, chartType);
  }
});
