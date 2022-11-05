(function() {
    var searchField = document.getElementById('searchField');
    var resultsArea = document.getElementById('resultsArea');
    var entryLayout = '<div class="resultItem card"><b></b><p></p><a href="#" class="buttonLink readLink"><span>Read</span><span class="material-icons-outlined">arrow_forward</span></a></div>';
    var searchResults = [];

    searchField.addEventListener('keyup', function() {
        var searchValue = searchField.value;
        if (searchValue.length >= 3) {
            fetch('/search.json')
                .then(response => response.json())
                .then(data => {
                    searchResults = data.filter(function(item) {
                        return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
                    });
                    resultsArea.innerHTML = '';
                    if (searchResults.length > 0) {
                        document.body.classList.add('hasResults');
                        searchResults.slice(0, 10).forEach(function(item) {
                            var entry = document.createElement('div');
                            entry.innerHTML = entryLayout;
                            entry.querySelector('b').innerText = item.title;
                            entry.querySelector('p').innerText = item.excerpt;
                            entry.querySelector('a').href = item.url;
                            resultsArea.appendChild(entry);
                        });
                    } else {
                        document.body.classList.remove('hasResults');
                    }
                });
        } else {
            document.body.classList.remove('hasResults');
            resultsArea.innerHTML = '';
        }
    }
    );
})();
