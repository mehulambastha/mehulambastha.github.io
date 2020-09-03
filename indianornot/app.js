const matchList = document.querySelector('#match-list');
var heading = document.querySelector('.description');

// Registering the service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('service-worker.js')
		.then(function (reg) {
			console.log(reg);
			console.log('Service worker registered');
		})
		.catch(function (err) {
			console.log('Service worker not registered');
			console.log(err);
		});
} else {
	alert('Does not support service workers');
}

//handling UI event for prompt

window.addEventListener('beforeinstallprompt', () => {});

//searching data.json and filter it
const searchBrand = async searchText => {
	const res = await fetch('./data.json');
	const brands = await res.json();

	// get matches to current text input
	let matches = brands.filter(brand => {
		const regex = new RegExp('^' + searchText, 'gi');
		return brand.name.match(regex);
	});

	if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = '';
	} else {
		outputHTML(matches);
	}
};

//Show HTML
const outputHTML = matches => {
	console.log(matches.length);

	if (matches.length > 0) {
		const html = matches
			.map(match => {
				if (match.country === 'foreign') {
					return `
				<div class="card card-body mb-3">
				<h5 class="text-capitalize"><strong class="text-primary">${match.name}</strong> <span class="text-warning">(${match.country})</span></h5>
				<span class="h6"><mark>category: ${match.category}</mark></span>
				</div>
				`;
				} else if (match.country === 'china') {
					return `
				<div class="card card-body mb-3">
				<h5 class="text-capitalize"><strong class="text-primary">${match.name}</strong> <strong class="text-danger">(${match.country})</strong></h5>
            <span><mark>category: ${match.category}</mark></span>
            </div>
						`;
				} else {
					return `
            <div class="card card-body mb-3">
            <h5 class="text-capitalize"><strong class="text-primary">${match.name}</strong> <strong class="text-success">(${match.country}n)</strong></h5>
            <span><mark>category: ${match.category}</mark></span>
            </div>
						`;
				}
			})
			.join('');
		matchList.innerHTML = html;
	} else {
		matchList.innerHTML = `
		<div class="card card-body mb-3">
		<h5 class="text-danger">Sorry, this brand does not exist in the database.</h5>
		<span class="text-warning">If you think this is a valid brand name, then please email me this brand name at <a href="mailto:mehul@indianornot-davcpscn.tk">mehul@indianornot-davcpscn.tk</a> and I will add it to the database.</span>
		</div>`;
	}
};

const search = document.querySelector('#search');

search.addEventListener('input', () => {
	searchBrand(search.value);
});

const modal = new bootstrap.Modal(document.querySelector('#prompt-modal'));
const closeModal = document.querySelector('#close-modal');
var showModalAgain = true;

window.addEventListener('scroll', () => {
	if (
		window.innerHeight + window.scrollY >= document.body.scrollHeight &&
		showModalAgain === false
	) {
		modal.show();
	}
});
closeModal.addEventListener('click', () => {
	showModalAgain = false;
});
