<script>
    import fuzzysearch from "fuzzysearch";
    import tagfalter from "$lib/tagfalter.json";
    import List from "$lib/list.svelte";

    let property_map = {};
    for (let t of tagfalter) {
        for (let k of Object.keys(t)) {
            let v = t[k];
            if (!property_map[k]) {
                property_map[k] = new Set();
            }
            for (let vv of v.filter((x) => x)) {
                property_map[k].add(vv);
            }
        }
    }

    let properties = $state([]);
    for (let key of Object.keys(property_map)) {
        for (let value of property_map[key]) {
            properties.push({ key, value });
        }
    }

    let query = $state("");
    let displayed = $state(tagfalter);
</script>

<svelte:head>
    <title>Tagfalter</title>
</svelte:head>

<input type="text" placeholder="Merkmale filtern..." bind:value={query} />
<ul>
    {#each properties as p}
        {#if p.active}
            <li>
                <input type="checkbox" bind:checked={p.active} /><i>{p.key}:</i>
                {p.value}
            </li>
        {/if}
    {/each}
</ul>
<ul>
    {#each properties as p}
        {#if !p.active && fuzzysearch(query.toLowerCase(), `${p.key} ${p.value}`.toLowerCase())}
            <li>
                <input type="checkbox" bind:checked={p.active} /><i>{p.key}:</i>
                {p.value}
            </li>
        {/if}
    {/each}
</ul>
