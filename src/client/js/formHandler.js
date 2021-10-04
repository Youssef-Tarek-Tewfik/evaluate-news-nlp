function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!Client.checkForName(formText)) {
        alert("Unusual url detected\n\nproceeding");
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/meaningCloud' + '?q=' + formText)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = "<br>";

        if (res.status.code !== "0") {
            alert("Error reading from url\n\nMake sure to input a valid link");
            return;
        }

        document.getElementById('results').innerHTML += `<span>Agreement: ${res.agreement}</span><br>`;
        document.getElementById('results').innerHTML += `<span>Confidence: ${res.confidence}</span><br>`;
        document.getElementById('results').innerHTML += `<span>Irony: ${res.irony}</span><br>`;
        document.getElementById('results').innerHTML += `<span>Subjectivity: ${res.subjectivity}</span>`;
    })
}

export { handleSubmit }
