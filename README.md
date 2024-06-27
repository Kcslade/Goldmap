Welcome to Goldmap! This map is designed to visualize geological and geochemical indicators of gold within the United States using heatmaps

This project uses Geological and Mining Data from the USGS, US mineral Deposit Database, deep and shallow geochemical data from the MRDS

At the moment, the map encompasses the entire contiguous US and can identify Hotzones (where layers overlap)

Included in the repository is also a Qgis web application for use on websites. 

Link to Webapp V2:
https://kcslade.github.io/Goldmap/
Rendering for the heatmaps on the webapp is low detail atm for speed, highly reccomend you check out the data in QGIS

Layers:

Geological heatmap
Geochemical heatmap
US Mining Zones

Point data with all attributes also included. 


Composite Heatmap Sample:
![GOLDMAPcomposite](https://github.com/Kcslade/Goldmap/assets/173574308/ef61607f-aec1-453d-8992-c11aeaad4328)

Qgis Project and Data Download:

(https://drive.google.com/file/d/1qvzUw4_HtoIhvw_-78DDLrEuV7Bowvyx/view?usp=sharing)

Things to note:

- The composite heatmap is a composite of all the normal maps, weighted to favor the geochemical data first, the geological data second, and the landsat band composite very little(due to its quality).

-Geological heatmap is based on the presence of the folliowing geology:

Greenstone (Greenstone Belts), Granite, Granodiorite, Diorite, Rhyolite, Schist, Amphibolite, Banded Iron Formation (BIF), Pegmatite, Serpentinite, Basalt and Basaltic-andesite, Granulite, Kimberlite


-Geochemical heatmap is based on the following elements and minerals, with elements recieving greater weight. 
Arsenic (As)
Antimony (Sb)
Bismuth (Bi)
Silver (Ag)
Copper (Cu)
Lead (Pb)
Zinc (Zn)
Tungsten (W)
Iron (Fe)
Sulfur (S)
Hematite
Goethite
Pyrite
Serpentine
Quartz
- Landsat layer is a band ratio calculation based on a somewhat low quality Landsat 8 composite, the band ratios are used to highlight potential zones of alteration. 
