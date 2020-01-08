// ==UserScript==
// @name         Auflistung fehlende Fahrzeuge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Listet fehlende Fahrzeuge beim Einsatz übersichtlich als Liste auf
// @author       TutePlays
// @match        *leitstellenspiel.de/missions/*
// @match        *missionchief.com/missions/*
// @match        *meldkamerspel.com/missions/*
// @match        *missionchief.co.uk/missions/*
// @grant        none
// ==/UserScript==

(function() {
    var missingVehicles = $("#missing_text").html().replace(': ', '<li>');
    missingVehicles = missingVehicles.replace(/\, /g, '</li><li>');
    missingVehicles = missingVehicles.replace(/\./g, '</li>');
    missingVehicles = missingVehicles.replace('</li><li>SW 1000</li><li>SW 2000 oder Ähnliches)</li>', ', SW 1000, SW 2000 oder Ähnliches)');
    $("#missing_text").html(missingVehicles);
})();
