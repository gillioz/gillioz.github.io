---
layout: page
title: Power transmission grids modeling
description: Realistic modeling for production and consumption in transmission networks
img: assets/img/europe_network.png
importance: 1
category: "Power grids"
related_publications: true
---

Real data from transmission grid networks is hard to obtain, for technical and legal reasons.
Even when it is publicly available, like on the [transparency platform](https://transparency.entsoe.eu/) of the European network of transmission grid operators, it is often in limited amount and lacking sufficient granularity for most useful applications.

With my collaborators at the HES-SO, we have created a large dataset of realistic time series for production and consumption in all of continental Europe. It is available as a [Zenodo repository](https://zenodo.org/records/13378476), and a data descriptor paper was published in Nature Scientific Data {% cite Gillioz:2025data %}.

### The network

The network is based on [PanTaGruEl](https://zenodo.org/records/2642175), a model of the European grid developed by Laurent Pagnier and collaborators.
Our version, given in [PowerModels format](https://lanl-ansi.github.io/PowerModels.jl/), contains:

- 7822 power lines and 553 transformers,
- 4097 load buses,
- 815 generators of various types.

<div class="row justify-content-sm-center">
  <div class="col col-lg-6">
    {% include figure.liquid path="assets/img/europe_network.png" class="img-fluid rounded z-depth-1" zoomable=true %} 
  </div>
</div>
<div class="caption">
    The transmission grid model used in our work.
</div>

### Synthetic series for variable loads

The first part of our work was to create a statistical model of consumption at every node of the network. The model can generate arbitrarily many synthetic time series that are all different from each other, yet correlated in a realistic manner. These series are then distributed on the nodes based on the population density.

<div class="row justify-content-sm-center">
  <div class="col col-lg-8">
    {% include figure.liquid path="assets/img/synthetic_series_example.png" title="example image" class="img-fluid rounded z-depth-1"  zoomable=true %}
  </div>
</div>
<div class="caption">
	Historical time series for the total load during a winter week in Switzerland (above, in blue), and synthetic series generated using our statistical model (below, in red).
</div>

### Synthetic series for production

The second part of our work was to design an optimization problem to distribute the production among all the possible power plants in a realistic manner. The resulting time series display all features of a realistic production, including the apparently chaotic on/off behavior of individual hydroelectric power plants, as well as other production modes, while respecting the annual total production of each power plant and reproducing historical aggregated production by type for every country.

<div class="row justify-content-sm-center">
  <div class="col col-lg-10">
    {% include figure.liquid path="assets/img/Biasca_2018_4_w44.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="row justify-content-sm-center">
  <div class="col col-lg-10">
    {% include figure.liquid path="assets/img/Verbano_2016_1_w44.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
    Examples of synthetic production series for hydroelectric power plants in Switzerland over one week (in red), compared with real, historical data (in blue).
    The top panel shows the Biasca power plant in 2018, the lower one the Verbano plant in 2016.
</div>
