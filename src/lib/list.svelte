<script>
    const { elements } = $props();
</script>

<ul>
    {#each elements as e}
        <li>{e.Deutsch}</li>
    {/each}
</ul>
