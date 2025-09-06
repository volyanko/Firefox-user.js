/********************************************************************
*
*  Firefox user.js from the one who fights for your freedom.
*  ---------------------------------------------------------------
*  Version: 2.0 (06.09.2025)
*  Source: https://github.com/volyanko/firefox-user.js
*
*  DISCLAIMER:
*      Use at your own risk. Some sites may break.
*
/ *********************************************************************
* SECTION 1: TRACKING & FINGERPRINTING PROTECTION
********************************************************************/

user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.bounceTrackingProtection.mode", 1);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);

/********************************************************************
 * SECTION 2: CANVAS / WEBGL / WEBAUDIO
 ********************************************************************/

// CanvasBlocker integration
user_pref("canvas.poison", true);
user_pref("canvas.poisondata.enabled", true);
user_pref("canvas.site_specific", false);
user_pref("canvas.random_noise", true);

// WebGL settings
user_pref("webgl.disabled", false); // required for site compatibility
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.enable-webgl2", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-ANGLE", true);

// WebAudio
user_pref("dom.webaudio.enabled", true);
user_pref("dom.webaudio.noise_reduction", true);

/********************************************************************
 * SECTION 3: MEDIA / WEBRTC / IP PROTECTION
 ********************************************************************/

user_pref("media.peerconnection.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.permission.disabled", true);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.video.enabled", false);

/********************************************************************
 * SECTION 4: SCREEN / DPI / TIMEZONE MASKING
 ********************************************************************/

user_pref("privacy.resistFingerprinting.screen.width", 1920);
user_pref("privacy.resistFingerprinting.screen.height", 1080);
user_pref("privacy.resistFingerprinting.screen.availWidth", 1920);
user_pref("privacy.resistFingerprinting.screen.availHeight", 1080);
user_pref("privacy.resistFingerprinting.pixelRatio", 1);
user_pref("privacy.resistFingerprinting.timezone", "UTC");

/********************************************************************
 * SECTION 5: DNS, PREFETCHING & NETWORK
 ********************************************************************/

user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.http.http2.enabled", true);
user_pref("network.http.http3.enabled", true);
user_pref("network.notify.checkForProxies", false);

/********************************************************************
 * SECTION 6: DEVICE / BATTERY / MEMORY / NET INFO
 ********************************************************************/

user_pref("dom.battery.enabled", false);
user_pref("dom.device.memory.enabled", false);
user_pref("dom.netinfo.enabled", false);

/********************************************************************
 * SECTION 7: HTML5 / PERFORMANCE / CLIPBOARD
 ********************************************************************/

user_pref("dom.enable_performance", false);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.frecency_half_life_hours", 18);
user_pref("browser.cache.max_shutdown_io_lag", 16);
user_pref("browser.sessionhistory.max_entries", 50);
user_pref("general.smoothScroll", true);
user_pref("browser.tabs.remote.autostart", true);
user_pref("layers.acceleration.force-enabled", false);
user_pref("dom.ipc.processCount", 4);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

/********************************************************************
 * SECTION 8: GAMEPAD / TELEPHONY / PUSH NOTIFICATIONS
 ********************************************************************/

user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.hapticFeedback.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("dom.push.enabled", false);

/********************************************************************
 * SECTION 9: FONT & LANGUAGE
 ********************************************************************/

user_pref("font.system.whitelist", "Arial, Times New Roman, Courier New, Tahoma, Verdana");
user_pref("font.name.serif.x-cyrillic", "Times New Roman");
user_pref("font.name.sans-serif.x-cyrillic", "Arial");
user_pref("font.name.monospace.x-cyrillic", "Courier New");
user_pref("intl.accept_languages", "en-US,en");

/********************************************************************
 * SECTION 10: VISITED LINKS / CSS HISTORY
 ********************************************************************/

user_pref("layout.css.visited_links_enabled", false);

/********************************************************************
 * SECTION 11: UI & TELEMETRY / DATA COLLECTION
 ********************************************************************/

user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.sanitize.promptOnSanitize", false);
user_pref("privacy.sanitize.timeSpan", 0);

user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("browser.ping-centre.telemetry", false);

user_pref("geo.enabled", false);
user_pref("browser.search.geoip.url", "");
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);
user_pref("network.allow-experiments", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);

user_pref("browser.formfill.enable", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.autocomplete.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("signon.rememberSignons", true);
