<script>
    import { goto } from "$app/navigation";

    let {
        name = "title",
        background = "/SpaceCake.png",
        site="/",
        onClick = () => {}
    } = $props();

    function entersite() {
        onClick();
        goto(site);
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div on:click={entersite} class="navbutton text-container text-[#e0e1dd] font-[Xanmono] w-40 h-15 text-[11px] bg-[#1b263b] cursor-pointer transition-all duration-500 button-clip-path relative overflow-hidden flex justify-center items-center" style="--bg-image: url({background})">
    <span class="text-content relative z-10 text-center">{@html name}</span>
</div>

<style>
    .button-clip-path {
        clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    }

    .text-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: var(--bg-image);
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .text-container:hover::before {
        opacity: 1;
    }

    .text-content {
        pointer-events: none; /* Cela permet au texte de ne pas affecter le survol */
    }
</style>
