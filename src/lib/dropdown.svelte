<script>
    import Property from "./property.svelte";

    let { allProperties = $bindable(), key } = $props();
    let show = $state(false);
    let active = $derived(allProperties.some((p) => p.active && p.key === key));
</script>

<div id="container">
    <button onclick={() => (show = !show)} style="background: {active ? '#0003'  : 'none'}">
        <span>{key}</span><span>{show ? "-" : "+"}</span>
    </button>
    {#if show}
        <div id="content">
            {#each allProperties.filter((p) => p.key === key) as p, index (p)}
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
        padding: 0.2rem 0.5rem;
    }
</style>
