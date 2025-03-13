<script>
    let { active = $bindable(), key, value } = $props();
</script>

<div>
    <input type="checkbox" bind:checked={active} />
    <i>{key}:</i>
    {value}
</div>
