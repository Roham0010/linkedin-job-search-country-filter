// Linkedin
const countriesToIgnore = ['China', 'Czechia', 'Serbia', 'Romania', 'Brazil'];
// clearInterval(myInterval1);
const wordsNotToBeInTitle = ['entwickler', 'magento', 'ruby', '.net', 'desarrollador', 'ontwikkelaar'];
const companiesToIgnore = ['jobdesk', 'dexter'];

// Get the viewed jobs and delete those added 5 days ago.
var storageItems = JSON.parse(localStorage.getItem('jobTitleAndLocations'));
if (storageItems) {
    for(let date in storageItems) {
        if(((new Date().getTime() - date) / (1000*60*60*24*5)) > 4) {
            // delete storageItems[date];
            console.log('deleted deleted deleted deleted deleted deleted deleted deleted deleted deleted ');
        }
    }
} else {
    storageItems = {};
}

// unchecks the following company on the review step of the easy apply
setInterval(() => {
    if(document.querySelectorAll('#follow-company-checkbox')[0] !== undefined) {
        document.querySelectorAll('#follow-company-checkbox')[0].checked = false;
    }

}, 500);
let firstTitleAndLocation = null;
const myInterval1 = setInterval(() => {
    const allLocationsMeta = document.getElementsByClassName('job-card-container');
    const jobItemsListContainer = document.getElementsByClassName('scaffold-layout__list-container');
    const titleAndCompanies = [];
    
    for(i = 0; i < allLocationsMeta.length ; i++) {
        if (jobItemsListContainer[0].children.length < 2) continue;
        var locationMeta = allLocationsMeta[i];
        if (locationMeta.closest('li.jobs-search-results__list-item').style.display == 'none') continue;
        if (locationMeta.closest('li.jobs-search-results__list-item').getAttribute('isChecked')) continue;
        const titleText = locationMeta.querySelector('.job-card-list__title').textContent.toLowerCase().replace(/\s+/g,' ');
        const companyText = locationMeta.querySelector('.job-card-container__primary-description').textContent.toLowerCase().replace(/\s+/g,' ');
        const countryText = locationMeta.querySelector('.artdeco-entity-lockup__caption').textContent.toLowerCase().replace(/\s+/g,' ');
        var titleAndCompany =  titleText + companyText;
        if (i === 0 && firstTitleAndLocation !== titleAndCompany) {
            firstTitleAndLocation = titleAndCompany;
            console.log('Next page:______________________________________');
        }
        
        let canRemove = false;
        let reason = '';
        let log = '';
        if (wordsNotToBeInTitle.some(word => titleText.includes(word))) {
            canRemove = true;
            reason = 'wordsNotToBeInTitle';
            log = reason + " => " + titleAndCompany;
        } else if (companiesToIgnore.some(word => companyText.includes(word.toLowerCase()))) {
            canRemove = true;
            reason = 'CompanyIgnored';
            log = reason + " => " + companyText;
        } else if((Object.values(storageItems).indexOf(titleAndCompany) > -1)) {
            canRemove = true;
            reason = 'isInStorage';
            log = reason + " => " + titleAndCompany;
        } else if(titleAndCompanies.includes(titleAndCompany)) {
            canRemove = true;
            reason = 'Repetitieve';
            log = reason + " => " + titleAndCompany;
        } else if(countriesToIgnore.some(country => locationMeta.textContent.toLowerCase().includes(country.toLowerCase()))) {
            canRemove = true;
            reason = 'Country';
            log = reason + " => " + countryText;
        }
        
        if(canRemove) {
            locationMeta.closest('li.jobs-search-results__list-item').style.display = 'none';
            console.log(log);
        } else {
            if (!storageItems || !(Object.values(storageItems).indexOf(titleAndCompany) > -1)) {
                let timestamp = new Date().getTime();
                storageItems[timestamp] = titleAndCompany;
                console.log('added: ', titleAndCompany);
                localStorage.setItem('jobTitleAndLocations', JSON.stringify(storageItems));
            }
        }
        titleAndCompanies.push(titleAndCompany);
        locationMeta.closest('li.jobs-search-results__list-item').setAttribute('isChecked', true);
    }
}, 1000)
