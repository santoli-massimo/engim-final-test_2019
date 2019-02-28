document.addEventListener('DOMContentLoaded', () => {
    //console.log('Global search prepped and ready!');

    const searchbar = document.getElementById('js-gs-text');
    const checkbox = document.getElementById('js-gs-check');
    let occurrences = [];
    let matches = [];
    let allChildren = [];
    let searchRegex;
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

    const clearSearch = () => {
        occurrences = Array.from(document.querySelectorAll('.gs-found'));

        occurrences.forEach((match) => {
            match.outerHTML = match.outerHTML.replace(foundRegex, '$2');
        })
        occurrences = [];

    }

    const escapeRegExp = (string)  => {
        return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    const globalSearch = (caseSensitive, searchedText) => {
        clearLocalSearch();
        clearSearch();

        // reset link dot
        Array.from(document.querySelectorAll('.gs-occurrences')).forEach((link) => {
            link.classList.remove('gs-occurrences');
        });

        if (!searchedText) return;
        else searchedText = escapeRegExp(searchedText);

        //console.log(`String searched: ${searchedText} (${caseSensitive ? 'case sensitive' : 'case insensitive'})`);
        caseSensitive ? searchRegex = new RegExp(`(${searchedText})`, 'g') : searchRegex = new RegExp(`(${searchedText})`, 'gi');
        //console.log(searchRegex)

        allChildren = Array.from(document.querySelectorAll('#pages *'));

        allChildren.forEach((child) => {
            matches = child.innerHTML.match(searchRegex);
            if ((matches) && (child.innerHTML === child.textContent)) {
                child.innerHTML = child.innerHTML.replace(searchRegex, `<span class="gs-found">${'$1'}</span>`);
                matches = [];
            }
        });
        allChildren = [];

        /* Highlight links */
        pages = Array.from(document.querySelectorAll('[data-page*="page"]'));
        pages.forEach((page) => {
            if (page.innerHTML.match(searchRegex)) {
                page.classList.add('gs-occurrences');
            }  
        });
        
    }

    /* FIXES FOR LOCAL SEARCH */
    document.getElementById('txtcerca').addEventListener('input', (ev) => {
        searchbar.value = '';
        clearSearch();
    });

    function clearLocalSearch() {
        document.getElementById('txtBacon').innerHTML = bacon;
    }
});