# Mi Band/Amazfit OSC heart rate monitor for VRChat
![image](https://i.imgur.com/J6bFJ7u.png)  
By [Vard](https://twitter.com/VardFree)
- Based on Jaapp-'s [miband-5-heart-rate-monitor](https://github.com/Jaapp-/miband-5-heart-rate-monitor)

## What is this?
This app allows you to send OSC messages of your heart rate using your smartwatch/fitness tracker to VRChat.  
Basically it sets the float value of avatar parameter named `Heartrate` from -1(0bpm) to 1(255bpm)

## Supported devices
It was recently discovered that the app can support not only Mi band 4/5, but many more devices! If your smartwatch/fitness tracker supports Amazfit or Zepp apps, give it a try.
### Confirmed devices list:
- Xiaomi Mi band 4/5
- Amazfit Band 5/Bip S Lite

## Requirements
1. PC on Windows with Bluetooth 4.0 or higher
2. Browser that supports Web Bluetooth API ([Like Chrome](https://google.com/chrome))

## Usage
1. First and most complicated step is to get auth key of your device. (For more information - please visit https://freemyband.com/ or https://github.com/argrento/huami-token if you experienced with python)
2. Download [vrc-osc-miband-hrm.zip](https://github.com/vard88508/vrc-osc-miband-hrm/releases), unpack all files and run `vrc-osc-miband-hrm.exe` or if you don't trust me - Download this repository and run it trough node-js
3. Enter your auth key and click Connect
4. Pair your smartwatch/fitness tracker with browser
5. Wait about ~15s and done! Now you sending data about your heart rate to VRChat

## Example Avatar
As some of you asked - I made [Example Avatar unitypackage](https://github.com/vard88508/vrc-osc-miband-hrm/raw/main/Example_OSC_HRM_Avatar.unitypackage) (which is also requires RED_SIM's [Simple counter shader](https://patreon.com/posts/simple-counter-62864361)) to show how it works on avatar side.
