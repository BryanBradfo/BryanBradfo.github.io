// /* ceci est un commentaire js */

// // chaine de caractère : string 

// let myVar = "ma variable";
// myVar = "variable changée";

// const myVar2 = "ma variable 2";

// // console.log(myVar);

// // boolean
// let isTrue = true;
// let isFalse = false;

// // console.log(isFalse);

// // chiffres et opérateurs

// let chiffre1 = 4;
// let chiffre2 = 3;

// // console.log(typeof chiffre1, typeof chiffre2);

// // template string, littéraux de gabarits et concat

// let test = 'test ' + myVar + 'value';
// let test2 = `test ${myVar} dzqdqzd `;

// // console.log(test2);
// /*
// if (chiffre1 <= 3) {
//   console.log('condition est valide');
// } else if (chiffre1 <= 4) {
//   console.log('je passe la');
// } else {
//   console.log('condition pas valide')
// }
// */

// // tableaux 

// let array = ['item 1', 'item 2', 'item 3', 'item 4'];
// // console.log(array[3]);

// // objets

// let obj = {
//   title: 'Mon titre',
//   description: 'Ma description'
// }

// // console.log(obj.title, obj.description);

// // les boucles, while, for, foreach
// /*
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// array.forEach(item => {
//   console.log(item);
// })
// */

// // fonctions 

// /*function myFunction(item, item2) {
//   console.log(item, item2);
// }*/

// const myFunction = (item, item2) => {
//   // console.log(item, item2);
// }

// myFunction('toto', 5);
// myFunction('tata', 6);

// const calcul = (nb1, nb2) => {
//   return nb1 + nb1;
// }

// let result = calcul(4, 5);
// // console.log(result);

// // interagir avec le dom // methode, propriete, evement

// // selectors
// // let header = document.querySelector('.header');
// // console.log(header);

// // let grids = document.querySelectorAll('.grid');
// /*
// grids.forEach(grid => {
//   grid.classList.add('titi');
//   console.log(grid)
// });
// */
// // evenements les plus courants
// /*
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM entièrement chargé et analysé");
// });
// header.addEventListener('click', (e) => {
//   console.log(e);
// });
// header.addEventListener('mouseenter', (e) => {
//   console.log('souris entre');
// });*/

// // insertion dom et navigation dans le dom

// let div = document.createElement('div');
// div.classList.add('top');
// div.innerHTML = `<span>Top zone</span>`;
// // console.log(header.nextElementSibling);

// // fin de la théorie 




///////////////////////////////////////////////////////////////
//////                    APPLICATIONS                   //////
///////////////////////////////////////////////////////////////



/* Menu mobile */

function menuMobile() {

  // Cibler le boutton
  const btn = document.querySelector('.burger');

  // Cibler le header
  const header = document.querySelector('.header'); 

  // Détecter tous les liens qui sont sur la navbar (barre de navigation en haut)
  const links = document.querySelectorAll('.navbar a');

  // Ajouter un effet après appuyé sur le bouton
  btn.addEventListener('click', () => {
    // Ajouter le menu
    header.classList.toggle('show-nav'); 
    //Toggle permet d'alterner entre deux actions (si on reclique)
  });


  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav'); // Ferme le menu après avoir cliqué
    });
  });
}

// On oublie pas d'appeler la fonction à la fin.
menuMobile();




/* Porfolio */

function tabsFilters() {

  //Cibler les tabs
  const tabs = document.querySelectorAll('.portfolio-filters a');

  //Cibler les cards
  const projets = document.querySelectorAll('.portfolio .card');

  //Reset les active (sinon bouton toujours "appuyé")
  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }


  const showProjets = (elem) => {
    console.log(elem);
    
    //Lister les projets
    projets.forEach(projet => {


      let filter = projet.getAttribute('data-category');

      //Si "all", on affiche tout le monde ! 
      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        //J'arrête mon action après
        return
      }

      // console.log('tutu');

      // ne sera pas pris en compte ! grâce à "return"
      if (filter !== elem) {
        projet.parentNode.classList.add('hide');
      } else {
        projet.parentNode.classList.remove('hide');
      }

      // option pour les plus motivés - opérateur ternaire
      //                         si c'est bon alors                               sinon
      // filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {

    //Comme c'est un lien, on rajoute la variable "event"
    elem.addEventListener('click', (event) => {
      //"Je ne veux pas que tu suive mon action"
      event.preventDefault();

      //Obtenir son attribut
      let filter = elem.getAttribute('data-filter');

      //Envoie le filtre sur lequel j'ai cliqué
      showProjets(filter)

      //On reset tout le monde
      resetActiveLinks();

      //Activer le bouton sur lequel on a appuyé
      elem.classList.add('active');
    });
  })
}

// On oublie pas d'appeler la fonction à la fin.
tabsFilters()




function showProjectDetails() {

  //Cibler les card__link
  const links = document.querySelectorAll('.card__link');

  //Cibler les modal
  const modals = document.querySelectorAll('.modal');

  //Créer un bouton
  const btns = document.querySelectorAll('.modal__close');

  //Enlever la classe "show"
  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      //Pour pas que ça suit l'événement du lien
      event.preventDefault(); 

      //Aller chercher la modal en question : choper l'identifiant PUIS 
      // rajouter un élément qui s'appelle "show" pour afficher le modal
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      //Faire un callback pour enlever tous les SHOWS
      hideModals();
    });
  });

}

// On oublie pas d'appeler la fonction à la fin.
showProjectDetails();

// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();