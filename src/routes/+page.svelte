<script>
    import fuzzysearch from "fuzzysearch";
    import { flip } from "svelte/animate";
    import allFalters from "$lib/tagfalter.json";
    import Falter from "$lib/falter.svelte";
    import Property from "$lib/property.svelte";
    import Multiselect from "$lib/dropdown.svelte";
    import Dropdown from "$lib/dropdown.svelte";

    let propertyMap = {};
    for (let f of allFalters) {
        for (let k of Object.keys(f).filter((k) => !k.startsWith("_"))) {
            let v = f[k];
            if (!propertyMap[k]) {
                propertyMap[k] = new Set();
            }
            for (let vv of v.filter((x) => x)) {
                propertyMap[k].add(vv);
            }
        }
    }

    let allProperties = $state(
        Object.keys(propertyMap).flatMap((key) =>
            [...propertyMap[key]].map((value) => ({ key, value })),
        ),
    );

    let propertyQuery = $state("");
    let falterQuery = $state("");

    let filteredFalters = $derived(
        allFalters
            .filter((f) =>
                Object.keys(f).some((k) =>
                    f[k].some((v) =>
                        fuzzysearch(falterQuery.toLowerCase(), v.toLowerCase()),
                    ),
                ),
            )
            .filter((f) =>
                allProperties.every(
                    (p) => !p.active || f[p.key].includes(p.value),
                ),
            ),
    );
</script>

<svelte:head>
    <title>Tagfalter</title>
</svelte:head>

<main>
    <div id="filters">
        <input
            class="searchbox"
            type="text"
            placeholder="Merkmale filtern..."
            bind:value={propertyQuery}
        />
        {#each Object.keys(propertyMap) as k}
            <Dropdown bind:allProperties key={k} {propertyQuery} />
        {/each}
    </div>
    <div id="results">
        <input
            class="searchbox"
            type="text"
            placeholder="Tagfalter filtern..."
            bind:value={falterQuery}
        />
        <div id="grid">
            {#each filteredFalters as f, index (f.Deutsch)}
                <div animate:flip={{ duration: 100 }}>
                    <Falter falter={f} />
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

    :global(body) {
        margin: 1rem;
        font-family: "Inter", sans-serif;
    }

    :global(*) {
        font: inherit;
    }

    main {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
    }

    #filters {
        width: 18rem;
    }

    .searchbox {
        font-size: inherit;
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        padding: 0.2rem;
        margin-bottom: 0.5rem;
    }

    #results {
        flex-grow: 1;
    }

    #results .searchbox {
        margin-bottom: 1rem;
    }

    #grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        grid-auto-rows: 14rem;
        gap: 1.5rem;
    }
</style>
