<template>
    <div class="weui_tabbar">
        <a href="javascript:;" v-link="{path:'/news'}"  class="weui_tabbar_item weui_bar_item_on">
            <div class="weui_tabbar_icon">
                <img src="../images/icon_nav_button.png" alt="">
            </div>
            <p class="weui_tabbar_label">新闻</p>
        </a>
        <a href="javascript:;" v-link="{path:'/imgs'}" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../images/icon_nav_msg.png" alt="">
            </div>
            <p class="weui_tabbar_label">图片</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../images/icon_nav_article.png" alt="">
            </div>
            <p class="weui_tabbar_label">文章</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../images/icon_nav_cell.png" alt="">
            </div>
            <p class="weui_tabbar_label">我</p>
        </a>
    </div>
</template>

<script>
	import News from './content/News'
	import Image from './content/Image'
	export default {
		data () {
			return {
				msg:"2332"
			}
		}
	}
</script>
<style>
	.tab_foot{
		bottom:0;
		height: 100%;
	}
</style>