// ==UserScript==
// @name         Auflistung fehlende Fahrzeuge
// @version      0.1
// @description  Listet fehlende Fahrzeuge beim Einsatz übersichtlich als Liste auf
// @author       TutePlays
// @match        *leitstellenspiel.de/missions/*
// @match        *missionchief.com/missions/*
// @match        *meldkamerspel.com/missions/*
// @match        *missionchief.co.uk/missions/*
// @updateURL    https://github.com/TutePlays/LSS_Auflistung_fehlende_Fahrzeuge/raw/master/Auflistung_fehlende_Fahrzeuge.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var missingVehicles = $("#missing_text").html().replace(': ', '<li>');
    missingVehicles = missingVehicles.replace(/\, /g, '</li><li>');
    missingVehicles = missingVehicles.replace(/\./g, '</li>');
    missingVehicles = missingVehicles.replace('</li><li>SW 1000</li><li>SW 2000 oder Ähnliches)</li>', ', SW 1000, SW 2000 oder Ähnliches)');
    $("#missing_text").html(missingVehicles);
})();
