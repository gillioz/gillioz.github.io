#!/usr/bin/env bash

cd assets/img/publication_preview_raw/

for f in *; do
	convert "$f" -background white -flatten -gravity center \
		-resize 200x200 -extent 200x200 ../publication_preview/"$f"
done

cd ../../..
