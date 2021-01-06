<template id="comment-form">
	<div class="form-wrap container">
		<div v-if="!submitted">
			<div class="form-group">
				<input v-model.number="number1" v-bind:class="{'form-control':true, 'is-invalid' : !validNumber(number1) && numberBlured}" v-on:blur="numberBlured = true" placeholder="第一组三位数">
				<div class="invalid-feedback">请输入一个有效的三位数</div>
			</div>
			<div class="form-group">
				<input v-model.number="number2" v-bind:class="{'form-control':true, 'is-invalid' : !validNumber(number2) && numberBlured}" v-on:blur="numberBlured = true" placeholder="第二组三位数">
				<div class="invalid-feedback">请输入一个有效的三位数</div>
			</div>
			<div class="form-group">
				<input v-model.number="number3" v-bind:class="{'form-control':true, 'is-invalid' : !validNumber(number3) && numberBlured}" v-on:blur="numberBlured = true" placeholder="第三组三位数">
				<div class="invalid-feedback">请输入一个有效的三位数</div>
			</div>
			<div class="form-group">
				<a type="submit" href="#" v-on:click.stop.prevent="submit" class="btn btn-lg btn-success">提交</a>
			</div>
		</div>
	</div>
	<!--end form-wrapper-->
</template>

<script>
	import gua from "@/data/gua-data";
	export default {
		name: 'GuaForm',
		data() {
			return {
				number1: "",
				number2: "",
				number3: "",
				numberBlured: false,
				valid: false,
				submitted: false
			}
		},
		methods: {
			validate: function() {
				this.numberBlured = true;
				if (this.validNumber(this.number1) && this.validNumber(this.number2) && this.validNumber(this.number3)) {
					this.valid = true;
				}
			},
			validNumber: function(number) {
				var re = /^\d{3}$/;
				return re.test(number);
			},
			submit: function() {
				this.validate();
				if (this.valid) {
					this.$router.push({ name: 'DestinationDetails', params: {name: this.result.name, downer: this.resultDowner.name, upper: this.resultUpper.name, yao: this.number3%6 === 0?6:this.number3%6}});
					this.submitted = true;
				}
			} //end submit
		},
		computed: {
			resultDowner() {
				return gua.xianTian8Gua.find(
					result => parseInt(result.id) === (this.number1%8 === 0?8:this.number1%8)
				);
			},
			resultUpper() {
				return gua.xianTian8Gua.find(
					result => parseInt(result.id) === (this.number2%8 === 0?8:this.number2%8)
				);
			},
			result(){
				return gua.details.find(
					detail => detail.id === this.resultUpper.key+this.resultDowner.key
				);
			}
		}
	}
</script>

<style>
	.form-wrap {
		padding-top: 35px;
	}

	.alert {
		padding-top: 1.5rem;
	}

	.alert h5 {
		margin-bottom: 0.0rem;
	}
</style>
