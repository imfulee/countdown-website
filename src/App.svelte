<script lang="ts">
  import { DateTime } from "luxon";
  import BoxTimeUnit from "./components/BoxTimeUnit.svelte";

  const timezone = "Asia/Taipei";

  let now = DateTime.now().setZone(timezone);
  const final = DateTime.fromISO("2024-12-12T20:05:00+08:00").setZone(timezone);
  const start = DateTime.fromISO("2022-09-19T07:00:00+08:00").setZone(timezone);

  setInterval(() => (now = DateTime.now().setZone(timezone)), 1000);

  $: startToFinal = final.diff(start);
  $: startToNow = now.diff(start);
  $: nowToFinal = final.diff(now);

  $: nowToFinalObj = nowToFinal
    .shiftTo("years", "months", "days", "hours", "minutes", "seconds")
    .toObject();
  $: progressPercentage =
    now < final ? (startToNow.toMillis() / startToFinal.toMillis()) * 100 : 100;
</script>

<main>
  <div class="hero min-h-screen">
    {#if progressPercentage !== 100}
      <div class="text-center">
        <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
          <BoxTimeUnit timeValue={nowToFinalObj.years} timeUnit={"years"} />
          <BoxTimeUnit timeValue={nowToFinalObj.months} timeUnit={"months"} />
          <BoxTimeUnit timeValue={nowToFinalObj.days} timeUnit={"days"} />
          <BoxTimeUnit timeValue={nowToFinalObj.hours} timeUnit={"hours"} />
          <BoxTimeUnit timeValue={nowToFinalObj.minutes} timeUnit={"minutes"} />
          <BoxTimeUnit
            timeValue={Math.ceil(nowToFinalObj.seconds)}
            timeUnit={"seconds"}
          />
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

      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">... but you still clicked it</h3>
          <img
            alt="welcome home gif"
            src="https://media.giphy.com/media/3o7aDgf134NzaaHI8o/giphy.gif"
          />
        </label>
      </label>
    {/if}
  </div>
</main>

<style>
</style>
