<script setup lang="ts">
const props = defineProps<{
  tags: string[];
}>();

const visibleTags = computed(() => props.tags.slice(0, 3));
const hasMore = computed(() => props.tags.length > 3);

const COLOR_CLASSES = {
  green: "border-[#499a45] bg-[rgba(73,154,69,0.25)]",
  purple: "border-[#5555a9] bg-[rgba(85,85,169,0.25)]",
  magenta: "border-[#8b4098] bg-[rgba(139,64,152,0.25)]",
  gray: "border-[#7c7c7c] bg-[rgba(83,83,83,0.25)]",
} as const;

function tagColor(tag: string) {
  const normalized = tag.toLowerCase().trim();

  if (["vr", "xr", "ar"].includes(normalized)) {
    return COLOR_CLASSES.green;
  }

  if (normalized.includes("unreal")) {
    return COLOR_CLASSES.purple;
  }

  if (
    ["web", "nuxt", "vue"].includes(normalized) ||
    normalized.includes("nuxt") ||
    normalized.includes("vue") ||
    normalized.includes("web")
  ) {
    return COLOR_CLASSES.magenta;
  }

  return COLOR_CLASSES.gray;
}
</script>

<template>
  <div class="flex h-[22px] min-w-0 gap-[10px] overflow-hidden">
    <span
      v-for="tag in visibleTags"
      :key="tag"
      :class="tagColor(tag)"
      class="inline-flex items-center rounded-full border-[0.5px] px-2 py-px text-base leading-[normal] whitespace-nowrap"
    >
      {{ tag }}
    </span>
    <span
      v-if="hasMore"
      :class="COLOR_CLASSES.gray"
      class="inline-flex items-center rounded-full border-[0.5px] px-2 py-px text-base leading-[normal] whitespace-nowrap"
    >
      ...
    </span>
  </div>
</template>
