<script>
    import Property from "./property.svelte";

    let { allProperties = $bindable(), key } = $props();
    let show = $state(false);
</script>

<div>
    <button onclick={() => (show = !show)}>{key}</button>
    {#if show}
        {#each allProperties.filter((p) => p.key === key) as p, index (p)}
            <div animate:flip={{ duration: 100 }}>
                <Property bind:active={p.active} value={p.value} />
            </div>
        {/each}
    {/if}
</div>
