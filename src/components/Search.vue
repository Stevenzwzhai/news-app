<template>
	<div class="search">
	    <div :class="[classA, classB]" id="search_bar">
	        <form class="weui_search_outer">
	            <div class="weui_search_inner">
	                <i class="weui_icon_search"></i>
	                <input type="search" class="weui_search_input" v-model="searchtext" @focus="focusing" @blur="bluring" @keyup="keyuping" id="search_input" placeholder="搜索" required/>
	                <a href="javascript:" class="weui_icon_clear" @click="clear" id="search_clear"></a>
	            </div>
	            <label for="search_input" class="weui_search_text" id="search_text">
	                <i class="weui_icon_search"></i>
	                <span>搜索</span>
	            </label>
	        </form>
	        <a href="javascript:" class="weui_search_cancel" @click="cancel" id="search_cancel">取消</a>
	    </div>
	    <div class="weui_cells weui_cells_access search_show" v-show="isShow" id="search_show">
	        <div class="weui_cell">
	            <div class="weui_cell_bd weui_cell_primary">
	                <p>实时搜索文本</p>
	            </div>
	        </div>
	        <div class="weui_cell">
	            <div class="weui_cell_bd weui_cell_primary">
	                <p>实时搜索文本</p>
	            </div>
	        </div>
	        <div class="weui_cell">
	            <div class="weui_cell_bd weui_cell_primary">
	                <p>实时搜索文本</p>
	            </div>
	        </div>
	        <div class="weui_cell">
	            <div class="weui_cell_bd weui_cell_primary">
	                <p>实时搜索文本</p>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default{
		ready () {

			
		},
		data () {
			return {
				"msg":"this is head",
				"focusing":"",
				"searchtext":"",
				"classA":"weui_search_bar",
				"classB":"",
				"isShow":false
			}
		},
		methods:{
			focusing () {

				this.classB = "weui_search_focusing";
			},
			bluring () {
				if (this.searchtext) {
                    this.isShow = true;
                    console.log(this.searchtext)
                } else {
                    this.isShow = false;
					this.classB = "";
                }
			},
			keyuping () {
				if(this.searchtext){
					this.isShow = true;
				}else{
					this.isShow = false;
				}
			},
			clear () {
				this.searchtext = "";
			},
			cancel () {
				this.classB = "";
				this.searchtext = "";
			}

		}
	}
</script>
<style>
	.search{
		position:absolute;
		z-index:5;
		width:100%;
	}
</style>