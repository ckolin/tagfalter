<script>
    let { active = $bindable(), key, value } = $props();
</script>

<label>
    <input type="checkbox" bind:checked={active} />
    {#if key}
        <i>{key}:</i>
    {/if}
    {value}
</label>
