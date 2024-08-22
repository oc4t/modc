document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    ['loader', 'version'].forEach(param => {
        const value = urlParams.get(param);
        if (value) document.getElementById(param).value = value;
    });

    const modsParam = urlParams.get('mods');
    if (modsParam) {
        const modsArray = modsParam.split(',');
        const modSlugs = modsArray.map(mod => {
            const [modSlug, versionId] = mod.split('.');
            if (versionId) {
                const versionSelect = document.getElementById(`version-select-${modSlug}`);
                if (versionSelect) {
                    versionSelect.value = versionId;
                }
            }
            return modSlug;
        }).join(', ');
        document.getElementById('mods').value = modSlugs;
    }
});

function updateLink() {
    const url = new URL(window.location.href);
    const version = document.getElementById('version').value;
    const loader = document.getElementById('loader').value;

    const modsInput = document.getElementById('mods').value.trim();
    const modSlugs = modsInput.split(',').map(modSlug => {
        const trimmedModSlug = modSlug.split('.')[0].trim(); 
        const versionSelect = document.getElementById(`version-select-${trimmedModSlug}`);
        const versionId = versionSelect ? versionSelect.value : '';
        return versionId ? `${trimmedModSlug}.${versionId}` : trimmedModSlug;
    }).join(',');

    url.searchParams.set('mods', modSlugs);
    url.searchParams.set('version', version);
    url.searchParams.set('loader', loader);
    history.replaceState(null, '', url);
}

var downloading = false;

function downloadMods() {
    if (!downloading) {
        downloading = true;
        const loader = document.getElementById('loader').value;
        const modsInput = document.getElementById('mods').value.trim();
        const modSlugs = modsInput.split(',').map(mod => mod.split('.')[0].trim());

        if (modSlugs.length === 0 || modSlugs[0] === '') {
            alert('Please enter at least one mod.');
            downloading = false;
            return;
        }

        const zip = new JSZip();
        let completedCount = 0;
        const totalMods = modSlugs.length;

        const promises = modSlugs.map(modSlug => {
            const versionSelect = document.getElementById(`version-select-${modSlug}`);
            const versionId = versionSelect ? versionSelect.value : null;

            const fetchUrl = versionId 
                ? `https://api.modrinth.com/v2/version/${versionId}`
                : `https://api.modrinth.com/v2/project/${modSlug}/version?loaders=["${loader}"]&game_versions=["${version}"]`;

            return fetch(fetchUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch Modrinth API: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(modDetails => {
                    const modInfo = Array.isArray(modDetails) ? modDetails[0] : modDetails;

                    if (!modInfo || !modInfo.files || modInfo.files.length === 0) {
                        throw new Error('Invalid response from Modrinth API');
                    }

                    const modDownloadUrl = modInfo.files[0].url;
                    const modName = modInfo.files[0].filename;
                    console.log(`Downloading ${modName} from ${modDownloadUrl}`);

                    return fetch(modDownloadUrl)
                        .then(response => response.blob())
                        .then(blob => zip.file(modName, blob))
                        .then(() => {
                            completedCount++;
                            const progress = (completedCount / totalMods) * 100;
                            document.getElementById('progress-bar').style.width = `${progress}%`;
                        });
                })
                .catch(error => console.error(error));
        });

        Promise.all(promises.map(p => p.catch(() => null)))
            .then(() => {
                if (completedCount === totalMods) {
                    return zip.generateAsync({ type: 'blob' });
                } else {
                    throw new Error('Not all mods were successfully downloaded.');
                }
            })
            .then(content => {
                saveAs(content, 'mods.zip');
            })
            .catch(error => console.error('Error generating zip:', error))
            .finally(() => {
                document.getElementById('progress-bar').style.width = '0%';
                downloading = false;
            });
    }
}