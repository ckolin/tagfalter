<script>
    const { falter } = $props();

    const length = falter._images.length;

    let index = $state(0);
    const cover = $derived(
        length > 0 ? `anki_images/${falter._images[index]}` : "",
    );
</script>

<div id="card">
    <div id="img" style="background-image: url('{cover}');">
        {#if length > 1}
            <button onclick={() => (index = (index + length - 1) % length)}>
                ‹
            </button>
            <button onclick={() => (index = (index + 1) % length)}> › </button>
        {/if}
    </div>
    <div>{falter.Deutsch}</div>
    <div id="name"><i>{falter.Name}</i></div>
</div>

<style>
    #card {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #img {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        background-color: #0001;
        background-size: cover;
        margin-bottom: 0.2rem;
        border-radius: 0.2rem;
    }

    #img button {
        font-size: 1.5em;
        font-weight: bold;
        border: none;
        color: white;
        background: #0003;
        padding: 0.8rem;
    }

    #name {
        opacity: 0.7;
    }
</style>
