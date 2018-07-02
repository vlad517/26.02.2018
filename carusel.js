var slides=[

  {
    title: "my first slide",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnOiRPfYhseywenzQSMImlXzXPHnzpQyo2bVxndex9O25y9pQxXA"
  },
  {
    title: "my second slide",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0elxzt03U2lOptvU7MkA26ex7cPeAUipCTdGsxKrJbFvHtPy9ig"
  },
  {
    title: "my last slide",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKWPN4-_FO6v9LGpzfbPG9cRu0TEvJkaebMtKuhFhD2itF8O6"

    }
];



function showSlide(index){
      //console.log(slides[index]);
      var div= document.body.children[0];
      div.innerHTML += `
      <div>
      <h2>${slides[index].title}</h2>
      <img src=" ${slides[index].url}">
      </div>
      `;

}
function showCarusel(){
  //clear
  var div= document.body.children[0];
  div.innerHTML='';

  for(i=0 ; i<3; i++)
  showSlide(i)
}

function prev(){

  //push,pop,  shift,unshift
    slides.push(slides.shift());

  showCarusel()



}
function next(){

  slides.unshift(slides.pop());
  showCarusel()



}












////////////////////////////
showCarusel();
