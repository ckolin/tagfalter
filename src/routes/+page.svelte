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

    let query = $state("");

    let filteredFalters = $derived(
        allFalters
            .filter((f) =>
                Object.keys(f).some((k) =>
                    f[k].some((v) =>
                        fuzzysearch(query.toLowerCase(), v.toLowerCase()),
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
            id="searchbox"
            type="text"
            placeholder="Suchbegriff"
            bind:value={query}
        />
        {#each Object.keys(propertyMap) as k}
            <Dropdown bind:allProperties key={k} />
        {/each}
    </div>
    <div id="results">
        {#each filteredFalters as f, index (f.Deutsch)}
            <Falter falter={f} />
        {/each}
    </div>
</main>

<style>
    :global(body) {
        margin: 1rem;
        font-family: sans-serif;
    }

    main {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
    }

    #filters {
        width: 18rem;
    }

    #searchbox {
        font-size: inherit;
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        padding: 0.2rem;
        margin-bottom: 0.5rem;
    }

    #results {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        grid-auto-rows: 14rem;
        gap: 1.5rem;
    }
</style>
