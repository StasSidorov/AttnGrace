function gtag(){window.dataLayer.push(arguments)}function getCookie(e){const t=e+"=",a=document.cookie.split(";");for(let e=0;e<a.length;e++){let n=a[e];for(;" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return JSON.parse(decodeURIComponent(n.substring(t.length,n.length)))}return{}}const features=[{name:"consent-tracking-api",version:"0.1"}];window.dataLayer=window.dataLayer||[],window.AVADA_COOKIES_BAR=window.AVADA_COOKIES_BAR||{},window.AVADA_COOKIE_CONSENT=getCookie("avada_cookie_consent"),window.Shopify?.loadFeatures&&window.Shopify.loadFeatures(features,(e=>{e&&console.error("Failed to load features",e)})),(()=>{let e=window.AVADA_COOKIE_CONSENT;if(!Object.keys(e).length){const t=!window.Shopify?.customerPrivacy||window.Shopify.customerPrivacy.shouldShowBanner();e={marketing:!t,analytics:!t,functional:!t}}!e.marketing&&gtag("set","ads_data_redaction",!0),gtag("set","url_passthrough",!0),gtag("default",{ad_storage:e.marketing?"granted":"denied",ad_user_data:e.marketing?"granted":"denied",ad_personalization:e.marketing?"granted":"denied",analytics_storage:e.analytics?"granted":"denied",functionality_storage:e.functional?"granted":"denied",personalization_storage:e.functional?"granted":"denied",security_storage:"granted",wait_for_update:500})})();