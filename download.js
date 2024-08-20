document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mods = urlParams.get('mods');

    if (mods) {
        document.getElementById('mods').value = mods;
    }
});
function updateLink(mods) {

    history.replaceState(null, '', `?${mods.toString()}`);
}

var downloading = false;

function downloadMods() {
    if (!downloading) {
        downloading = true;
        const version = document.getElementById('Version').value;
        const loader = document.getElementById('Loader').value;
        const modsInput = document.getElementById('mods').value.trim();
        const modSlugs = modsInput.split(',').map(mod => mod.trim());

        if (modSlugs.length === 0 || modSlugs[0] === '') {
            alert('Please enter at least one mod.');
            return;
        }

        const zip = new JSZip();
        const promises = modSlugs.map(modSlug => {
            return fetch(`https://api.modrinth.com/v2/project/${modSlug}/version?loaders=["${loader}"]&game_versions=["${version}"]`)
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
        });

        let completedCount = 0;
        const totalMods = modSlugs.length;

        Promise.all(promises.map(p => p.catch(() => null)))
            .then(() => {
                setInterval(() => {
                    document.getElementById('progress-bar').style.width = `${(completedCount / totalMods) * 100}%`;
                }, 500);
            });

        Promise.all(promises)
            .then(() => zip.generateAsync({ type: 'blob' }))
            .then(content => {
                saveAs(content, 'mods.zip');
            })
            .catch(error => console.error(error))
            .finally(() => {
                document.getElementById('progress-bar').style.width = '100%';
                downloading = false;
            });
    }
}

function fetchZip(url, modName, zip) {
    return fetch(url)
        .then(response => response.blob())
        .then(blob => zip.file(modName, blob))
        .then(() => {
            completedCount++;
        });
}