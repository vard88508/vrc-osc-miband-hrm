# Mi Band/Amazfit OSC heart rate monitor for VRChat
![image](https://i.imgur.com/J6bFJ7u.png)  
By [Vard](https://twitter.com/VardFree)
- Based on Jaapp-'s [miband-5-heart-rate-monitor](https://github.com/Jaapp-/miband-5-heart-rate-monitor) and gzalo's [miband-6-heart-rate-monitor](https://github.com/gzalo/miband-6-heart-rate-monitor)
- Thanks [853](https://github.com/Sonic853), [Runnin4ik](https://github.com/Runnin4ik) and [Fummo](https://github.com/Fummowo) for contribution

## What is this?
This app allows you to send OSC messages of your heart rate using your smartwatch/fitness tracker to your VRChat Avatar/Chatbox.  
Basically you have 3 parameters to play with:
- `Heartrate` sends float value `from -1 to 1` (0-255bpm) (Use this when you need to display bpm counter)
- `Heartrate2` sends float value `from 0 to 1` (0-255bpm) (Easier to control your animations but not enough precise over network. Do not use this to display bpm counter. Use cases: making actual sound of heartbeat, making animations which speed is equal to your bpm)
- `Heartrate3` sends int value `from 0 to 255` (0-255bpm) (Useful for those who wanna bind specific event to specific heart rate. Use case: changing your outfit on avatar to sport one when your bpm goes higher than 130)

## Supported devices
It was recently discovered that the app can support not only Mi band 4/5, but many more devices! If your smartwatch/fitness tracker supports Amazfit or Zepp apps, give it a try.
### Confirmed devices list:
- Xiaomi Mi Band 4/5/6
- Amazfit Band 5/Bip S Lite

## Requirements
1. PC on Windows with Bluetooth 4.0 or higher
2. Browser that supports Web Bluetooth API ([Like Chrome](https://google.com/chrome))

## Usage
1. First and most complicated step is to get auth key of your device. (For more information - please visit https://freemyband.com/ or https://github.com/argrento/huami-token if you experienced with python)
2. Download and launch [vrc-osc-hrm.exe](https://github.com/vard88508/vrc-osc-miband-hrm/releases) or if you don't trust me - Download this repository and run it trough node-js
3. Enter your auth key and click Connect (Make sure you turned off bluetooth on your phone)
4. Pair your smartwatch/fitness tracker with browser
5. Wait about ~15s and done! Now you sending data about your heart rate to VRChat (Don't forget to turn on OSC in Action menu)

## Example Avatar
As some of you asked - I made [Example_Avatar.unitypackage](https://github.com/vard88508/vrc-osc-miband-hrm/raw/main/Example_Avatar.unitypackage) (which is also requires RED_SIM's [Simple counter shader](https://patreon.com/posts/simple-counter-62864361)) to show how `Heartrate` parameter works on avatar side.

If you have any questions: ask them [here](https://github.com/vrchat-community/osc/discussions/97), or in #avatars-osc channel in VRChat discord.
