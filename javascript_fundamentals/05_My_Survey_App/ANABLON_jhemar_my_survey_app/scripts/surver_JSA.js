let tally = [
    {name: "eat", count: 0 },
    {name: "play", count: 0 },
    {name: "ride", count: 0 },
    {name: "sleep", count: 0 },
    {name: "drink", count: 0 },

];


const surveyResultGenerator = data => {

  new Chart(
    document.getElementById('surveyResult'),
    {
      type: 'bar',
      data: {
        labels: tally.map(row => row.name),
        datasets: [
          {
            label: 'Preffered Stress Habits',
            data: tally.map(row => row.count)
          }
        ]
      }
    }
  );
}
$('#surveyOptions .btn').click(event => {
    const stressHabit = $(event.target).data('stress-habit');
    tally.find((option) => option.name === stressHabit).count++;
    console.log(tally);


});

$('#generateSurveyResult').click(() => {
    surveyResultGenerator(tally);

});
