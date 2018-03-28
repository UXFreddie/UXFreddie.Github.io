// Make it rain!

//When the user clicks the portfolio
  //if the screen is blank
    //show the Founding Moms
  //else
    //do nothing
var sentences=[

  'Building Wonderfully Intuitive Products That Simplify the User Experience is What I Enjoy.',
  'While in undergrad, I studied psychology and worked as a public policy researcher. I enjoyed the problem solving aspect of my work, but wanted something more technical and applied.',
  'A role that allowed me to act on my insights beyond the research process was calling. I discovered UX, and fast tracked my career by enrolling at General Assembly right after college.',
  'I am now a skilled UX designer with an apt for solving UX/UI problems through research backed insights.',
  'Currently, a setting where I can touch on many project topic areas at once is what interests me most. My goal is to continue rounding my design skills, while helping propel a brand.',

]

var index;

$('.about').on('click', function(event) {
  event.preventDefault();
  index=0
  $('h3').fadeToggle('slow');
  $('h3').text(sentences[0])
  $('#chevron').fadeToggle('slow');
});

$('#chevron').on('click', function() {
if (index < sentences.length){
  index++
  $('h3').text(sentences[index]);
}
if (index==sentences.length) {
  $('#chevron').fadeOut('slow');
}
 });

// $("#chevron").on('click', function() {
//   $('h3').fadeIn('slow');
//   $('h3').removeClass();
//   $('h3').text('A role that allowed me to act on my insights beyond the research process was calling. I discovered UX, and fast tracked my career by enrolling at General Assembly right after college.');
// });
