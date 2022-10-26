
    importScripts(
      'https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyDhsl8FeN_r-IilQQLWTCUlQxQnayOZxgA","authDomain":"test-nuxt-9aa3a.firebaseapp.com","projectId":"test-nuxt-9aa3a","storageBucket":"test-nuxt-9aa3a.appspot.com","messagingSenderId":"452604209733","appId":"1:452604209733:web:735b7cd466a337ee76d12c","measurementId":"G-2VEPKB8GK1"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    self.addEventListener('push', function (e) {
    data = e.data.json();
    var options = {
        body: data.notification.body,
        icon: data.notification.icon,
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
    };
});

self.addEventListener('notificationclick', function (event) {
    console.log('test', event)
    event.notification.close();
    const url = 'home';
    event.waitUntil(
        self.clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                console.log("open window")
            }
        })
    )
}, false);
    