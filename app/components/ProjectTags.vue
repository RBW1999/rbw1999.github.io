<script setup lang="ts">
const props = defineProps<{
  tags: string[];
}>();

const visibleTags = computed(() => props.tags.slice(0, 3));
const hasMore = computed(() => props.tags.length > 3);

function tagColorClass(tag: string) {
  const normalized = tag.toLowerCase().trim();

  if (["vr", "xr", "ar"].includes(normalized)) {
    return "tag--green";
  }

  if (normalized.includes("unreal")) {
    return "tag--purple";
  }

  if (
    normalized.includes("nuxt") ||
    normalized.includes("vue") ||
    normalized.includes("web")
  ) {
    return "tag--magenta";
  }

  return "tag--gray";
}
</script>

<template>
  <div class="flex h-[22px] min-w-0 gap-[10px] overflow-hidden">
    <span
      v-for="tag in visibleTags"
      :key="tag"
      class="tag"
      :class="tagColorClass(tag)"
    >
      {{ tag }}
    </span>
    <span v-if="hasMore" class="tag tag--gray">
      ...
    </span>
  </div>
</template>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border-style: solid;
  border-width: 0.5px;
  padding: 1px 8px;
  font-size: 1rem;
  line-height: normal;
  white-space: nowrap;
}

.tag--green {
  border-color: #499a45;
  background: rgba(73, 154, 69, 0.25);
}

.tag--purple {
  border-color: #5555a9;
  background: rgba(85, 85, 169, 0.25);
}

.tag--magenta {
  border-color: #8b4098;
  background: rgba(139, 64, 152, 0.25);
}

.tag--gray {
  border-color: #7c7c7c;
  background: rgba(83, 83, 83, 0.25);
}
</style>
