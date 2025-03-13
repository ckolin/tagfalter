<script>
    let { active = $bindable(), key, value } = $props();
</script>

<label>
    <input type="checkbox" bind:checked={active} />
    <i>{key}:</i>
    {value}
</label>
