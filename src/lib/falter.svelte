<script>
    const { falter } = $props();

    const cover = $derived(
        falter._images.length > 0 ? `anki_images/${falter._images[0]}` : "",
    );
</script>

<div id="card">
    <div id="img" style="background-image: url('{cover}');"></div>
    <div>{falter.Deutsch}</div>
    <div id="name"><i>{falter.Name}</i></div>
</div>

<style>
    #card {
        display: flex;
        flex-direction: column;
    }

    #img {
        flex-grow: 1;
        background-color: #0001;
        background-size: cover;
        margin-bottom: 0.2rem;
        border-radius: 0.2rem;
    }

    #name {
        opacity: 0.7;
    }
</style>
