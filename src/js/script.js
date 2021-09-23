/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

{


  /* Sidemenu */
  function toggleMenu() {
    const navButton = document.querySelector('.burger');
    const sidenav = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay-nav');

    navButton.addEventListener('click', function(e){
      e.preventDefault();

      sidenav.classList.toggle('nav-active');
      overlay.classList.toggle('overlay-active');
    });
  }

  /* Active pages */
  const navLinks = document.querySelectorAll('.nav-list .nav-link');
  const pages =document.querySelectorAll('.page');

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedPage = this;
    console.log('link was clicked');
    console.log(event);

    const activeLinks = document.querySelectorAll('.nav-list a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    clickedPage.classList.add('active');

    const activePages = document.querySelectorAll('.active');
    for(let activePage of activePages){
      activePage.classList.remove('active');
    }

    const pageSelector = clickedPage.getAttribute('href');
    const targetPage = document.querySelector(pageSelector);
    targetPage.classList.add('active');
  };
  const links = document.querySelectorAll('.nav-list a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  /* Chart */
  function initChart(){
    const ctx = document.getElementById('myChart').getContext('2d');

    // eslint-disable-next-line no-undef
    const myChart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: true,
        }]
      },
    });
  }
  /* Modals */
  const modalClose = document.querySelectorAll('.js--close-modal');
  const overlaymodal = document.querySelector('#overlay-modal');
  const modals = document.querySelectorAll('.modal');
  const modalOpen = document.querySelectorAll('.js--open-modal');

  const initModal = function(event){

    for(const button of modalClose) {
      button.addEventListener('click', closeBox);
    }
    overlaymodal.addEventListener('click', closeBox);

    document.addEventListener('keyup', (e) => {
      if (e.key === 27) {
        modalClose(event);
      }
    });

    for(const button of modalOpen){
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').replace('#', '');
        for(const modal of modals) {
          modal.classList.toggle('active', modal.id === id);
        }
        overlaymodal.classList.toggle('show');
      });
    }
  };
  const closeBox = function(event) {
    event.preventDefault();
    for (const modal of modals) {
      modal.classList.remove('active');
    }
    overlaymodal.classList.remove('show');
  };

  const app = () => {
    toggleMenu();
    initChart();
    initModal();
  };

  app();

}