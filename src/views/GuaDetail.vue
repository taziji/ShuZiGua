<template>
	<div class="gua small">
		<h1 display="inline-block">
			{{detail.name}}卦
		</h1>
		<section class="gua">
			<span v-for="(y,index) in detail.id.split('')" :key="index" :class=yaoClass(y,index)>
			</span>
		</section>
		<p>
			{{detail.guaci}}
		</p>
		<p>
			{{detail.tuan}}
		</p>
		<ul id="yaoci">
			<li v-for="(item, index) in detail.yaoci" :key="index" :class="index+1 === parseInt(yao)? 'active':''">
				{{ item }}
			</li>
			
		</ul>


		<router-view :key="$route.path" />
	</div>

</template>

<script>
	import gua from "@/data/gua-data";
	export default {
		components: {},
		data() {
			return {
				yao: this.$route.query.yao
			};
		},
		props: {
			name: {
				type: String,
				required: true
			}
		},
		computed: {
			detail() {
				return gua.details.find(
					detail => detail.name === this.name
				);
			}
		},
		methods: {
			
			yaoClass(y,index){				
				var className;				
				className = (y==='1'?'yang':'yin');
				
				if(6-index === parseInt(this.yao))
					className +=  ' active';
				
				console.log('yao: '+ this.yao);
				console.log(y+' ' + index);
				
				return(className);
			}
		}
	};
</script>

<style scoped>
	section.gua{
		display: inline-block;
		padding-bottom: 12px;
	}
	
	li {
		list-style-type: none;
	}

	.gua {}

	.gua .yang,
	.gua .yin {
		display: block;
		cursor: pointer;
	}

	.gua-simple .gua .yang,
	.gua-simple .gua .yin,
	.gua-simple .gua .name,
	.gua-simple .gua .name2 {
		cursor: auto;
	}

	a.gua-simple:hover {
		text-decoration: none;
	}

	.gua .name,
	.gua .name2 {
		cursor: pointer;
	}

	.gua .yang.inactive,
	.gua .yin.inactive {
		opacity: 0.2;
	}
	
	
	.gua .yang {
		background-color: #000;
	}

	.gua .yin {
		border-color: #000;
		border-left-style: solid;
		border-right-style: solid;
	}

	.yang.active{
		background-color: #FF1100;
	}
	.yin.active{
		border-color: #FF1100;
	}
	
	/* ==================== Large */
	.gua.large .name {
		margin-left: 60px;
		font-size: 28pt;
	}

	.gua.large .name2 {
		font-size: 28pt;
		margin-left: 40px;
	}

	.gua.large .yang,
	.gua.large .yin {
		margin-bottom: 15px;
		height: 30px;
		width: 160px;
	}

	.gua.large .yin {
		border-left-width: 75px;
		border-right-width: 75px;
	}

	/* ==================== Small */
	.gua.small .name {
		margin-bottom: 2px;
		font-size: 18px;
	}

	.gua.small .name2 {
		font-size: 18px;
	}

	.gua.small .yang,
	.gua.small .yin {
		margin-bottom: 3px;
		height: 5px;
		width: 46px;
	}

	.gua.small .yin {
		border-left-width: 21px;
		border-right-width: 21px;
	}

	/* ==================== Explanation */

	.explanation {
		margin-top: 55px;

		section label {
			font-size: 18pt;
		}
	}
	
	p, li.active {
		font-weight: bold;
		color: red;
	}
</style>
