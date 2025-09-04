/********************************************************************
*
*  Firefox user.js from the one who fights for your freedom.
*  ---------------------------------------------------------------
*  Version: 1.5 (03.09.2025)
*  Source: https://github.com/volyanko/firefox-user.js
*
*  PURPOSE:
*    Hardened Firefox configuration with focus on anonymity.
*    - Privacy & fingerprinting resistance
*    - Network & data leak protection
*    - Performance tweaks
*
*  NOTES:
*    - All preferences are tested on the latest Firefox release.
*    - Only active, supported prefs are included.
*    - No "unique fingerprinting traps" are allowed.
*
*  DISCLAIMER:
*      Use at your own risk. Some sites may break.
*
********************************************************************
*
* SECTION: PERFORMANCE TWEAKS
* Purpose:
*   Improve Firefox responsiveness, page load speed, and resource usage.
*   Only safe prefs included that do not compromise your privacy.
*
*******************************************************************/

// Maximum number of persistent connections per server
user_pref("network.http.max-persistent-connections-per-server", 10); // default: 6

// Enable HTTP/2 and HTTP/3 protocols for faster and modern connections
user_pref("network.http.http2.enabled", true);              // default: true
user_pref("network.http.http3.enabled", true);              // default: true

// Disable proxy auto-check to speed up startup
user_pref("network.notify.checkForProxies", false);         // default: true

// Disable disk cache (avoids long-term tracking via cache)
user_pref("browser.cache.disk.enable", false);              // default: true

// Enable memory cache (wiped on restart)
user_pref("browser.cache.memory.enable", true);             // default: true

// Reduce frecency half-life to refresh cache faster
user_pref("browser.cache.frecency_half_life_hours", 18);    // default: 24

// Limit shutdown I/O lag (prevents hangs on exit)
user_pref("browser.cache.max_shutdown_io_lag", 16);         // default: 3000

// Max entries in session history per tab
user_pref("browser.sessionhistory.max_entries", 50);        // default: 50

// Smooth scrolling
user_pref("general.smoothScroll", true);                    // default: true

// Enable multi-process tabs (e10s)
user_pref("browser.tabs.remote.autostart", true);           // default: true

// DO NOT force GPU acceleration (may leak unique GPU data)
// user_pref("layers.acceleration.force-enabled", false);    // default: false

// Disable WebGL entirely to avoid fingerprinting
user_pref("webgl.disabled", true);                          // default: false

// Limit number of content processes
user_pref("dom.ipc.processCount", 4);                       // default: 8 (varies)

// Disable "use recommended performance settings"
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false); // default: true

 /********************************************************************
 *
 * SECTION: PRIVACY & FINGERPRINTING RESISTANCE
 * Purpose:
 *   Minimize the possibility of unique user identification through the browser.
 *   Maximize compatibility with modern web resources.
 *
 ********************************************************************/

 // Enable Enhanced Tracking Protection (ETP)
 user_pref("privacy.trackingprotection.enabled", true);        // default: false
 user_pref("privacy.trackingprotection.pbmode.enabled", true); // default: false

 // Block fingerprinting and cryptomining scripts
 user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // default: false
 user_pref("privacy.trackingprotection.cryptomining.enabled", true);   // default: false

 // First-party isolation
 user_pref("privacy.firstparty.isolate", true);                // default: false

 // Bounce tracking protection
 user_pref("privacy.bounceTrackingProtection.mode", 1);        // default: 0

 // Disable WebRTC to prevent IP leaks
 user_pref("media.peerconnection.enabled", false);             // default: true
 user_pref("media.navigator.enabled", false);                  // default: true
 user_pref("media.navigator.permission.disabled", true);       // default: false

 // DNS prefetching & captive portal detection
 user_pref("network.dns.disablePrefetch", true);               // default: false
 user_pref("network.dns.disablePrefetchFromHTTPS", true);      // default: false
 user_pref("network.captive-portal-service.enabled", false);   // default: true

 // Prevent visited link CSS history leaks
 user_pref("layout.css.visited_links_enabled", false);         // default: true

 // Block or poison canvas data
 user_pref("canvas.poisondata.enabled", true);                 // default: false

 // Disable WebAudio API to prevent audio fingerprinting
 user_pref("dom.webaudio.enabled", false);                     // default: true

 // WebGL metadata reduction
 user_pref("webgl.disable-extensions", true);                  // default: false
 user_pref("webgl.disable-ANGLE", true);                       // default: false

 // Standardize fonts to prevent unique font fingerprint
 user_pref("font.name.serif.x-western", "Times New Roman");    // default: system
 user_pref("font.name.sans-serif.x-western", "Arial");         // default: system
 user_pref("font.name.monospace.x-western", "Courier New");    // default: system
 user_pref("font.name.serif.x-cyrillic", "Times New Roman");   // default: system
 user_pref("font.name.sans-serif.x-cyrillic", "Arial");        // default: system
 user_pref("font.name.monospace.x-cyrillic", "Courier New");   // default: system

 // Spoof timezone to GMT
 user_pref("privacy.resistFingerprinting.timezoneSpoofing", true); // default: false

 // Standardize Accept-Language
 user_pref("intl.accept_languages", "en-US,en");               // default: system language

 // Disable battery API
 user_pref("dom.battery.enabled", false);                      // default: true

 // Disable device memory API
 user_pref("dom.device.memory.enabled", false);                // default: true

 // Disable Network Information API
 user_pref("dom.netinfo.enabled", false);                      // default: true

 // Disable clipboard event fingerprinting
 user_pref("dom.event.clipboardevents.enabled", false);        // default: true

 // Disable microphone/camera access
 user_pref("media.navigator.video.enabled", false);            // default: true
 user_pref("media.peerconnection.video.enabled", false);       // default: true

 // Disable gamepad API
 user_pref("dom.gamepad.enabled", false);                            // default: true
 user_pref("dom.gamepad.hapticFeedback.enabled", false);             // default: true

 // Disable Telephony API
 user_pref("dom.telephony.enabled", false);                          // default: true

 // Disable link prefetching and speculative parallel connections
 user_pref("network.prefetch-next", false);                          // default: true

 // Deprecated in recent Firefox versions, left for reference
 // user_pref("network.http.speculative-parallel-limit", 0);

 // Disable push notifications
 user_pref("dom.push.enabled", false);                               // default: true

