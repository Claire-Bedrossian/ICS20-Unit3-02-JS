// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-02-JS/sw.js", {
    scope: "/ICS20-Unit3-02-JS/",
  })
}

/**
 * This function calculates the volume of a right rectangular based pyramid with user input
 */
function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById("length-number").value)
  const width = parseFloat(document.getElementById("width-number").value)
  const height = parseFloat(document.getElementById("height-number").value)

  //process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "Volume is equal to: " + volume.toFixed(2) + " cm³"
}
