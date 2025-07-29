<script>
	import '../app.css';
	import Navbutton from "$lib/components/button.svelte";
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';

    let navmenu = $state(false);
    let tl = gsap.timeline();
    /**
     * @type {SplitText}
     */
    let splitText;

    onMount(() => {
        if (typeof window !== 'undefined') {
            splitText = new SplitText(".text", { type: "chars" });
        }
    });
    function clickMenu() {
        navmenu = !navmenu;
        if (navmenu) {
            animateText();
            animateLine();
            animateButtons();
        }
    }

    function animateText() {
        tl.from(splitText.chars, {
            duration: 0.1,
            delay: 0.2,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    function animateLine() {
        tl.fromTo(".drawingLine rect", { width: 0 }, { width: 100, duration: 0.5, ease: "power2.out"}, "-=1.5");
    }

    function animateButtons() {
        tl.fromTo(".navbutton", { x: 1000 }, { x: 0, duration: 0.2, stagger: 0.1, ease: "power2.out" }, "-=1.5");
    }
	
	let { children } = $props();
</script>

<main>
    <nav class="sticky top-0 w-full h-20 bg-[#0d1b2a] shadow-2xl perspective-distant flex justify-between z-20">
        <svg class="w-18 h-18 cursor-pointer" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,500) scale(0.1,-0.1)" fill="#e0e1dd" stroke="none"><path d="M905 4088 c-3 -7 -4 -726 -3 -1598 l3 -1585 1595 0 1595 0 0 1595 0 1595 -1593 3 c-1269 2 -1594 0 -1597 -10z m3095 -1588 l0 -1500 -1500 0 -1500 0 0 1500 0 1500 1500 0 1500 0 0 -1500z"/><path d="M1918 3515 c-84 -31 -146 -106 -163 -198 l-7 -38 93 3 c89 3 94 4 97 25 7 46 82 78 137 57 25 -10 46 -59 39 -94 -9 -45 -47 -70 -105 -70 l-49 0 0 -70 0 -70 50 0 c97 0 140 -35 140 -114 0 -113 -185 -141 -223 -33 -5 14 -20 17 -97 17 -85 0 -90 -1 -90 -21 0 -42 24 -100 56 -138 95 -110 329 -122 445 -23 114 97 121 303 13 376 l-34 23 25 23 c33 31 59 111 50 158 -25 135 -115 203 -269 201 -39 0 -88 -7 -108 -14z"/><path d="M2760 3105 l0 -415 240 0 241 0 -3 83 -3 82 -147 3 -148 3 0 329 0 330 -90 0 -90 0 0 -415z"/><path d="M1915 2296 c-124 -39 -195 -124 -195 -233 1 -131 79 -197 301 -253 145 -37 194 -76 173 -138 -12 -36 -84 -72 -144 -72 -84 1 -170 62 -170 123 0 15 -11 17 -96 17 l-96 0 6 -37 c20 -111 93 -193 206 -230 80 -26 236 -24 310 5 119 46 174 121 175 238 0 61 -4 77 -30 119 -41 65 -99 96 -265 140 -144 38 -180 59 -180 105 0 16 11 37 26 51 23 21 35 24 106 24 77 0 80 -1 109 -33 16 -18 29 -41 29 -52 0 -18 7 -20 91 -20 l92 0 -7 43 c-15 94 -90 171 -197 201 -66 19 -188 20 -244 2z"/><path d="M2940 2219 c-57 -23 -92 -78 -92 -145 0 -81 53 -135 139 -142 45 -4 59 0 92 21 48 32 77 98 67 151 -17 90 -122 148 -206 115z"/><path d="M2920 1850 l0 -60 80 0 80 0 0 60 0 60 -27 -7 c-16 -4 -39 -8 -53 -8 -14 0 -37 4 -52 8 l-28 7 0 -60z"/><path d="M2702 1823 l-27 -28 43 -3 c23 -2 61 -2 85 0 l42 3 -27 28 c-18 18 -38 27 -58 27 -20 0 -40 -9 -58 -27z"/><path d="M3186 1829 c-14 -11 -26 -25 -26 -30 0 -5 34 -9 75 -9 41 0 75 4 75 9 0 16 -52 51 -75 51 -12 0 -34 -9 -49 -21z"/><path d="M2683 1753 c-41 -8 -53 -40 -53 -139 0 -65 4 -95 14 -103 9 -8 113 -11 362 -9 l349 3 3 106 c4 155 30 144 -347 145 -168 1 -316 0 -328 -3z"/></g></svg>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <svg on:click={clickMenu} class="w-12 flex justify-around items-center mr-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path fill="#e0e1dd" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
        </svg>
    </nav>
    <div class={`${navmenu ? 'right-0' : '-right-65'} fixed w-65 h-screen bg-[#0d1b2a] z-10 transition-all duration-500 flex flex-col items-center overflow-y-auto justify-start`}>
        <div class="w-full flex flex-col items-center justify-around min-h-[400px]">
            <h1 class="text">Jeux</h1>
            <svg class="drawingLine mt-5" width="175" height="6" viewBox="0 0 100 2" preserveAspectRatio="none">
                <rect width="0" height="1" fill="#e0e1dd86" />
            </svg>
            <Navbutton name="Spacecake" background="/SpaceCake.png"/>
            <Navbutton name="Jamaze" background="/JAMMAZE.png"/>
            <Navbutton name="Matrix<br>Memories" background="/cave.png"/>
            <Navbutton name="KIB.EXE" background="/KIB.png"/>
        </div>
        <div class="w-full flex flex-col items-center justify-around min-h-[180px] mt-10">
            <h1 class="text">outils</h1>
            <svg class="drawingLine mt-5" width="175" height="6" viewBox="0 0 100 2" preserveAspectRatio="none">
                <rect width="0" height="1" fill="#e0e1dd86" />
            </svg>
            <Navbutton name="2LS"/>
        </div>
        <div class="w-full flex flex-col items-center justify-around min-h-[270px] mt-10 mb-[100px]">
            <h1 class="text">autres</h1>
            <svg class="drawingLine mt-5" width="175" height="6" viewBox="0 0 100 2" preserveAspectRatio="none">
                <rect width="0" height="1" fill="#e0e1dd86" />
            </svg>
            <Navbutton name="RatHub" background="/tarkov.png"/>
            <Navbutton name="Ricky Games" background="/ricky.webp" site="/RickyGames"/>
        </div>
    </div>
	{@render children()}
	<footer class="bg-[#0d1b2a] text-[#e0e1dd] w-full p-6">
		<div class="flex flex-col items-center justify-center">
			<div class="flex justify-center space-x-4 mb-4">
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="https://www.youtube.com/@Threels-MM/shorts" class="text-[#e0e1dd] hover:text-[#415a77]">Youtube</a>
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="https://www.tiktok.com/@threels_mm?is_from_webapp=1&sender_device=pc" class="text-[#e0e1dd] hover:text-[#415a77]">tiktok</a>
			</div>
			<p class="text-lg">©2025 3LS. Tous droits réservés.</p>
		</div>
	</footer>
</main>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
        font-size: 30px;
    }
	
	a {
		font-family: Xanmono;
	}

</style>
