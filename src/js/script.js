{

	function toggleMenu(visible) {
		const navButton = document.querySelector('.burger');
		const sidenav = document.querySelector('.menu');

		navButton.addEventListener('click', function(e){
			e.preventDefault();

			sidenav.classList.toggle('show', visible);
		});
	}

	const app = () => {
		toggleMenu();
	};

	app();

}