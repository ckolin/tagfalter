<script>
    import fuzzysearch from "fuzzysearch";
    import { flip } from "svelte/animate";
    import allFalters from "$lib/tagfalter.json";
    import Falter from "$lib/falter.svelte";
    import Property from "$lib/property.svelte";

    export const ssr = false;

    let property_map = {};
    for (let f of allFalters) {
        for (let k of Object.keys(f)) {
            let v = f[k];
            if (!property_map[k]) {
                property_map[k] = new Set();
            }
            for (let vv of v.filter((x) => x)) {
                property_map[k].add(vv);
            }
        }
    }

    let allProperties = $state([]);
    for (let key of Object.keys(property_map)) {
        for (let value of property_map[key]) {
            allProperties.push({ key, value });
        }
    }

    let query = $state("");
    let filteredFalters = $state(allFalters);

    $effect(() => {
        filteredFalters = allFalters.filter((t) =>
            allProperties.every((p) => !p.active || t[p.key].includes(p.value)),
        );
    });

    let filteredProperties = $derived(
        allProperties
            .filter((p) => !p.active)
            .filter((p) =>
                fuzzysearch(
                    query.toLowerCase(),
                    `${p.key} ${p.value}`.toLowerCase(),
                ),
            )
            .slice(0, 100)
    );

    let activeProperties = $derived(allProperties.filter((p) => p.active));
</script>

<svelte:head>
    <title>Tagfalter</title>
</svelte:head>

<main>
    <div id="filters">
        <input
            id="searchbox"
            type="text"
            placeholder="Merkmale suchen..."
            bind:value={query}
        />
        {#each activeProperties as p, index (p)}
            <div animate:flip={{ duration: 100 }}>
                <Property bind:active={p.active} key={p.key} value={p.value} />
            </div>
        {/each}
        {#each filteredProperties as p, index (p)}
            <div animate:flip={{ duration: 100 }}>
                <Property bind:active={p.active} key={p.key} value={p.value} />
            </div>
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
    }

    main {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }

    #filters {
        width: 18rem;
    }

    #searchbox {
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
        gap: 1rem;
    }
</style>
