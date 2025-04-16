---
layout: page
title: SwissCyberGrid
description: Interactive tool for anomaly detection in the Swiss transmission grid
img: assets/img/SwissCyberGrid.png
importance: 2
category: "Power grids"
---

**SwissCyberGrid** is part of a project funded by the [armasuisse Cyber-Defence Campus](https://www.cydcampus.admin.ch/), whose objective is to study the resilience of the electrical transmission grid of Switzerland against cyberattacks.

The focus is on false data injection attacks that affect the operator's knowledge of the grid state. We created an interactive tool that can be used to visualize what the operator sees and compare with the real state of the grid. Several detections algorithms can be tested in various conditions.

I wrote [the backend API](https://github.com/GeeeHesso/AramisAPI.jl) for this project in [Julia](https://julialang.org/), while the frontend was developed by [Gwenaëlle Gustin](https://www.gwengustin.ch/) and the [group of David Wannier at the HES-SO](https://www.hevs.ch/en/applied-research/research-institute-informatics/easilab-13431). The detection algorithms have been developed by our research group, and will be described in an upcoming publication.

The result is visible below (large screens only). It can be found otherwise at [https://swisscybergrid.iigweb.hevs.ch/](https://swisscybergrid.iigweb.hevs.ch/).

<div class="d-none d-md-block">
  <hr>
  <div class="row justify-content-sm-center">
    <embed type="text/html" src="https://swisscybergrid.iigweb.hevs.ch/" width="800" height="600">
  </div>
</div>
