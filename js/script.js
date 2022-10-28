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
  const length = parseInt(document.getElementById("length-number").value)
  const width = parseInt(document.getElementById("width-number").value)
  const height = parseInt(document.getElementById("height-number").value)

  //process
  const volume = ((length * width * height) / 3) * height

  // output
  document.getElementById("volume").innerHTML =
    "Volume is equal to: " + volume + " cm³"
}
