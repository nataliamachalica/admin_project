{

		function toggleMenu() {
			console.log('do you see me?');
		const navButton = document.querySelector('.burger');
		const sidenav = document.querySelector('.menu');

		navButton.addEventListener('click', function(e){
			e.preventDefault();

			sidenav.classList.toggle('nav-active');
			console.log('now you see me?');
		});
	}

	const app = () => {
		toggleMenu();
	};

	app();
}