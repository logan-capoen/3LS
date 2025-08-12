
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
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/KIB.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title text-[120px] text-[#e0e1dd]">KIB.EXE</h1>
    </div>
    <div class="mt-30"></div>
    <Wave text="A propos de<br> KIB.EXE" size={80} speed={0.1}></Wave>
    <p class="mt-15 w-265 text-center"><strong>Qu'est-ce que KIB.EXE ?</strong></p>
    <PresR size={12} className="presR-1" background="/menu.png" description="<strong>KIB.EXE</strong> est jeu de cartes stratégique en solo où vous progressez sur un plateau rempli de bonus, dont des runes qui boostent certaines cartes de votre deck. Affrontez des adversaires dans des combats tactiques en exploitant les capacités uniques de vos cartes pour les vaincre."/>   
    <PresL size={12} className="presL-1" background="/KIB.png" description="Au fil de votre avancée, découvrez progressivement le lore mystérieux du jeu. Votre objectif : renforcer votre deck et battre 4 à 5 redoutables boss pour remporter la victoire !"/>
    <PresR size={10} className="presR-2" background="/menu.png" description="Le lore de KIB.exe s'articule autour d'une interface intrigante : un bureau façon Windows 95. Dès le menu, vous explorez des fichiers mystérieux, des vidéos cryptiques et des photos énigmatiques, chacun verrouillé par un mot de passe. En progressant dans le jeu, vous débloquez ces contenus et découvrez peu à peu la sombre vérité qui se cache derrière le jeu KIB.exe, un jeu qui semble renfermer bien plus qu’il ne le laisse paraître."/>   
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