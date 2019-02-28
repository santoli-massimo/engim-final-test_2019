document.addEventListener('DOMContentLoaded', () => {
    //console.log('Global search prepped and ready!');

    const searchbar = document.getElementById('js-gs-text');
    const checkbox = document.getElementById('js-gs-check');
    const foundRegex = /(<span class="gs-found">)(.*)(<\/span>)/;
    const bacon = document.getElementById('txtBacon').innerHTML;

    /* Prevent form submit on enter */
    searchbar.addEventListener('keydown', (ev) => {
        if(ev.keyCode == 13) ev.preventDefault();
        return false;
    })
    
    /* Triggering search */
    searchbar.addEventListener('input', (ev) => {
        globalSearch(checkbox.checked, ev.target.value);
    });

    checkbox.addEventListener('input', (ev) => {
        globalSearch(checkbox.checked, searchbar.value);
    });

    /* Clear */
    const clearSearch = () => {
        let occurrences = [];

        occurrences = Array.from(document.querySelectorAll('.gs-found'));

        occurrences.forEach((match) => {
            match.outerHTML = match.outerHTML.replace(foundRegex, '$2');
        })
        occurrences = [];

    }

    /* RegExp escape */
    const escapeRegExp = (string)  => {
        return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    /* Actual Search */
    const globalSearch = (caseSensitive, searchedText) => {
        let searchRegex;
        let allChildren = [];
        let matches = [];

        /* Clear first */
        clearLocalSearch();
        clearSearch();

        // Reset link dots
        Array.from(document.querySelectorAll('.gs-occurrences')).forEach((link) => {
            link.classList.remove('gs-occurrences');
        });

        /* Search empty */
        if (!searchedText) return;
        else searchedText = escapeRegExp(searchedText);

        /* Create RegEx based on case sensitivity */
        //console.log(`String searched: ${searchedText} (${caseSensitive ? 'case sensitive' : 'case insensitive'})`);
        caseSensitive ? searchRegex = new RegExp(`(${searchedText})`, 'g') : searchRegex = new RegExp(`(${searchedText})`, 'gi');
        //console.log(searchRegex)

        /* Search on all elements inside pages */
        allChildren = Array.from(document.querySelectorAll('#pages *'));

        /* Add highlight on occurrences and nav links */
        allChildren.forEach((child) => {
            matches = child.innerHTML.match(searchRegex);
            if ((matches) && (child.innerHTML === child.textContent)) {
                child.innerHTML = child.innerHTML.replace(searchRegex, `<span class="gs-found">${'$1'}</span>`);
                // Add link dot
                let linkId = (child.closest('#pages > div').id);
                let link = document.querySelector(`[data-page=${linkId}`);
                if (!link.classList.contains('gs-occurrences')) link.classList.add('gs-occurrences');
                matches = [];
            }
        });
        allChildren = [];
        
    }

    /* FIXES FOR LOCAL SEARCH */
    /* Used to prevent a double search which could break the HTML due to the different searching algorithms */
    document.getElementById('txtcerca').addEventListener('input', (ev) => {
        searchbar.value = '';
        clearSearch();
    });

    function clearLocalSearch() {
        document.getElementById('txtBacon').innerHTML = bacon;
    }
});