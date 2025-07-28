<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import PresR from '$lib/components/presR.svelte';
    import PresL from '$lib/components/presL.svelte';

    let tl = gsap.timeline();

    onMount(() => {
        const splitTitle = new SplitText(".title", { type: "chars" });
        if (typeof window !== 'undefined') {
            tl.from(splitTitle.chars, {
            duration: 0.1,
            opacity: 0,
            stagger: 0.3,
            delay: 0.3,
            ease: "none"
        });
        }
    });  
</script>

<main class="overflow-hidden bg-[#1b263b] w-full h-800">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/bg_3ls.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title">3LS</h1>
    </div>
    <PresR className="presR-1" background="/SpaceCake.png" description="SpaceCake est un jeu réalisé pendant une JAM sur le thèmes de l'espace. Nous avons donc décidé de créer un jeu ou l'astronaute doit monter plus vite que la caméra qui monte de plus en plus vite, tout en esquivant les planètes qui barrent son chemin et les trous noirs qui cherche à l'absorber."/>   
    <PresL className="presL-1" background="/JAMMAZE.png" description="Jamaze est aussi un jeu réalisé lors d'une JAM. Cette fois-ci, nous avons décidé d'explorer la 3D en créant un petit jeu d'horreur. Un univers sombre, des cinématiques et un peu de lore vous y attendent."/>
    <PresR className="presR-2" background="/cave.png" description="Matrix Memories est le vrai premier jeu que nous aimerions sortir. Il mélange des classiques tel que stardew valley, undertale, one shot et apporte sa pierre à l'édifice avec son histoire touchante et profonde."/>   
    <PresL className="presL-2" background="/KIB.png" description="KIB.EXE est le jeu le plus ambitieux que nous ayons entrepris. Il pourrait évoquer des titres comme l’excellent Inscryption ou même Balatro, mais il reste unique par son histoire et son gameplay soigneusement travaillé."/>
</main>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
        font-size: 180px;
    }
</style>