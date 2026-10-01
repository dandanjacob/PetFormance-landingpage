// Analytics do central (dandanjacob/central) — reporta acessos, tempo de
// permanência e cliques em CTAs pro painel em central.dandanjacob.com.
// Mandado sempre sob o domínio de teste "petformance-teste.dandanjacob.com"
// (já cadastrado no central), independente do host real da página.
(function () {
  var API    = 'https://api.central.dandanjacob.com';
  var DOMAIN = 'petformance-teste.dandanjacob.com';

  var accessId  = null;
  var startedAt = Date.now();

  function osFromUA(ua) {
    if (/Windows/.test(ua))        return 'Windows';
    if (/Mac OS X/.test(ua))       return 'macOS';
    if (/Android/.test(ua))        return 'Android';
    if (/iPhone|iPad|iOS/.test(ua)) return 'iOS';
    if (/Linux/.test(ua))          return 'Linux';
    return 'Desconhecido';
  }

  function browserFromUA(ua) {
    if (/Edg\//.test(ua))                      return 'Edge';
    if (/Chrome\//.test(ua) && !/Chromium/.test(ua)) return 'Chrome';
    if (/Firefox\//.test(ua))                  return 'Firefox';
    if (/Safari\//.test(ua) && !/Chrome/.test(ua))   return 'Safari';
    return 'Outro';
  }

  function post(path, body) {
    return fetch(API + path, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'X-Domain': DOMAIN },
      body:    JSON.stringify(body),
    }).then(function (r) { return r.json(); });
  }

  function beaconDuration() {
    if (!accessId) return;
    var seconds = Math.round((Date.now() - startedAt) / 1000);
    var blob = new Blob([JSON.stringify({ how_long: seconds })], { type: 'application/json' });
    navigator.sendBeacon(API + '/accesses/' + accessId + '/duration', blob);
  }

  var params = new URLSearchParams(location.search);

  post('/accesses', {
    where_page:         location.pathname,
    operational_system: osFromUA(navigator.userAgent),
    navigator:           browserFromUA(navigator.userAgent),
    referrer:            document.referrer || null,
    utm_source:          params.get('utm_source'),
    utm_medium:          params.get('utm_medium'),
    utm_campaign:        params.get('utm_campaign'),
  }).then(function (data) { accessId = data.id; }).catch(function () {});

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') beaconDuration();
  });
  window.addEventListener('pagehide', beaconDuration);

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var element = null;
    if (/wa\.me|api\.whatsapp\.com/.test(href))  element = 'whatsapp';
    else if (/^mailto:/.test(href))              element = 'email';
    else if (/instagram\.com/.test(href))        element = 'instagram';
    if (!element) return;
    post('/accesses/click', { access_id: accessId, where_page: location.pathname, element: element }).catch(function () {});
  });
})();
