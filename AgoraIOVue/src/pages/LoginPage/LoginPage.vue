<template>
 <div class="login-page">
    <form @submit.prevent="submit_form">
      <div class="logo">
        <img src="../../assets/logo/agora-logo.svg" alt="">
      </div>

      <div class="pair">
        <label for="appId">agora appid</label>
        <input type="text" v-model="appId" placeholder="enter appId here">
      </div>

      <div class="pair">
        <label for="">agora token</label>
        <input type="text" v-model="token" placeholder="enter token here">
      </div>

      <div class="submit-btn">
        <button type="submit">start</button>
      </div>
    </form>
 </div>
</template>

<script>
export default{
  name: "LoginPage",
  methods:{
    submit_form(){

    }
  },
  data(){
    return{
      appId: '',
      token: '',
    }
  }
}
</script>

<style scoped>
.logo{
  padding-top: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img{
  max-height: 70%;
}
.login-page{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

form{
  width: 50%;
  height: 30%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.pair{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pair label{
  width: 50%;
  text-align: center;
  margin: 1% 0 0.5% 0;
}

.pair input{
  width: 50%;
  border: 2px solid #00B4DB;
  border-radius: 8px;
  padding: 0.5% 0.5%;
  text-align: center;
}

.submit-btn{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 1%;
}

.submit-btn button{
  border: 2px solid #00B4DB;
  background-color: black;
  color: #ECECEC;
  font-size: 18px;
  padding: 0.5% 3%;
  border-radius: 8px;
}

.submit-btn button:hover{
  border: 2px solid black;
  background-color: #00B4DB;
}
</style>
