<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Game from "$lib/components/games.svelte";

    let tl = gsap.timeline();

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof window !== 'undefined') {
            tl.from(".portal", {
                delay: 0.3,
                x: 950,
                y: 200,
                width: 0,
                duration: 0.8,
                ease: "expo.out"
            });
            tl.from(".title", {
            duration: 1.6,
            stagger: 0.3,
            x: -2000,
            delay: 0.3,
            ease: "expo.out"
        });
        gsap.from(`.game-component`, {
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: `.game-component`,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
        }
    });
</script>

<div class="overflow-hidden bg-[#1b263b] w-full h-1200">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/ricky2.png'); background-position: bottom 40% center;">
    <img class="portal absolute top-[90px] -left-20" src="/portal.png" alt="portal">
    </div>
    <div class="w-500 h-screen flex justify-start items-center -mt-[80px] ml-50 overflow-hidden">
        <h1 class="title text-[7.5vw]">Ricky Games</h1>
    </div>
    <div class="flex justify-around items-center mt-50">
        <Game site="/RickyGames/game1" title="game1"></Game>
        <Game site="/RickyGames/game2" title="game2"></Game>
        <Game site="/RickyGames/game3" title="game3"></Game>
    </div>
</div>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
    }
</style>