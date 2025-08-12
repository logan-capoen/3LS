
<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import Wave from "$lib/components/wave.svelte";
    import PresL from "$lib/components/presL.svelte";
    import PresR from "$lib/components/presR.svelte";

    let tl = gsap.timeline();

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        const splitTitle = new SplitText(".title", { type: "chars" });
        if (typeof window !== 'undefined') {
            tl.from(splitTitle.chars, {
            duration: 0.1,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3,
            ease: "none"
        });
        }
    });
</script>

<div class="bg-[#1b263b] flex flex-col items-center">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/JAMMAZE.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title text-[120px] text-[#e0e1dd]">JAMAZE</h1>
    </div>
    <div class="mt-30"></div>
    <!-- svelte-ignore a11y_missing_attribute -->
    <Wave text="A propos de<br> JAMAZE" size={80} speed={0.1}></Wave>
    <p class="mt-15 w-265 text-center"><strong>Qu'est-ce que Jamaze ?</strong></p>
    <PresR size={12} className="presR-1" background="/house.png" description="JAMAZE est notre deuxième jeu réalisé lors d’une game jam. Cette fois-ci, nous avons décidé de travailler sur un jeu en 3D afin d’apprendre toujours plus et de continuer à progresser."/>   
    <PresL size={12} className="presL-1" background="/backrooms.png" description="Nous avons choisi de créer un jeu d’horreur plongé au cœur d’un gigantesque labyrinthe, où le joueur devra fuir sans relâche un monstre implacable."/>
    <PresR size={12} className="presR-2" background="/playground.png" description="De plus, toujours dans cette optique d’apprendre davantage, nous avons travaillé sur des animations afin de développer nos compétences, mais aussi de rendre le jeu plus immersif, notamment grâce à tous les effets sonores réalisés à la main… ou plutôt à la bouche."/>   
    <PresL size={10} className="presL-2" background="/ruine.png" description="Malheureusement, tout ne s’est pas déroulé comme prévu. Nous avons commis l’erreur d’aborder ce projet comme nos précédents jeux, qui étaient en 2D. Or, la 3D étant bien plus lourde à gérer, nous avons rencontré de nombreux problèmes, notamment avec GitHub, allant jusqu’à une corruption complète du projet. Cela nous a fait perdre beaucoup de temps, mais malgré tout, ce fut un jeu très agréable à développer, qui nous a beaucoup appris."/>
    <div class="py-15"></div>
</div>

<style>
    p {
        color: #e0e1dd;
        font-size: 30px;
        font-family: Xanmono;
    }
    h1 {
        font-family: Xanmono;
    }
</style>