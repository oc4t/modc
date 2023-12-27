function downloadMods(version) {
    const selectedMods1202 = Array.from(document.querySelectorAll('.mod1202:checked'))
        .map(checkbox => {
            const modData = checkbox.getAttribute('mod-data');
            const downloadType = checkbox.getAttribute('link'); // "modrinth", "git", or "wynn"
            return { modData, downloadType };
        });
    if (selectedMods1202.length === 0) {
        alert('Select at least 1 mod.');
        return;
    }

    const zip = new JSZip();
    const promises = selectedMods1202.map(modInfo => {
        const modName = modInfo.modData;

        if (modInfo.downloadType === 'git') {
            const modDownloadUrl = `https://oc4t.github.io/modc/mods/${version}/${modInfo.modData}`;
            return fetchZip(modDownloadUrl, modName, zip);
        } else {
            const modrinthApiLink = `https://api.modrinth.com/v2/project/${modInfo.modData}/version?loaders=["fabric"]&game_versions=["${version}"]`;
            return fetch(modrinthApiLink)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch Modrinth API: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(modDetails => {
                    if (!modDetails || !modDetails[0] || !modDetails[0].files || modDetails[0].files.length === 0) {
                        throw new Error('Invalid response from Modrinth API');
                    }
                    const modDownloadUrl = modDetails[0].files[0].url;
                    const decodedUrl = modDownloadUrl.replace(/%2B/g, '+');
                    const modName = decodedUrl.split('/').pop();
                    return fetchZip(decodedUrl, modName, zip);
                })
                .catch(error => console.error(error));
        }
    });
    Promise.all(promises)
        .then(() => zip.generateAsync({ type: 'blob' }))
        .then(content => saveAs(content, 'mods.zip'))
        .catch(error => console.error(error));
}

function fetchZip(url, modName, zip) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => zip.file(modName, blob));
}