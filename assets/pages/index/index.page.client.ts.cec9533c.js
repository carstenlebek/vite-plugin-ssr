import{a as e}from"../../Navigation.client.c857ab18.js";import"../../vendor.7f883c29.js";import"../../ScaffoldCallToAction.client.53778b6e.js";!function(t){e(t.startsWith("https://"));const r=document.createElement("script");r.src=t,r.async=!0,r.setAttribute("charset","utf-8"),document.getElementsByTagName("head")[0].appendChild(r)}("https://platform.twitter.com/widgets.js"),function(){const t=Array.from(document.getElementById("features").querySelectorAll(".feature.has-learn-more"));e(t.length>0),t.forEach((t=>{t.onclick=()=>{!function(t){const r=t.id;e(r.startsWith("feature-"));const o=r.slice("feature-".length),s="selected",a="learn-more-"+o,c=document.getElementById(a);e(c);if(!t.classList.contains(s)){const r=t.parentNode;e(r.classList.contains("features-secondary-row")),"grid"===(n=r,l="display",window.document.defaultView.getComputedStyle(n).getPropertyValue(l))&&[...r.querySelectorAll(".learn-more"),...r.querySelectorAll(".feature")].forEach((e=>{e.classList.remove(s)}))}var n,l;[t,c].forEach((e=>{e.classList.toggle(s)}))}(t)}}))}();