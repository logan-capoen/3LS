<script>
    // @ts-ignore
    import { normalize, levenshtein } from '$lib/api';
    import Icon from "@iconify/svelte";
    export let data;
    let mortys = data.Mortys;

    /**
     * @type {{ name: string; image: any; } | null}
     */
    let currentmorty = null;
    let guess = '';
    let message = '';
    let showAnswer = false;
        let lives = 5;
    let score = 0;
    let gameOver = false;
  /**
     * @type {string | null}
     */
  let validationStatus = null;
  let skipMode = false;

  function pickRandommorty() {
    const index = Math.floor(Math.random() * mortys.length);
    currentmorty = mortys[index];
    guess = '';
    message = '';
    validationStatus = null;
    skipMode = false;
  }

  function nextTry() {
    validationStatus = null;
  }

    function checkGuess() {
    const guessWords = guess.trim().toLowerCase().split(' ').map(normalize);
    // @ts-ignore
    const nameWords = currentmorty.name.toLowerCase().split(' ').map(normalize);

    // Chaque mot du vrai nom doit apparaître dans la réponse (avec tolérance)
    const allMatch = nameWords.every(nw =>
        guessWords.some(gw => levenshtein(gw, nw) <= 1)
    );

    guess = '';
    if (allMatch) {
        validationStatus = 'correct';
        score += 1;
        setTimeout(pickRandommorty, 1000);
    } else {
        validationStatus = 'incorrect';
        setTimeout(nextTry, 1000);
    }
    }

    function youLoose() {
        gameOver = true;
    }

    function skip() {
        // @ts-ignore
        skipMode = true;
        lives -= 1;
        setTimeout(pickRandommorty, 1500);
        if (lives <= 0) {
            setTimeout(youLoose, 1000)
        }
    }

    function restartGame() {
        lives = 5;
        score = 0;
        gameOver = false;
        pickRandommorty();
    }

  // Démarrage
  pickRandommorty();
</script>

<div class="h-190 flex flex-col items-center justify-center bg-[#1b263b]">
    <div class="absolute top-30 left-8 text-white text-lg space-y-1 text-right flex flex-col items-center">
        <p>{"❤️ ".repeat(lives)}{"🤍 ".repeat(5 - lives)}</p>
        <p>Score : {score}</p>
    </div>
  {#if gameOver}
    <!-- 👇 Écran de fin de partie -->
    <div class="text-center text-white mt-10">
      <h2 class="text-5xl font-bold mb-4">Partie terminée</h2>
      <p class="text-3xl mb-6">Score final : {score}</p>
      <button
        class="bg-[#1d2d44] text-[#f0ebd8] px-6 py-3 rounded-2xl text-[25px] cursor-pointer hover:bg-[#3e5c76] transition-all duration-300"
        on:click={restartGame}
      >
        Recommencer
      </button>
    </div>
  {:else if currentmorty}
    <!-- 👇 Jeu actif -->
    <h1 class="text-[#e0e1dd] text-[40px] mb-15">Qui est ce morty ?</h1>

    <div class="relative w-[300px] h-[300px] mb-4">
      <img src={currentmorty.image} alt="personnage" class="w-full h-full object-cover rounded-2xl {validationStatus || skipMode ? 'grayscale' : ''}"/>
      {#if validationStatus === 'correct'}
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon icon="mingcute:check-fill" width="120" height="120" style="color: #20ff00" />
        </div>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[200px] bg-black/60 rounded-2xl">
          <p class="text-white text-2xl font-bold px-4 py-2 text-center">{currentmorty.name}</p>
        </div>
      {:else if validationStatus === 'incorrect'}
        <div class="absolute inset-0 flex items-center justify-center">
          <Icon icon="maki:cross" width="100" height="100" style="color: #f00" />
        </div>
      {/if}

      {#if skipMode}
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[200px] bg-black/60 rounded-2xl">
          <p class="text-white text-2xl font-bold px-4 py-2 text-center">{currentmorty.name}</p>
        </div>
      {/if}
    </div>

    <input class="text-[#e0e1dd] text-center h-20 w-100 text-[30px] mt-5 border rounded-2xl" type="text" bind:value={guess} on:keydown={(e) => e.key === 'Enter' && checkGuess()} placeholder="Nom du personnage" />
    
    <div class="mt-10">
      <button class="bg-[#1d2d44] text-[#f0ebd8] p-3 rounded-2xl text-[25px] cursor-pointer hover:bg-[#3e5c76] transition-all duration-300" on:click={checkGuess}>Valider</button>
      <button class="ml-10 bg-[#1d2d44] text-[#f0ebd8] p-3 rounded-2xl text-[25px] cursor-pointer hover:bg-[#3e5c76] transition-all duration-300" on:click={skip}>Passer</button>
    </div>
  {/if}
</div>


<style>
  .grayscale {
    filter: grayscale(1);
    opacity: 0.6;
  }
</style>