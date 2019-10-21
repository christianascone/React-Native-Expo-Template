# **:triangular_flag_on_post: React-Native Expo Template**

![project version](https://img.shields.io/badge/project-0.0.1-brightgreen.svg)
![expo version](https://img.shields.io/badge/expo-^34.0.1-brightgreen.svg)
![react version](https://img.shields.io/badge/react-16.8.3-brightgreen.svg)
![yarn version](https://img.shields.io/badge/yarn->=1.17.3-brightgreen.svg)

> React-native project of Backend

---

## **:package: Main tools used**

- [x] expo
- [x] react
- [x] react-dom
- [x] react-native
- [x] react-native-web
- [x] openapi-generator

---

## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**PROJECT**](https://www.google.com/search?q=how+to+install+project) (version 0.0.1)
- [**EXPO**](https://www.google.com/search?q=how+to+install+expo) (version ^34.0.1)
- [**REACT**](https://www.google.com/search?q=how+to+install+react) (version 16.8.3)
- [**YARN**](https://www.google.com/search?q=how+to+install+yarn) (version >= 1.17.3)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/christianascone/React-Native-Expo-Template.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `yarn install`

#### Configuration

Copy `.env.example` to `.env` and edit it with your data.
```
DEBUG_ROOM=false
ENVIRONMENT=local
ENDPOINT=http://backend.test
OAUTH_CLIENT_ID=2
OAUTH_CLIENT_SECRET=bLl7u2FeUtD2p81q15eL6ZHjvgphZal3DeZgDFSP
SENTRY_DSN=https://1234e835b4b41bb4be891d38e3881:123472e954f43af201f325bc71499@sentry.io/0123456
SENTRY_ENABLE_DEVELOPMENT=true
SENTRY_ORG=luna-srl
SENTRY_PROJECT=bfree
SENTRY_AUTH_TOKEN=5Sa5b7u22SUtD2a81qadseL6HjFF3rewl3Ddsae43FSP
GOOGLE_API_KEY=YOUR_API_KEY
ANDROID_GOOGLE_API_KEY=YOUR_ANDROID_API_KEY
```

Then run the general config script:
```sh
yarn run config
```

and app config script:
```sh
yarn run config-app
```

---

### Start the project

```bash
yarn start
```

To start project for web run
```bash
yarn web
```

### Test the project

```bash
yarn test
```

---

### **Deploy**

To deploy standalone android app:
```bash
expo build:android
```

To deploy standalone ios app:
```bash
expo build:ios
```

To update published app on expo
```bash
expo publish
```
---

### Openapi generator

You can generate api classes using openapi-generator, but pay attention to not 
overwrite the `runtime.ts`.
```sh
openapi-generator generate -i doc/openapi.yaml -g typescript-fetch -o app/services --skip-validate-spec
git checkout app/services/src/runtime.ts
```

---


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b feature/my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin feature/my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Free Logo Design](https://www.freelogodesign.org) (For logo)

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **:scroll: Release history**

* 0.0.1
    * Work in progress

---

### **:robot: Author**

_*Christian Ascone*_

> You can follow me on
[GitHub](https://github.com/christianascone)&nbsp;&middot;&nbsp;[GitLab](https://gitlab.com/christianascone)

---

Copyright © 2019 [Christian Ascone](https://github.com/christianascone).\
License [MIT](https://github.com/christianascone/React-Native-Expo-Template/blob/master/LICENSE).