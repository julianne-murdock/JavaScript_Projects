 function my_Dictionary() { //this is my first dictionary
     const Animal = {
         Species:"Dog",
         Color:"Black",
         Breed:"Labrador",
         Age:5,
         Sound:"Bark!"
     };
     delete Animal.Sound;
     document.getElementById("Dictionary").innerHTML = Animal.Sound;
 }