<script lang="ts">
	import Apollo from '$lib/components/sections/Apollo.svelte';
	import Faq from '$lib/components/sections/Faq.svelte';
	import Hookah from '$lib/components/sections/Hookah.svelte';
	import Location_Map from '$lib/components/sections/Location_Map.svelte';
	import Main_Menu from '$lib/components/sections/Main_Menu.svelte';
	import Slider_Gallery from '$lib/components/sections/Slider_Gallery.svelte';
	import Wellcome from '$lib/components/sections/Wellcome.svelte';
	import Work from '$lib/components/sections/Work.svelte';
</script>

<svelte:head>
	<title>Apollo 15</title>
</svelte:head>

<Apollo />
<Wellcome />
<Hookah />
<Main_Menu />
<Slider_Gallery />
<Faq />
<Location_Map />
<Work />
