---
layout: page
title: Conformal field theory in momentum space
description: Developing a new approach to conformal field theory using the momentum-space representation of correlation functions
img: assets/img/momenta_t.gif
importance: 1
category: "High-energy physics"
related_publications: true
---

## Conformal field theory

[Conformal field theory](https://en.wikipedia.org/wiki/Conformal_field_theory) is a special type of quantum theory in which there is no characteristic length scale: physical laws are the same at all scales, unlike in the real world where the gravitational and electromagnetic forces decrease with distance, and the nuclear force increases.

Even though our world is clearly not of this type, conformal field theory is useful in the [effective description](https://en.wikipedia.org/wiki/Effective_field_theory) of many phenomena, and at critical points of statistical and condensed matter systems.
It is also particularly interesting from a mathematical point-of-view, because some conformal field theories can be solved exactly despite being strongly-coupled, using the so-called [conformal boostrap](https://bootstrapcollaboration.com/).

## Trading position and momentum

Traditionally, the conformal bootstrap is formulated using correlation functions of operators with a definite position. However, it can be useful sometimes to use the momenta of operators instead of their positions, a standard practice in particle physics where the main observables are [scattering amplitudes](https://en.wikipedia.org/wiki/Scattering_amplitude).

The momentum-space representation of conformal field theory is still underdeveloped, and it is a long-term project of mine to contribute to its growth. I obtained several results in this direction.

## 3-point functions

While correlation functions of 3 operators have been known in terms of positions since the 1970's, the equivalent in terms of momenta was not known until recently. I was the first to realize that Wightman functions (a particular type of correlation functions) are actually [generalized hypergeometric functions of two variables of the Appell F₄ type](https://en.wikipedia.org/wiki/Appell_series).

- _Conformal 3-point functions and the Lorentzian OPE in momentum space_ {% cite Gillioz:2019lgs %}
- _From Schwinger to Wightman: all conformal 3-point functions in momentum space_ {% cite Gillioz:2021sce %}

## Conformal blocks for 4-point functions

One of the key properties of conformal field theory is that correlation functions of 4 or more operators can be decomposed into (infinite) sums of 3-point correlation functions. I showed that this decomposition takes a particularly nice, factorized form in momentum space.

- _Momentum-space conformal blocks on the light cone_ {% cite Gillioz:2018mto %}
- _Conformal partial waves in momentum space_ {% cite Gillioz:2020wgw %}

## The momentum-space conformal bootstrap in 2d

Finally, the ultimate goal of this project is to formulate a conformal bootstrap directly in momentum space. This has been achieved in two dimensions so far, and I have good hope to extend the results to dimension 3 and higher in the future.

- _Convergent Momentum-Space OPE and Bootstrap Equations in Conformal Field Theory_ {% cite Gillioz:2019iye %}
- _The momentum-space conformal bootstrap in 2d_ {% cite Gillioz:2025yfb %}
