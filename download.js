function downloadMods() {
    const selectedMods = Array.from(document.querySelectorAll('.mod-item:checked'))
        .map(checkbox => checkbox.getAttribute('data-mod'));
    if (selectedMods.length === 0) {
        alert('Select at least 1 mod.');
        return;
    }

    const zip = new JSZip();
    const promises = selectedMods.map(modPath => {
        const modName = modPath.split('/').pop();
        const modFilePath = `mods/1.20.2/${modName}`;
        return fetch(modFilePath)
            .then(response => response.blob())
            .then(blob => zip.file(modName, blob));
    });

    Promise.all(promises)
        .then(() => zip.generateAsync({ type: 'blob' }))
        .then(content => saveAs(content, 'selected_mods.zip'))
        .catch(error => console.error(error));
}