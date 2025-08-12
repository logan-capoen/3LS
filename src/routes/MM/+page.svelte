
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
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/cave.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title text-[120px] text-[#e0e1dd] text-center">Matrix<br>Memories</h1>
    </div>
    <div class="mt-30"></div>
    <!-- svelte-ignore a11y_missing_attribute -->
    <Wave text="A propos de<br> Matrix Memories" size={80} speed={0.1}></Wave>
    <p class="mt-15 w-265 text-center"><strong>Qu'est-ce que Matrix Memories ?</strong></p>
    <PresR size={12} className="presR-1" background="/cave.png" description="Matrix Memories est l’un des plus grands jeux que je prévois de créer. Il reprendra des mécaniques phares de plusieurs jeux tout en apportant sa propre touche de nouveauté, tant au niveau du gameplay que du lore, innovant et immersif. Soyez sûr que ce jeu vous surprendra comme aucun autre."/>   
    <PresL size={12} className="presL-1" background="/cave.png" description="Pour suivre son évolution, n’hésitez pas à me suivre sur mes réseaux sociaux, disponibles en bas de la page."/>
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