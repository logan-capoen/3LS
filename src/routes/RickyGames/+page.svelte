<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Game from "$lib/components/games.svelte";
    import Wave from "$lib/components/wave.svelte"

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
        }
    });
</script>

<div class="overflow-hidden bg-[#1b263b] w-full z-10">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/ricky2.png'); background-position: bottom 40% center;">
        <img class="portal absolute top-[90px] -left-20" src="/portal.png" alt="portal">
    </div>
    <div class="w-500 h-screen flex justify-start items-center -mt-[80px] ml-50 overflow-hidden">
        <h1 class="title text-[7.5vw]">Ricky Games</h1>
    </div>
    <div class="flex flex-wrap justify-around items-center mt-50 gap-y-10">
    <Wave speed={0.1} text="Guess the character" className="waveone" size={40}/>
    </div>
    <div class="flex flex-wrap justify-around items-center mt-20 gap-y-10">
        <Game site="/RickyGames/guesscharacter" title="character" type="character"></Game>
        <Game site="/RickyGames/guessrick" title="rick" type="rick"></Game>
        <Game site="/RickyGames/guessmorty" title="morty" type="morty"></Game>
    </div>
    <div class="flex flex-wrap justify-around items-center mt-50 gap-y-10">
    <Wave speed={0.1} text="Find the character" className="wavetwo" size={40}/>
    </div>
    <div class="flex flex-wrap justify-around items-center mt-20 gap-y-10 mb-15">
        <Game site="/RickyGames/findcharacter" title="character" className="gametwo" type="character"></Game>
        <Game site="/RickyGames/findrick" title="rick" className="gametwo" type="rick"></Game>
        <Game site="/RickyGames/findmorty" title="morty" className="gametwo" type="morty"></Game>
    </div>
</div>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
    }
</style>