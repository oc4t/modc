function downloadMods1202() {
    const selectedMods1202 = Array.from(document.querySelectorAll('.mod1202:checked'))
        .map(checkbox => checkbox.getAttribute('mod-data'));
    if (selectedMods1202.length === 0) {
        alert('Select at least 1 mod.');
        return;
    }

    const zip = new JSZip();
    const promises = selectedMods1202.map(modPath => {
        const modName = modPath.split('/').pop();
        const modFilePath = `mods/1.20.2/${modName}`;
        return fetch(modFilePath)
            .then(response => response.blob())
            .then(blob => zip.file(modName, blob));
    });
    Promise.all(promises)
        .then(() => zip.generateAsync({ type: 'blob' }))
        .then(content => saveAs(content, 'mods.zip'))
        .catch(error => console.error(error));
}