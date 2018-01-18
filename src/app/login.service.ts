import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

    users = [
        {uid: 'fs', pwd: 'test'},
        {uid: 'cr', pwd: '15MadtMK'}
    ];

    evaluate(uid, pwd) {

        for (const user of this.users) {
            if (user.uid === uid && user.pwd === pwd) {
              return true;
            }
        }

        return false;
    }
}
