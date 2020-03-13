import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { firebase } from './firebase';

const PUSH_ENDPOINT = 'https://fcm.googleapis.com/fcm/send';

export const registerForPushNotificationsAsync = async() => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    // only asks if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    // On Android, permissions are granted on app installation, so
    // `askAsync` will never prompt the user

    // Stop here if the user did not grant permissions
    if (status !== 'granted') {
        alert('No notification permissions!');
        return;
    }

    // Get the token that identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    const str = token.split('ExponentPushToken')[1];
    const id =str.slice(1, str.length - 1);
    firebase.database().ref(`mobileUsers/${id}`).set({ token });

    // POST the token to your backend server from where you can retrieve it to send push notifications.
    return fetch(PUSH_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: '',
            sound: 'default',
            title: 'Demo',
            body: 'Demo notificaiton'
        }),
    });
}
