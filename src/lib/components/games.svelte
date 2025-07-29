<script>
    import { goto } from "$app/navigation";

    let {
        title = "game",
        background = "/ricky.webp",
        site = "/"
    } = $props();

    function enterSite() {
        goto(site);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div
    on:click={enterSite}
    class="game-component text-container text-[#e0e1dd] font-[Xanmono] w-80 h-50 text-[11px] bg-[#415a77] cursor-pointer flex justify-center items-center"
    style="--bg-image: url('{background}')"
>
    <span class="relative z-10 text-center">{title}</span>
</div>

<style>
    .game-component:hover {
        background-image: var(--bg-image);
        background-size: cover;
        background-position: center;
    }

    .game-component:hover {
        opacity: 0.9;
    }
</style>
