import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

class UserInfoService {
  // const [userInfo, setUserInfo] = useState(false);

  // function checkUserLogInStatus() {
  //   const atvSessionCookie = cookies.get('ATVSessionCookie');
  //   console.log(atvSessionCookie);
  //   if (atvSessionCookie) {
  //     fetch(`https://dev-api.rlje.net/acorn/profile?SessionID=${atvSessionCookie}`)
  //       .then((resp) => {
  //         const data = resp.json();
  //         console.log(data);
  //         return data;
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setUserInfo(data);
  //       });
  //   } else {
  //     setUserInfo(false);
  //   }
  // }

  cookies = new Cookies();

  atvSessionCookie = this.cookies.get('ATVSessionCookie');

  getUserStatus(callback: Function): any {
    if (this.atvSessionCookie) {
      fetch(`https://dev-api.rlje.net/acorn/profile?SessionID=${this.atvSessionCookie}`)
        .then((response) => {
          const json = response.json();
          console.log(json);
          return json;
        })
        .then((json) => {
          return callback(json);
        })
        .catch((error) => {
          console.log(error);
          return callback('\u2014');
        });
    }

    return false;
  }

  // useEffect(() => {
  //   if (userInfo) {
  //     console.log(userInfo);
  //   } else {
  //     checkUserLogInStatus();
  //   }
  // });
}

export default UserInfoService;
