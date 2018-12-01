<template>
	<div class="wrap">
		<div class="head">
			<div class="back" @click="util.comBack">
				<img  src="../assets/images/返回.png" alt="">
			</div>
			<div class="title">添加新地址</div>
			<div class="save" @click="save">保存</div>
		</div>
		<div class="addrbox">
			<div class="set">
				<label for="" class="label" >收货人:</label>
				<input  type="text" v-model="addressForm.name">
			</div>
			<div class="set">
				<label for="" class="label">联系电话:</label>
				<input type="tel"  v-model="addressForm.phone">
			</div>
			<div class="set" @click="()=>addressVisible=true">
				<label for="" class="label">所在地区:</label>
				<input type="text" :value="(addressForm.province + addressForm.city + addressForm.area)||''" placeholder="">
			</div>
			<div>
				<mt-popup v-model="addressVisible" position="bottom" class="address-pricker">
					<div class="address-picker-header">
					<p>配送至</p>
					<span class="picker-close" @click="reset">&times;</span>
					</div>
					<v-distpicker :placeholders="{ province: '请选择', city: '请选择', district: '请选择' }" wrapper="address-pricker-wrapper" type="mobile"
					@selected="onSelected"></v-distpicker>
				</mt-popup>
			</div>
			<div class="set">
				<label for="" class="label">详细地址:</label>
				<input type="text" v-model="addressForm.address" name="moreaddr" placeholder="街道、楼牌号">
			</div>
			<div class="set">
				<label for="" class="label">设为默认地址:</label>
				<mt-switch v-model="addressForm.selected"></mt-switch>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import {Toast} from 'mint-ui'
import VDistpicker from 'v-distpicker'
export default {
	components: {
      VDistpicker
    },
	data () {
		return {
			addressForm: {
				name: '',
				phone: '',
				province: '',
				city: '',
				area: '',
				address: '',
				selected: false
			},
			addressVisible: false
		}
	},
	methods: {
		save () {
			if (this.addressForm.name == '') {
				Toast('请填写收货人姓名')
				return
			}
			if (this.addressForm.phone == '') {
				Toast('请填写电话号码')
				return
			}
			if (this.addressForm.province == '' || this.addressForm.city == '' || this.addressForm.area == '') {
				Toast('请选择所在地区')
				return
			}
			if (this.addressForm.address == '') {
				Toast('请填写详细地址，让宝贝早点找到你')
				return
			}
			this.$store.dispatch('setAddr',this.addressForm)
			Toast('保存成功')
			this.$router.push({path:'/pay'})
		},
		onSelected(data) {
			this.addressVisible = false;
			this.addressForm.province = data.province.value;
			this.addressForm.city = data.city.value;
			this.addressForm.area = data.area.value;
		},
		reset() {
			this.addressVisible = false;
			this.addressForm.province = '';
			this.addressForm.city = '';
			this.addressForm.area = '';
		}
	}
}
</script>
<style lang="scss" scoped>
.wrap {
	width: 100%;
	height: 100vh;
	background-color: #f7f7f7;
}
.head {
	width: 100%;
	height: 5rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	background-color: #f7f7f7;
}
.back img{
	width: 3rem;
	height: 3rem;
}
.title {
	flex: 1;
	font-size: 1.6rem;
	font-weight: 700;
}
.save{
	font-size: 1.4rem;
	color: red;
	padding-right: 1.2rem;
	box-sizing: border-box;
}
.addrbox {
	background-color: #fff;
	
}
.set {
	display: -webkit-flex;
	display: flex;
	height: 5rem;
	align-items: center;
	padding: 0 1.2rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f7f7f7
}
.set .label {
	width: 8rem;
	font-size: 1.4rem;
	color: #333;
}
.set input {
	outline: none;
	border: none;
	font-size: 1.4rem;
}
#more {
	width: 100%;
	border: none;
	outline: none;
}
.address-pricker {
	width: 100%;
	height: 70%;
	.address-picker-header {
		position: relative;
		p {
			padding: 10px 0;
			font-size: 15px;
			color: #333;
			text-align: center;
		}
		.picker-close {
			position: absolute;
			right: 10px;
			bottom: 7px;
			font-weight: normal;
			font-size: 25px;
			color: #999;
			opacity: .7;
		}
	}
}

</style>