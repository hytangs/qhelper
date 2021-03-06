import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* fullScreen - fullscreen form layout (e.g. login page) */
    isFullScreen: false,

    /* Aside */
    isAsideMobileExpanded: false,
    isAsideLgActive: false,

    /* Dark mode */
    darkMode: false,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],

    /* Access Control */
    zones: false,

    /* Meta Admin Data */
    totalrooms: 0,
    vacantrooms: 0,
    occupiedrooms: 0,

    countstaff: 0,

    /* Room Default JSON Storage */
    roomTypeDefault: [{
      roomType: 'Room Type Undefined',
      roomVacancy: '0',
      roomTotal: '0',
      roomPrice: '0'
    }],

    roomGuestDefault: [{
      roomNo: '0000',
      roomGuestName: "First Last",
      roomStatus: 'Occupied',
      roomCheckout: 'Undefined',
      roomType: 'Undefined'
    }],

    publicBroadcast: [{
      contains: 'No message',
      date: 'N/A',
      sender: 'N/A',
      id: '-1'
    }],

    healthAlertDefault: [{
      room: '0000',
      guestName: 'First Last',
      date: 'Date',
      symptoms: 'no',
      temp: '0',
      request: '',
    }],

    feedbackData: [{
      Name: 'Name',
      Room: 'Room',
      Feedback: 'Feedback'
    }],

    guestInfo: [{
      Email: 'email',
      COD: 'country',
      Contact: '0',
      DOA: 'YYYYMMDD',
      Flight: '000',
      Fname: 'first',
      Lname: 'last',
      Passtype: 'pass',
      Password: 'password',
      Seat:'000',
      Vaccine:'status',
      Identity:'identity',
      RoomType:'roomType',
      RoomNumber:'0000',
      PCR:[],
      Gender: 'Miss',
      Length: '14',
    }],

    staffRoster: [{
      staffName: 'staff',
      account: 'staff',
      staffRole: 'role',
      staffZone: '0',
      deployed: '0',
      lastLogin: 'Unknown'
    }],

    roomMetaToGuest: [{
      havesingle: '0',
      havedouble: '0',
      havepremium: '0',
      haveapartment: '0',
      singlerate: '300',
      doublerate: '400',
      premiumrate: '450',
      apartmentrate: '800'
    }],

    quarantineRoster: [{
      room: '0000',
      start: 'YYYYMMDD',
      end: 'YYYYMMDD',
      pcr: [],
      quarantinePlan: '0',
      country: 'country'
    }],

    healthCheckOutRoster: [{
      room: '0000',
      name: 'name',
      date: 'YYYYMMDD',
    }],

    shopOrderRoster: [{
      room: '0000',
      name: 'name',
      order: 'order',
      amount: '$X',
      delivery: 'delivery',
      status: 'received',
      time: 'YYYYMMDD',
    }],

    breakfastRoster: [{
      room: '0000',
      name: 'name',
      selection: 'selection',
      request: '',
      status: 'received',
      date: 'YYYYMMDD',
    }],

    lunchRoster: [{
      room: '0000',
      name: 'name',
      selection: 'selection',
      request: '',
      status: 'received',
      date: 'YYYYMMDD',
    }],

    dinnerRoster: [{
      room: '0000',
      name: 'name',
      selection: 'selection',
      request: '',
      status: 'received',
      date: 'YYYYMMDD',
    }],

    announcementRoster: [{
      id: '0',
      announcement: 'content',
    }],

    healthpass: 'Please Declare',
  },

  mutations: {
    /* A fit-them-all commit */
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user (state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    meta (state, {meta}) {
      state.totalrooms = meta.totalrooms
      state.vacantrooms = meta.vacantrooms
      state.occupiedrooms = meta.occupiedrooms
    },

    countstaffaction (state, meta) {
      state.countstaff = meta
    },

    alterroomtype (state, meta) {
      state.roomTypeDefault = meta
    },

    alterroomguest (state, meta) {
      state.roomGuestDefault = meta
    },

    alterbroadcast (state, meta) {
      state.publicBroadcast = meta
    },

    alterHealthAlert (state, meta) {
      state.healthAlertDefault = meta
    },

    alterGuest(state, meta) {
      state.healthAlertDefault = meta
    },

    alterStaffRoster (state, meta) {
      state.staffRoster = meta
    },

    alterQuarantineRoster(state, meta){
      state.quarantineRoster = meta
    },

    alterHealthCheckOut(state, meta) {
      state.healthCheckOutRoster = meta
    },

    alterBreakfastRoster(state, meta) {
      state.breakfastRoster = meta
    },

    alterLunchRoster(state, meta) {
      state.lunchRoster = meta
    },

    alterDinnerRoster(state, meta) {
      state.dinnerRoster = meta
    },

    alterShopOrders(state, meta) {
      state.shopOrderRoster = meta
    },

    alterFeedbackData(state, meta) {
      state.feedbackData = meta
    },

    alterAnnouncementRoster(state, meta) {
      state.announcementRoster = meta
    },

    changeFname(state, payload) {
      state.guestInfo.Fname = payload
    },

    changeLname(state, payload) {
      state.guestInfo.Lname = payload
    },

    changeEmail(state, payload) {
      state.guestInfo.Email = payload
    },

    changeCOD(state, payload) {
      state.guestInfo.COD = payload
    },

    changeContact(state, payload) {
      state.guestInfo.Contact = payload
    },

    changeDOA(state, payload) {
      state.guestInfo.DOA = payload
    },

    changeFlight(state, payload) {
      state.guestInfo.Flight = payload
    },

    changePasstype(state, payload) {
      state.guestInfo.Passtype = payload
    },

    changePassword(state, payload) {
      state.guestInfo.Password = payload
    },

    changeSeat(state, payload) {
      state.guestInfo.Seat = payload
    },

    changeVaccine(state, payload) {
      state.guestInfo.Vaccine = payload
    },

    changeIdentity(state, payload) {
      state.guestInfo.Identity = payload
    },

    changeRoomType(state, payload) {
      state.guestInfo.RoomType = payload
    },

    changeRoomNumber(state, payload) {
      state.guestInfo.RoomNumber = payload
    },

    changePCR(state, payload) {
      state.guestInfo.PCR = payload
    },

    changeGender(state, payload) {
      state.guestInfo.Gender = payload
    },

    changeLength(state, payload) {
      state.guestInfo.Length = payload
    },

    alterGuestRoomSelect (state, meta) {
      state.roomMetaToGuest = meta
    },

    alterHealthPass (state, meta) {
      state.healthpass = meta
    }
  },
  actions: {
    asideMobileToggle ({ commit, state }, payload = null) {
      const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

      document.getElementById('app').classList[isShow ? 'add' : 'remove']('ml-60')

      document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

      commit('basic', {
        key: 'isAsideMobileExpanded',
        value: isShow
      })
    },

    asideLgToggle ({ commit, state }, payload = null) {
      commit('basic', { key: 'isAsideLgActive', value: payload !== null ? payload : !state.isAsideLgActive })
    },

    // eslint-disable-next-line no-unused-vars
    fullScreenToggle ({ commit, state }, value) {
      commit('basic', { key: 'isFullScreen', value })

      document.documentElement.classList[value ? 'add' : 'remove']('full-screen')
    },

    darkMode ({ commit, state }) {
      const value = !state.darkMode

      document.documentElement.classList[value ? 'add' : 'remove']('dark')

      commit('basic', {
        key: 'darkMode',
        value
      })
    },

    fetch ({ commit }, payload) {
      axios
        .get(`data-sources/${payload}.json`)
        .then((r) => {
          if (r.data) {
            if (r.data.data) {
              commit('basic', {
                key: payload,
                value: r.data.data
              })
            }
            if (r.data.status) {
              commit('basic', {
                key: `${payload}Status`,
                value: r.data.status
              })
            }
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  },
  modules: {
  },

  getters: {
    email: state => { return state.guestInfo.Email },

    cod: state => { return state.guestInfo.COD },

    contact: state => { return state.guestInfo.Contact },

    doa: state => { return state.guestInfo.DOA },

    flight: state => { return state.guestInfo.Flight },

    fname: state => { return state.guestInfo.Fname },

    lname: state => { return state.guestInfo.Lname },

    passtype: state => { return state.guestInfo.Passtype },

    password: state => { return state.guestInfo.Password },

    seat: state => { return state.guestInfo.Seat },

    vaccine: state => { return state.guestInfo.Vaccine },

    identity: state => { return state.guestInfo.Identity },

    roomType: state => { return state.guestInfo.RoomType },

    roomNumber: state => { return state.guestInfo.RoomNumber },

    pcr: state => { return state.guestInfo.PCR },

    gender: state => { return state.guestInfo.Gender },

    getLength: state => { return state.guestInfo.Length },
  }
})
