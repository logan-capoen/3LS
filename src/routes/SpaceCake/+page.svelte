
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

<div class="bg-[#1b263b] flex flex-col items-center overflow-hidden">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/SpaceCake.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title text-center text-[clamp(45px,20vw,120px)] text-[#e0e1dd]">SpaceCake</h1>
    </div>
    <div class="mt-30"></div>
    <!-- svelte-ignore a11y_missing_attribute -->
     <div class="my-10">
        <iframe frameborder="0" src="https://itch.io/embed/3260785?linkback=true&amp;border_width=0&amp;bg_color=0d1b2a&amp;fg_color=e0e1dd&amp;link_color=415a77&amp;border_color=415a77" class="md:w-[550px] md:h-[165px] w-[350px]"><a href="https://threels.itch.io/spacecake">SpaceCake by threels</a></iframe>
    </div>
    <Wave text="A propos de<br> SpaceCake" size={80} speed={0.1} msize={10}></Wave>
    <p class="mt-15 my-5 text-center text-[clamp(10px,5vw,30px)]"><strong>Qu'est-ce que SpaceCake ?</strong></p>
    <PresR size={12} className="presR-1" background="/SpaceCake.png" description="<strong>SpaceCake</strong> est notre premier jeu en tant qu'équipe 3ls, mais aussi notre première game jam. Le thème imposé était l’espace. Après quelques minutes de réflexion, nous avons envisagé de créer une version réinventée de <em>Getting Over It</em>. Cependant, nous avons rapidement changé d'idée en réalisant la difficulté de gérer les déplacements de notre sprite."/>   
    <PresL size={12} className="presL-1" background="/spacecake1.png" description="En essayant de limiter les sauts, nous nous sommes demandé si le saut multiple ne devrait pas être supprimé, mais au contraire devenir l’élément central du gameplay. C'est ainsi que l’objectif du jeu s'est imposé naturellement : monter le plus haut possible. Le concept était né, il ne restait plus qu’à lui donner de la matière et de la consistance."/>
    <PresR size={12} className="presR-2" background="/spacecake2.png" description="Notre jeu, réalisé en seulement deux jours, est loin d’être parfait. En effet, la map est générée manuellement, et si l’envie vous prend – et que le talent est avec vous – vous pourrez dépasser les limites de notre monde, celles que nous avons fixées."/>   
    <PresL size={12} className="presL-2" background="/spacecake1.png" description="Certains y verront un manque de travail, un jeu inachevé. Moi, j’y vois une signification. Après tant de galères, vous avez enfin réussi à dépasser les limites du jeu. Il n’y a plus d’obstacles devant vous, seulement un vide constant et un score qui augmente sans fin. <br>Vous êtes libre."/>
    <div class="py-15"></div>
</div>

<style>
    p {
        color: #e0e1dd;
        font-family: Xanmono;
    }
    h1 {
        font-family: Xanmono;
    }
</style>