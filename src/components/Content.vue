<template>
	<div id="artical" class="weui_tab_bd">
        <router-view></router-view>
    </div>
</template>
<script>
	export default {
		data () {
			return {
				msg:'this is content'
			}
		}
	}
</script>