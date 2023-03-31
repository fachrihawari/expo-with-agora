# Agora Integration


## 1. Install eas cli

```bash
npm install --global eas-cli
```

## 2. Install deps

```bash
npm i agora-react-native-rtm agora-rn-uikit expo-dev-client react-native-agora
```

## 3. Create & set expo project to app.json

```bash
eas init
# kalo dapet pertanyaan gini > Would you like to create a project for @fachrihawari/hck-55-agora-2? › (Y/n)
# tekan enter aja
```

## 4. Init build configuration

```bash
eas build:configure
```

## 5. Build custom expo go untuk development

```bash
eas build --platform android --profile development

# ketika jalanin command diatas akan dapet beberapa pertanyaan, cukup teken enter enter aja
# 📝  Android application id Learn more
# ✔ What would you like your Android application id to be? … com.fachrihawari.hck55agora2
# ✔ Using remote Android credentials (Expo server)
# ✔ Generate a new Android Keystore? … yes
# ✔ Created keystore

```

## 6. Lets' run it

you can simply copy App.js to your project and adjust the code based on your needs

