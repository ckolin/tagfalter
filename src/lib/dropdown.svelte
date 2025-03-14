<script>
    import fuzzysearch from "fuzzysearch";
    import Property from "./property.svelte";
    import { flip } from "svelte/animate";

    let { allProperties = $bindable(), key, propertyQuery } = $props();
    let show = $state(false);
    let active = $derived(allProperties.some((p) => p.active && p.key === key));

    let properties = $derived(
        allProperties
            .filter((p) => p.key === key)
            .filter(
                (p) =>
                    p.active ||
                    fuzzysearch(
                        propertyQuery.toLowerCase(),
                        `${p.key} ${p.value}`.toLowerCase(),
                    ),
            ),
    );
</script>

<div id="container">
    <button
        onclick={() => (show = !show)}
        style="background: {active ? '#0003' : 'none'}"
    >
        <span>{key} ({properties.length})</span>
        <span id="symbol">{show ? "▲" : "▼"}</span>
    </button>
    {#if show}
        <div id="content">
            {#each properties as p, index (p)}
                <div animate:flip={{ duration: 100 }}>
                    <Property bind:active={p.active} value={p.value} />
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    button {
        display: flex;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        font: inherit;
        border: none;
        padding: 0.2rem;
    }

    #symbol {
        opacity: 0.5;
    }
</style>
