<template>
	<div id="app">
		<router-view class="root" />
		<!--        <mask-authorization v-if="userCode == null"></mask-authorization>-->
		<mask-authorization v-if="nologined"></mask-authorization>
	</div>
</template>

<script>
	import MaskAuthorization from "./components/MaskAuthorization";

	export default {
		components: {
			MaskAuthorization
		},
		data() {
			return {
				url: process.env.VUE_APP_URL,
				userId: null,
				userCode: null,
				screenHeight: '',
				user: null,
				nologined: false
			}
		},

		methods: {
			initTheREM() { //初始化  rem 单位
				const doc = window.document;
				const docEl = doc.documentElement;
				const refreshRem = () => {
					const rem = docEl.getBoundingClientRect().width / 47;
					// alert(docEl.getBoundingClientRect().width + ' , ' + document.documentElement.clientHeight);
					docEl.style.fontSize = rem + 'px';
				}
				refreshRem();
				window.addEventListener('resize',
					() => {
						window.clearTimeout(tid);
						var tid = window.setTimeout(refreshRem, 300);
					}
				)
			},

			getThisUrl(name) { //获取URL上的参数
				//     http://localhost:8080/thehome/?tpken=hsdfhdghsgfhgccsdff


				//先解析URL地址，获取token
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);

				if (r != null) { //token不为空，是通过服务器调回来的,说明已经通过授权，则把用户token存入本地
					this.userCode = unescape(r[2]); //把code赋值
					this.nologined = false; //隐藏授权窗口
					localStorage.setItem('userToken', this.userCode); //存入用户的token
				} else {
					if (localStorage.getItem('userToken') != null) this.nologined = false;
					else this.nologined = true;
				}

			},

			theHight() { //解决安卓端软键盘弹出压缩页面
				let keshiHeight = document.documentElement.clientHeight; //获取页面高度
				document.getElementsByTagName('body')[0].style.height = keshiHeight + 'px'; //给页面定固定值
				document.getElementById('app').style.height = keshiHeight + 'px'; //给页面定固定值
			}
		},
		mounted() {
			this.theHight();
		},
		created() {
			console.log(this.url);
			// localStorage.removeItem('userToken');
			this.initTheREM(); //初始化单位 rem
			this.getThisUrl('token'); //获取用户xxx码，如果返回此码，则说明已经授权，然后把此码传给后台，后台返回用户基本信息。
			//从后台获取用户ID来判断用户是否授权
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#app {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}

	.root {
		height: 100%;
		overflow-x: hidden;
		font-size: 100%;
	}


	.root {
		overflow-y: auto;

	}

	.root::-webkit-scrollbar {
		width: 0 !important
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
</style>
