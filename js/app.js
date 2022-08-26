
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**

*/

// build the nav

const navBuilder = () => {

    let navUI = '' ;

    
    // looping over all sections



    sections.forEach(section => {


        const sectionID = section.id;

        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    navigation.innerHTML = navUI;
    


};

navBuilder();

// Add class 'active' to section when near top of view




// getting  largest value that's less or equal to  number


const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active classs

const removeActive = (section) => {

    section.classList.remove('your-active-class');

};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

//implementating the actuall functions  

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 202 && elementOffset >= -202;


        removeActive(section);


        addActive(inviewport(),section);


    } );
};




window.addEventListener('scroll' , sectionActivation);




// Scroll to anchor ID using scrolll event

const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu A');
    links.forEach( link => {


        link.addEventListener('click', () => {


            for(i = 0 ; i<sections ; i++){


                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });

};

scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/


