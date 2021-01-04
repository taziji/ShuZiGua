<template>
	<div class="gua-container">
		<h1>卦</h1>
		<h2 class="hide">主卦</h2>
		<div>
			<!-- 			<div class="col-sm-3 gua {{guaSize}}">
				<label ng-class="vo.name.length === 1 ? 'name' : 'name2'" ng-click="guaClick()">{{vo.name}}</label>
				<span ng-repeat="item in items" class="{{item.clazz}}" ng-click="yaoClick(5-$index)">
				</span>
			</div> -->
			<div class="col-sm-7 explanation">
				<section name="guaCi">
					<label>卦辞</label>
					<p>guaCi</p>
				</section>
				<section name="daXiang">
					<label>大象</label>
					<p>daXiang</p>
				</section>
				<section name="tuanCi">
					<label>彖辞</label>
					<p>tuanCi</p>
				</section>
				<section name="yaoCi">
					<label>爻辞</label>
					<p>yaoCi</p>
				</section>
				<section name="xiaoXiang">
					<label>小象</label>
					<p>xiaoXiang</p>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
