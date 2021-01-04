<template>
	<div id="app">
		<div id="nav">
			<router-link to="/ShuZiGua">主页</router-link> |
			<router-link to="/ShuZiGua/about">关于</router-link>
		</div>
		<img alt="Vue logo" src="@/assets/logo.png" class="logo">

		<router-view />
	</div>
</template>

<script>
export default {
  title: 'Foo Page'
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.logo {
		width: 200px;
		padding-bottom: 25px;
	}

	@import'~bootstrap/dist/css/bootstrap.css'
</style>
