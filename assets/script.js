
async function refine() {
    const config = document.getElementById('config').value;
    const cleanip = document.getElementById('cleanip').value;
    const resultBox = document.getElementById('result');

    const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams({ config, cleanip })
    });

    const result = await response.json();
    resultBox.value = result.result || result.error || "Error.";
}

function copyResult() {
    const resultBox = document.getElementById('result');
    resultBox.select();
    document.execCommand("copy");
}
