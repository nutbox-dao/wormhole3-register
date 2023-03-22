import * as Vuex from 'vuex'
import Cookie from 'vue-cookies'
import { b64uEnc, b64uDec } from '@/utils/helper'

export default Vuex.createStore({
  state: {
    rsaKey: Cookie.get('keyPair'),
    accountInfo: localStorage.getItem('accountInfo'),
    monitorNftInserval: {},
    hasReceivedNft: true,
    steemBalance: 0,
    sbdBalance: 0,
    rcPercent: 0,
    ethBalance: 0,
    ethAddress: null,
    prices: {},
    erc20Balances: {},
    posts: [],
    joinedCurations: [],
    createdCurations: [],
    transactions: [],
    tips: [],
    vestsToSteem: 1,
    referee: '',
    stellarTreks: {},
    worldCupNFT: {},
    christmasNFT: {},
    luckyCardsNFT: {},
    curatorNFT: 0,
    showLogin: false,
    getCardVisible: false,
    newCardId: 0,
    bindNewAccountInfo: {}
  },
  getters: {
    getPrivateKey: (state) => (publicKey) => {
      if (state.rsaKey){
        if (publicKey === state.rsaKey.publicKey) {
          return b64uDec(state.rsaKey.privateKey)
        }
      }
    },
    getAccountInfo: (state) => {
      const acc = state.accountInfo
      if (acc) {
        if (acc.twitterUsername) {
           return acc
        }
        return JSON.parse(acc)
      }else {
        const accInfo = localStorage.getItem('accountInfo')
        if (accInfo)
          return JSON.parse(accInfo)
        return null
      }
    }
  },
  mutations: {
    saveKeyPair: (state, rsaKey) => {
      if (rsaKey){
        rsaKey.privateKey = b64uEnc(rsaKey.privateKey)
      }
      state.rsaKey = rsaKey;
      Cookie.set('keyPair', state.rsaKey, '7d')
    },
    saveAccountInfo: (state, accountInfo) => {
      if (!accountInfo || Object.keys(accountInfo).length === 0) {
        state.accountInfo = null;
        // to do
        // try{
        //   clearInterval(state.monitorNftInserval)
        // }catch(e){}
        localStorage.removeItem('accountInfo')
      }else {
        state.accountInfo = JSON.stringify(accountInfo);
        // Cookie.set('accountInfo', JSON.stringify(accountInfo), '30d');
        localStorage.setItem('accountInfo', JSON.stringify(accountInfo))
      }

    },
    saveMonitorNftInserval: (state, monitorNftInserval) => {
      state.monitorNftInserval = monitorNftInserval
    },
    saveHasReceivedNft: (state, hasReceivedNft) => {
      state.hasReceivedNft = hasReceivedNft
    },
    saveSteemBalance: (state, steemBalance) => {
      state.steemBalance = steemBalance
    },
    saveSbdBalance: (state, sbdBalance) => {
      state.sbdBalance = sbdBalance
    },
    saveRcPercent: (state, rcPercent) => {
      state.rcPercent = rcPercent
    },
    savePrices: (state, prices) => {
      state.prices = prices
    },
    saveEthBalance: (state, ethBalance) => {
      state.ethBalance = ethBalance
    },
    saveEthAddress: (state, ethAddress) => {
      state.ethAddress = ethAddress
    },
    saveERC20Balances: (state, erc20Balances) => {
      state.erc20Balances = erc20Balances
    },
    savePosts: (state, posts) => {
      state.posts = posts
    },
    saveJoinedCurations: (state, joinedCurations) => {
      state.joinedCurations = joinedCurations
    },
    saveCreatedCurations: (state, createdCurations) => {
      state.createdCurations = createdCurations
    },
    saveTransactions: (state, transactions) => {
      state.transactions = transactions
    },
    saveTips: (state, tips) => {
      state.tips = tips
    },
    saveVestsToSteem: (state, vestsToSteem) => {
      state.vestsToSteem = vestsToSteem
    },
    saveReferee: (state, referee) => {
      state.referee = referee
    },
    saveStellarTreks: (state, stellarTreks) => {
      state.stellarTreks = stellarTreks
    },
    saveLuckyCardsNFT: (state, luckyCardsNFT) => {
      state.luckyCardsNFT = luckyCardsNFT
    },
    saveWorldCupNFT: (state, worldCupNFT) => {
      state.worldCupNFT = worldCupNFT
    },
    saveChristmasNFT: (state, christmasNFT) => {
      state.christmasNFT = christmasNFT
    },
    saveCuratorNFT: (state, curatorNFT) => {
      state.curatorNFT = curatorNFT
    },
    saveShowLogin: (state, showLogin) => {
      state.showLogin = showLogin
    },
    saveGetCardVisible: (state, getCardVisible) => {
      state.getCardVisible = getCardVisible
    },
    saveNewCardId: (state, newCardId) => {
      state.newCardId = newCardId
    },
    saveBindNewAccountInfo: (state, bindNewAccountInfo) => {
      state.bindNewAccountInfo = bindNewAccountInfo
    }
  }
})