/********************************************************************
 *
 * SECTION: UI-EXPOSED SETTINGS
 * Purpose:
 *   Maximize privacy by controlling all visible settings
 *   in Firefox options/preferences. Includes auto-clear, telemetry,
 *   data collection, form autofill, search suggestions, etc.
 *
 ********************************************************************/

// Auto-clear on exit
user_pref("privacy.sanitize.sanitizeOnShutdown", true);              // default: false
user_pref("privacy.clearOnShutdown.cache", true);                    // default: false
user_pref("privacy.clearOnShutdown.cookies", true);                  // default: false
user_pref("privacy.clearOnShutdown.downloads", true);                // default: false
user_pref("privacy.clearOnShutdown.formdata", true);                 // default: false
user_pref("privacy.clearOnShutdown.history", true);                  // default: false
user_pref("privacy.clearOnShutdown.offlineApps", true);              // default: false
user_pref("privacy.clearOnShutdown.sessions", true);                 // default: false
user_pref("privacy.clearOnShutdown.siteSettings", true);             // default: false
user_pref("privacy.sanitize.promptOnSanitize", false);               // default: true
user_pref("privacy.sanitize.timeSpan", 0);                           // default: 0

// Telemetry & Data Collection
user_pref("toolkit.telemetry.enabled", false);                       // default: true
user_pref("toolkit.telemetry.server", "");                           // default: Mozilla server URL
user_pref("toolkit.telemetry.archive.enabled", false);               // default: true
user_pref("toolkit.telemetry.newProfilePing.enabled", false);        // default: true
user_pref("toolkit.telemetry.updatePing.enabled", false);            // default: true
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);    // default: true
user_pref("toolkit.telemetry.bhrPing.enabled", false);               // default: true
user_pref("toolkit.coverage.enabled", false);                        // default: true
user_pref("toolkit.coverage.endpoint.base", "");                     // default: Mozilla server URL
user_pref("datareporting.healthreport.uploadEnabled", false);        // default: true
user_pref("datareporting.policy.dataSubmissionEnabled", false);      // default: true
user_pref("browser.ping-centre.telemetry", false);                   // default: true

// Form autofill & search suggestions (less fingerprint)
user_pref("browser.formfill.enable", true);                          // default: true
user_pref("browser.urlbar.suggest.searches", true);                  // default: true
user_pref("browser.urlbar.autocomplete.enabled", true);              // default: true
user_pref("browser.search.suggest.enabled", false);                  // default: true
user_pref("signon.rememberSignons", true);                           // default: true

// Location, Studies & Experiments
user_pref("geo.enabled", false);                                     // default: true
user_pref("browser.search.geoip.url", "");                           // default: Mozilla GeoIP service
user_pref("browser.region.network.url", "");                         // default: Mozilla region URL
user_pref("browser.region.update.enabled", false);                   // default: true
user_pref("app.shield.optoutstudies.enabled", false);                // default: true
user_pref("app.normandy.enabled", false);                            // default: true
user_pref("browser.discovery.enabled", false);                       // default: true
user_pref("experiments.enabled", false);                             // default: true
user_pref("experiments.supported", false);                           // default: true
user_pref("network.allow-experiments", false);                       // default: true

// Mozilla Account Synchronization
user_pref("identity.fxaccounts.enabled", false);                     // default: true
user_pref("identity.fxaccounts.toolbar.enabled", false);             // default: true
