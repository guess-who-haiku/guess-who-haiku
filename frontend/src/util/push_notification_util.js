export const pushRandomNotification = () => {
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      _push()
    }
  });

  const _push = () => {
    const title = 'Wooooo.....';
    const options = {
      body: ['Hey over here!', 'Look at me!', 'wee!!!'][Math.floor(Math.random() * 3)],
      // icon: <img_url>
    }
    new Notification(title, options);
  }
}