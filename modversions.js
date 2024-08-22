async function fetchModVersions() {
    const input = document.getElementById('mods').value.trim();
    const version = document.getElementById('version').value;
    const loader = document.getElementById('loader').value;

    if (input === '') {
        document.getElementById('mod-versions').textContent = 'Please enter one or more mod slugs.';
        return;
    }

    clearSelectedModVersions();

    const modSlugs = input.split(',').map(slug => slug.split('.')[0].trim());
    const slugString = JSON.stringify(modSlugs);

    try {
        const response = await fetch(`https://api.modrinth.com/v2/projects?ids=${encodeURIComponent(slugString)}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data for mods. Status: ${response.status}`);
        }

        const data = await response.json();
        const results = [];

        for (const mod of data) {
            try {
                const versionsResponse = await fetch(`https://api.modrinth.com/v2/project/${mod.slug}/version?loaders=["${loader}"]&game_versions=["${version}"]`);
                
                if (!versionsResponse.ok) {
                    throw new Error(`Failed to fetch versions for ${mod.slug}. Status: ${versionsResponse.status}`);
                }

                const versionsData = await versionsResponse.json();
                results.push({ 
                    modSlug: mod.slug, 
                    icon: mod.icon_url || 'default_icon_url', 
                    versions: versionsData 
                });
            } catch (error) {
                console.error('Error fetching mod versions:', error);
                results.push({ modSlug: mod.slug, error: error.message });
            }
        }

        displayModVersions(results);

    } catch (error) {
        console.error('Error fetching mod data:', error);
        document.getElementById('mod-versions').textContent = 'Failed to load mod data.';
    }
}

function clearSelectedModVersions() {
    const versionSelects = document.querySelectorAll('.version-select');
    versionSelects.forEach(select => select.innerHTML = '');

    const url = new URL(window.location.href);
    url.searchParams.delete('mods');
    history.replaceState(null, '', url);
    updateLink();
}

function displayModVersions(modResults) {
    const container = document.getElementById('mod-versions');
    container.innerHTML = '';

    if (modResults.length === 0) {
        container.textContent = 'No mod versions found.';
        return;
    }

    modResults.forEach(mod => {
        const modContainer = document.createElement('div');
        modContainer.classList.add('mod-container');
        modContainer.id = `mod-${mod.modSlug}`;

        if (mod.error) {
            modContainer.textContent = `Error for ${mod.modSlug}: ${mod.error}`;
        } else {
            const modSlug = document.createElement('h3');
            modSlug.textContent = mod.modSlug;

            const modIcon = document.createElement('img');
            modIcon.src = mod.icon;
            modIcon.alt = `Icon for ${mod.modSlug}`;
            modIcon.classList.add('mod-icon');
            modIcon.onclick = () => {
                window.open(`https://modrinth.com/mod/${mod.modSlug}`, '_blank');
            };

            const versionSelect = document.createElement('select');
            versionSelect.classList.add('version-select');
            versionSelect.id = `version-select-${mod.modSlug}`;
            versionSelect.onchange = updateLink;

            mod.versions.forEach(version => {
                const option = document.createElement('option');
                option.value = version.id;
                option.textContent = `${version.name} (${version.version_number})`;
                versionSelect.appendChild(option);
            });

            modContainer.appendChild(modSlug);
            modContainer.appendChild(modIcon);
            modContainer.appendChild(versionSelect);

            container.appendChild(modContainer);
        }
    });
}

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

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    ['loader', 'version'].forEach(param => {
        const value = urlParams.get(param);
        if (value) document.getElementById(param).value = value;
    });

    fetchModVersions();
});