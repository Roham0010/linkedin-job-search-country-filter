const countriesToIgnore = [
    'China', 'Lithuania', 'Czechia', 'Serbia', 'Romania', 'Brazil', 'Pakistan', 'India', 'poland', 
    'applied', 'peru', 'bangladesh', 'russia', 'Philippines', 'drupal', 'latvia', 'nepal', 'kazakhstan', 
    'hong kong', 'Managua', 'Georgia', 'Cambodia', 'hungary', 'slovakia', 'greater', 'mexico', 'africa'
];
const wordsNotToBeInTitle = ['angular', 'front-end', 'frontend', 'lead php'];
setInterval(() => {
    const allLocationsMeta = document.getElementsByClassName('job-card-container');
    const jobItemsListContainer = document.getElementsByClassName('scaffold-layout__list-container');
    const titleAndLocations = [];

    for(i = 0; i < allLocationsMeta.length ; i++) {
        if (jobItemsListContainer[0].children.length < 2) continue;
        var locationMeta = allLocationsMeta[i];
        const titleText = locationMeta.querySelector('.job-card-list__title').textContent.toLowerCase();
        const locationText = locationMeta.querySelector('.job-card-container__primary-description').textContent.toLowerCase();
        var titleAndLocation =  titleText + locationText;
            
        
        if (wordsNotToBeInTitle.some(word => titleText.includes(word)) || 
            titleAndLocations.includes(titleAndLocation) || 
            countriesToIgnore.some(country => locationMeta.textContent.toLowerCase().includes(country.toLowerCase()))) {
            locationMeta.closest('li.jobs-search-results__list-item').remove();
        }
        titleAndLocations.push(titleAndLocation);
    }
}, 1000)
