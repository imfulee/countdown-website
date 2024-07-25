<script lang="ts">
  export let timeValue = 0;
  export let timeUnit = "";
</script>

<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
  <span class="countdown font-mono text-5xl">
    <span style="--value:{timeValue};" />
  </span>
  {timeUnit}
</div>
