function biscuit() {
    let replaceValue = "---REPLACETHIS---"

    document.body.innerHTML = document.body.innerHTML.replaceAll("cookie", replaceValue);

    //fix potemntial script errors
    for (script of document.getElementsByTagName("script")) {
        script.outerHTML = script.outerHTML.replaceAll(replaceValue, "cookie");
    }

    //fix potemntial link errors
    for (link of document.getElementsByTagName("link")) {
        link.outerHTML = script.outerHTML.replaceAll(replaceValue, "cookie");
    }

    document.body.innerHTML = document.body.innerHTML.replaceAll(replaceValue, "biscuit");
}
biscuit();