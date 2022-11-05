/* https://github.com/mirkobrombin/autosummary.js
 * 
 * Copyright (c) 2020 Mirko Brombin <send@mirko.pm>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function autosummary(article_element, summary_element) {
    headings = document.querySelectorAll(article_element + " h2," + article_element + " h3," + article_element + " h4"),
    article = document.querySelector(article_element),
    summary = document.querySelector(summary_element),
    url = window.location.href,
    url = url.split("#")[0],
    document.querySelector(summary_element + ">li:first-child").remove(),
    i=0,
    // generate summary entries
    headings.forEach(t => {
        console.log(t.innerText);
        tt = 'title' + i.toString(),
        t.setAttribute('id', tt),
        li = document.createElement("li"),
        a = document.createElement("a"),
        a.classList.add(tt, t.tagName.toUpperCase()), a.setAttribute("href", url + '#' + tt), a.innerText = t.innerText
        li.appendChild(a),
        summary.appendChild(li),
        ++i
    }),
    // on scroll active summary entry
    window.addEventListener('scroll', function(e) {
        headings.forEach(t => {
            if(window.scrollY >= (t.offsetTop - 50) & window.scrollY <= (t.offsetTop + 50)) {
                try {
                    document.querySelector(summary_element + ">li>a.active").classList.remove("active")
                } catch (error) {
                    console.debug("No selected summary item found.")
                }
                document.querySelector(summary_element + '>li>a.' + t.getAttribute("id")).classList.add("active")
            }
        })
    });
    window.addEventListener("hashchange", function() {
        var hash = window.location.hash;
        var element = document.getElementById(hash.substring(1));
        var highlights = document.querySelectorAll(".highlight");
        if (highlights.length > 0) {
            for (var i = 0; i < highlights.length; i++) {
                highlights[i].classList.remove("highlight");
            }
        }
        if (element) {
            element.classList.add("highlight");
        }
    });
}