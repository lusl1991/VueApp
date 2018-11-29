import getters from './getter.js';
const state = {
	isShow: true,
	isNavShow: true,
	isLogin: false,
	username: '',
	starnum: 0,
	focusnum: 0,
	fannum: 0,
	fabunum: 0,
	sellnum: 0,
	buynum: 0,
	money: 0,
	likenum: 0,
	goodstitle: '',
	goodsinfo: '',
	imgUrl: '',
	price: '',
	kind: '',
	primecost: '',
	freight: '',
	news: '',
	addr: {},
	buyinfo: [],
	curindex: 0,
	fabuinfo: [],
	show: true,
	userinfo: {}
}
const mutations = {
	setShow: (state, bool) =>{
		state.show = bool
	},
	setCurindex: (state, index) => {
		state.curindex = index
	},
	showNav: (state) => {
		state.isNavShow = true
	},
	hideNav: (state) => {
		state.isNavShow = false
	},
	hasLogin: (state) => {
		state.isLogin = true
	},
	noLogin: (state) => {
		state.isLogin = false
	},
	setUsername: (state, username) => {
		state.username = username
	},
	setStarnum: (state) => {
		state.starnum = state.starnum +1
	},
	cutStarnum: (state) => {
		state.starnum --
	},
	setFocusnum: (state) => {
		state.focusnum ++
	},
	cutFocusnum: (state) => {
		state.focusnum --
	},
	setFannum: (state) => {
		state.fannum ++
	},
	cutFannum: (state) => {
		state.fannum --
	},
	setFabunum: (state) => {
		state.fabunum ++
	},
	cutFabunum: (state) => {
		state.fabunum --
	},
	setSellnum: (state) => {
		state.sellnum ++
	},
	cutSellnum: (state) => {
		state.sellnum --
	},
	setBuynum: (state) => {
		state.buynum ++
	},
	cutBuynum: (state) => {
		state.buynum --
	},
	setLikenum: (state) => {
		state.likenum ++
	},
	cutLikenum: (state) => {
		state.likenum --
	},
	setGoodstilte: (state, goodstitle) => {
		state.goodstitle = goodstitle
	},
	setGoodsinfo: (state, goodsinfo) => {
		state.goodsinfo = goodsinfo
	},
	setImgurl: (state, imgurl) => {
		state.imgurl = imgurl
	},
	setPrice: (state, price) => {
		state.price = price
	},
	setKind: (state, showkind) => {
		state.showkind == showkind
	},
	setPrimecost: (state, primecost) => {
		state.primecost = primecost
	},
	setFreight: (state, freight) => {
		state.freight = freight
	},
	setNews: (state, news) => {
		state.news = news
	},
	setAddr: (state, addr) => {
		state.addr = addr
	},
	setBuyinfo: (state, info) => {
		state.buyinfo.push(info)
	},
	cutBuyinfo: (state, index) => {
		state.buyinfo.splice(index,1)
		state.buynum--
	},
	setFabuinfo: (state, info) => {
		state.fabuinfo.push(info)
		console.log(state.fabuinfo)
	},
	cutFabuinfo: (state, index) => {
		state.fabuinfo.splice(index,1)
		state.fabunum--
	},
	setReceive: (state, obj) => {
		state.buyinfo[obj.index].receive = obj.receive
	},
	setDel: (state, obj) => {
		state.buyinfo[obj.index].del = obj.del
	},
	setUserinfo: (state, userinfo) =>{
		window.localStorage.setItem('useravatar',userinfo.avatar)
		state.userinfo = userinfo
	}

}
export default {
	getters,
	state,
	mutations
}