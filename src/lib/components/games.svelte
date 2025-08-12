<script>
    import { goto } from "$app/navigation";

    let {
        title = "game",
        background = "/ricky.webp",
        site = "/",
        className = "gameone",
        type="rick"
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
    class="{className} text-container text-[#e0e1dd] font-[Xanmono] w-80 h-50 text-[11px] cursor-pointer flex justify-center items-center hover:scale-115 transition-all duration-500"
    style="--bg-image: url('{background}')"
>
    {#if type == "rick"}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48"><polygon fill="#3dd9eb" points="15,1 14,9 5,8 8,18 1,23 8,28 2,32 8,36 7,41 24,38 41,41 40,37 46,30 41,28 47,19 39,18 44,10 34,10 33,2 24,6"></polygon><path fill="#fac8d5" d="M24,11c-6.1,0-11,5.4-11,13.2v9.5C13,41.6,17.9,47,24,47s11-5.4,11-13.2v-9.5C35,16.4,30.1,11,24,11 z"></path><path fill="#fa91ad" d="M24,34L24,34c-1.105,0-2-0.895-2-2v-6h4v6C26,33.105,25.105,34,24,34z"></path><path fill="#fafafa" d="M15.05,25C15.032,25.166,15,25.329,15,25.5c0,2.485,2.015,4.5,4.5,4.5s4.5-2.015,4.5-4.5 c0-0.171-0.981-0.334-1-0.5H15.05z"></path><path fill="#fafafa" d="M24.05,25C24.032,25.166,24,25.329,24,25.5c0,2.485,2.015,4.5,4.5,4.5s4.5-2.015,4.5-4.5 c0-0.171-0.032-0.334-0.05-0.5H24.05z"></path><circle cx="28.503" cy="26.497" r="1.503" fill="#6c19ff"></circle><path fill="#fa91ad" d="M30.027,39.924C30,39.915,27.196,39,24,39s-6,0.915-6.027,0.924l-0.947-2.847 C17.158,37.033,20.299,36,24,36s6.842,1.033,6.974,1.077L30.027,39.924z"></path><circle cx="19.503" cy="26.503" r="1.497" fill="#6c19ff"></circle><path fill="#fa91ad" d="M15.05,26C15.032,25.834,15,25.671,15,25.5c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5 c0,0.171,1.019,0.334,1,0.5H15.05z"></path><path fill="#fa91ad" d="M24.05,26C24.032,25.834,24,25.671,24,25.5c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5 c0,0.171-0.032,0.334-0.05,0.5H24.05z"></path><rect width="18" height="3" x="15" y="19" fill="#6c19ff"></rect><circle cx="13" cy="34" r="3" fill="#fac8d5"></circle><circle cx="35" cy="34" r="3" fill="#fac8d5"></circle><path fill="#fa91ad" d="M32,34c0,1.555,1.187,2.819,2.703,2.97C34.89,35.965,35,34.91,35,33.8V31 C33.343,31,32,32.343,32,34z"></path><path fill="#fa91ad" d="M13.31,36.969C14.819,36.812,16,35.551,16,34c0-1.657-1.343-3-3-3v2.7 C13,34.848,13.115,35.935,13.31,36.969z"></path></svg>
    {:else if type == "morty"}
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48"><path fill="#6c19ff" d="M24,3c11.046,0,20,8.954,20,20s-8.954,20-20,20S4,34.046,4,23c0-6,3-8,3-8S8.966,3,24,3z"></path><circle cx="24" cy="25" r="17" fill="#2100c4"></circle><circle cx="40.5" cy="32.5" r="4.5" fill="#f5bc00"></circle><circle cx="7.5" cy="32.5" r="4.5" fill="#f5bc00"></circle><path fill="#f5bc00" d="M24,12c-9.389,0-17,7.611-17,17s7.611,17,17,17s17-7.611,17-17S33.389,12,24,12z"></path><path fill="#2100c4" d="M27.935,39.426C27.623,38.293,25.987,37,24,37s-3.623,1.293-3.935,2.426 C20.026,39.544,20,39.669,20,39.8c0,0.663,0,1.2,0,1.2c0.8,0,7.2,0,8,0c0,0,0-0.537,0-1.2C28,39.669,27.974,39.544,27.935,39.426z"></path><circle cx="31" cy="28" r="6" fill="#fafafa"></circle><circle cx="16" cy="28" r="6" fill="#fafafa"></circle><circle cx="31" cy="29" r="2" fill="#2100c4"></circle><circle cx="16" cy="29" r="2" fill="#2100c4"></circle></svg>
    {:else}
        <img src="/portal.png" alt="characters">
    {/if}
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
