<script>
  import { DateTime } from "luxon";

  let now = DateTime.now().setZone("Asia/Taipei");
  const final = DateTime.fromISO("2022-12-12T20:05:00+08:00").setZone(
    "Asia/Taipei"
  );
  const started = DateTime.fromISO("2022-09-19T07:00:00+08:00").setZone(
    "Asia/Taipei"
  );
  const startToFinal = final.diff(started, [
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);

  setInterval(() => (now = DateTime.now().setZone("Asia/Taipei")), 1000);

  const minutesMultiplier = 60;
  const hoursMultiplier = minutesMultiplier * 60;
  const daysMultiplier = hoursMultiplier * 24;

  $: nowToFinal = final
    .diff(now, ["days", "hours", "minutes", "seconds"])
    .toObject();
  $: startToNow = now
    .diff(started, ["days", "hours", "minutes", "seconds"])
    .toObject();
  $: progressPercentage =
    ((startToNow.days * daysMultiplier +
      startToNow.hours * hoursMultiplier +
      startToNow.minutes * minutesMultiplier +
      startToNow.seconds) /
      (startToFinal.days * daysMultiplier +
        startToFinal.hours * hoursMultiplier +
        startToFinal.minutes * minutesMultiplier +
        startToFinal.seconds)) *
    100;
</script>

<main>
  <div class="hero min-h-screen">
    {#if progressPercentage !== 100}
      <div class="text-center">
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              <span style="--value:{nowToFinal.days};" />
            </span>
            days
          </div>
          <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              <span style="--value:{nowToFinal.hours};" />
            </span>
            hours
          </div>
          <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              <span style="--value:{nowToFinal.minutes};" />
            </span>
            min
          </div>
          <div
            class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
          >
            <span class="countdown font-mono text-5xl">
              <span style="--value:{parseInt(nowToFinal.seconds)};" />
            </span>
            sec
          </div>
        </div>
        <progress
          class="progress progress-success w-100 mt-5"
          value={progressPercentage.toFixed(2)}
          max="100"
        />
      </div>
    {:else}
      <!-- The button to open modal -->
      <label for="my-modal-4" class="btn btn-wide btn-lg">Useless button</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">
            ... but you still clicked it
          </h3>
          <img alt="welcome home gif" src="https://media.giphy.com/media/3o7aDgf134NzaaHI8o/giphy.gif" />
        </label>
      </label>
    {/if}
  </div>
</main>

<style>
</style>
