# Firefox Hardened user.js — Privacy & Performance

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Version:** 2.0 (06.09.2025)  

## 🛡 Purpose

This `user.js` is intended for advanced Firefox users who want:

- Maximum protection against tracking and fingerprinting
- Protection of IP and media data (WebRTC, cameras, microphones)  
- Anonymity and control over data collected by the browser  
- Performance optimization without compromising privacy  
- Compatibility with modern websites  


## ⚡ Features

### 1. Fingerprinting & tracking

- `privacy.resistFingerprinting` enabled
- CanvasBlocker integrated (`canvas.poison`, `canvas.random_noise`)  
- WebGL metadata minimized, WebGL2 enabled for compatibility  
- WebAudio enabled with noise masking  
- First-party isolation, bounce tracking protection  
- Crypto mining and tracking blocking  

### 2. IP / WebRTC / Media

- WebRTC completely disabled  
- Camera and microphone disabled  
- Push notifications, Gamepad, and Telephony API disabled  

### 3. UI & Telemetry

- Complete blocking of telemetry, health reports, ping-centre  
- Auto-clearing of history, cache, and sessions upon exit  
- Control over search suggestions and form autocomplete
- Disabling synchronization from Mozilla

### 4. DNS / Network / Performance

- HTTP/2 & HTTP/3 enabled  
- DNS prefetch disabled  
- Disk cache disabled, memory cache enabled  
- Limited number of processes and I/O when shutting down  

### 5. Compatibility

- WebGL and WebAudio enabled with fingerprint minimization
- CanvasBlocker works without issues
- Compatible with most modern websites    



## ⚙ Installation

1. Download the the `user.js` file.  
2. Create a new profile in `about:profile`
   - Open the `root` directory and place the file there.
   - Set this profile as default.
3. Restart Firefox  

> **Important:** For complete protection and functionality, additional extensions must be installed.
> [CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)
> [uBlockOrigin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
  

## 🔧 Recommendations

- If you find an error or improvement, please report it on GitHub
- The configuration can be adapted to your screen size and DPI if you use non-standard monitors
- Stay tuned for updates   


## ⚖ License

MIT License — free use and modification.
