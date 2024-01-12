function calculer() {
//ma fonction que je j'effectue un calcul
  var nombre1 = parseFloat(document.getElementById('nombre1').value);
  //recupere le premier nombre (parsefloat convertir une chaîne de caractères en un nombre flottant )
  var nombre2 = parseFloat(document.getElementById('nombre2').value);
  //recupere le deuxieme nombre
  var operation = document.getElementById('operation').value;
  //recupere operation choisi 
  var resultat;
  //resultat

  switch(operation) {
    case '+':
        //si + ajoute les deux nombre  et calcul
      resultat = nombre1 + nombre2;
      break;
    case '-':
         //si - ajoute les deux nombre  et calcul
      resultat = nombre1 - nombre2;
      break;
    case '*':
         //si * ajoute les deux nombre  et calcul
      resultat = nombre1 * nombre2;
      break;
    case '/':
         //si / ajoute les deux nombre  et calcul
      if(nombre2 !== 0) {
        //verifie si le deuxième nombre n'est pas zéro 
        resultat = nombre1 / nombre2;
        //si cest ok resulat
      } else {
        //si non affiche un message d'erreur
        alert("Division par zéro !");
        return;
        // Sort de la fonction pour éviter de continuer avec le calcul
      }
      break;
    default:
        // Si l'opération n'est pas reconnue
      alert("Opération non reconnue !");
      // Affiche un message d'erreur
      return;
  }
 // Affiche une alerte avec le calcul et le résultat
  alert(nombre1 + " " + operation + " " + nombre2 + " = " + resultat);
}



function toggleCalculatrice(shouldShow) {
    //ma fonction interupteur pour affiché ou cacher 
    var calculatrice = document.getElementById('calculatrice');
    //recupere la calculatrice de en haut
    calculatrice.style.display = shouldShow ? 'block' : 'none';
    //si shouldshow = vrai , affiche si non block va rendre invisible mon element 
  }