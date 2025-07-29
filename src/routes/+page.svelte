<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import PresR from '$lib/components/presR.svelte';
    import PresL from '$lib/components/presL.svelte';
    import Wave from '$lib/components/wave.svelte';

    let tl = gsap.timeline();

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
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

<div class="overflow-hidden bg-[#1b263b] w-full h-1200">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/bg_3ls.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title text-[180px]">3LS</h1>
    </div>
    <div class="flex flex-col justify-center items-center mt-30">
        <Wave text="Jeux" className="wave1"/>
        <PresR className="presR-1" background="/SpaceCake.png" description="SpaceCake est un jeu réalisé pendant une JAM sur le thèmes de l'espace. Nous avons donc décidé de créer un jeu ou l'astronaute doit monter plus vite que la caméra qui monte de plus en plus vite, tout en esquivant les planètes qui barrent son chemin et les trous noirs qui cherche à l'absorber."/>   
        <PresL className="presL-1" background="/JAMMAZE.png" description="Jamaze est aussi un jeu réalisé lors d'une JAM. Cette fois-ci, nous avons décidé d'explorer la 3D en créant un petit jeu d'horreur. Un univers sombre, des cinématiques et un peu de lore vous y attendent."/>
        <PresR className="presR-2" background="/cave.png" description="Matrix Memories est le vrai premier jeu que nous aimerions sortir. Il mélange des classiques tel que stardew valley, undertale, one shot et apporte sa pierre à l'édifice avec son histoire touchante et profonde."/>   
        <PresL className="presL-2" background="/KIB.png" description="KIB.EXE est le jeu le plus ambitieux que nous ayons entrepris. Il pourrait évoquer des titres comme l’excellent Inscryption ou même Balatro, mais il reste unique par son histoire et son gameplay soigneusement travaillé."/>
    </div>
    <div class="flex flex-col justify-center items-center mt-30">
        <Wave text="Outils" className="wave2"/>
        <PresR className="presR-3" description="2LS est une petite idée qui va se construire petit à petit. Le but est de créer un hub rassemblant tous les outils web utiles pour les développeurs, qu’ils soient externes ou développés par nous-mêmes."/>   
    </div>
    <div class="flex flex-col justify-center items-center mt-30">
        <Wave text="Autres" className="wave3"/>
        <PresL className="presL-3" background="/tarkov.png" description="RatHub est, comme son nom l'indique, un hub dédié aux plus gros rats de Tarkov. Ceux qui veulent tout savoir sur ce qu’ils lootent, et bien plus encore. Ici, vous trouverez toutes les informations dont vous avez besoin, que vous soyez débutant ou expert sur Escape from Tarkov."/>   
    </div>
</div>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
    }
</style>