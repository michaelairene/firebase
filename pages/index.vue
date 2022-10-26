<template>
  <Tutorial />
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  async mounted() {
    const currentToken = await this.$fire.messaging.getToken();
    console.log("currentToken");
    console.log(currentToken);
    const data = JSON.stringify({
      notification: {
        title: "firebase",
        body: "firebase is awesome",
        click_action: "http://localhost:3000/",
        icon: "http://localhost:3000/assets/images/brand-logo.png",
      },
      to: currentToken,
    });
    const config = {
      method: "post",
      url: "https://fcm.googleapis.com/fcm/send",
      headers: {
        "Content-Type": "application/json",
        Authorization: "key=<yourServerKey>",
      },
      data,
    };
    const response = await axios(config);
    this.$fire.messaging.onMessage((payload) => {
      console.info("Message received: ", payload);
    });
    this.$fire.messaging.onTokenRefresh(async () => {
      const refreshToken = await this.$fire.messaging.getToken();
      console.log("Token Refreshed", refreshToken);
    });
  },
};
</script>
