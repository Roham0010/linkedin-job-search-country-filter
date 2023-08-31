const countriesToIgnore = ['China', 'Lithuania', 'Czechia', 'Serbia', 'Romania', 'Brazil', 'Pakistan', 'India'];
setInterval(() => {
    var allLocationsMeta = document.getElementsByClassName('artdeco-entity-lockup__caption');

    for(i=0; i< allLocationsMeta.length; i++) {
        var locationMeta = allLocationsMeta[i].children[0];
        if (countriesToIgnore.some(country => locationMeta.textContent.includes(country))) {
            locationMeta.closest('li.jobs-search-results__list-item').remove();
        }
    }
}, 1000)
