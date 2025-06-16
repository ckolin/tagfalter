<script>
    const { falter, offset } = $props();

    const length = falter._images.length;

    let index = $state(0);
    const image = $derived((index + offset) % length);
    const cover = $derived(
        length > 0
            ? `images/${falter._images[image < 0 ? image + length : image].toLowerCase()}`
            : "",
    );
</script>

<div id="card">
    <div id="img" style="background-image: url('{cover}');">
        {#if length > 1}
            <button onclick={() => index--}>‹</button>
            <button onclick={() => index++}>›</button>
        {/if}
    </div>
    <a href={cover} target="_blank">
        <div>{falter.Deutsch}</div>
        <div id="name"><i>{falter.Name}</i></div>
    </a>
</div>

<style>
    a {
        text-decoration: none;
        color: initial;
    }

    #card {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        background-color: #0001;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 0.2rem;
        border-radius: 0.2rem;
        overflow: hidden;
    }

    #img::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-image: inherit;
        background-size: cover;
        filter: blur(2rem);
        z-index: -1;
    }

    #img button {
        font-size: 2em;
        border: none;
        color: #fff;
        background: #0004;
        padding: 0.2rem 1rem 0.5rem;
        opacity: 0;
        transition: opacity 100ms;
    }

    #img:hover button {
        opacity: 1;
    }

    #name {
        opacity: 0.7;
    }
</style>
