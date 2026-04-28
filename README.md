# Flat Data for Störungsauskunft.de

The page https://störungsauskunft.de/ collects outages (power/gas/water/etc.)
for Germany. Since the API is pretty simple, we collect it using the [Flat
Data]/[Git Scraping] model. Whenever the data changes, a GitHub Action commits
the changed response into this repository.

[Flat Data]: https://githubnext.com/projects/flat-data
[Git Scraping]: https://simonwillison.net/2020/Oct/9/git-scraping/

## Notes

The data is split into "sectors":

| sectorType | name                                       |
| ---------- | ------------------------------------------ |
| 1          | Stromausfall (power outage)                |
| 2          | Gasausfall (gas outage)                    |
| 3          | Wasserausfall (water outage)               |
| 6          | Straßenbeleuchtung (broken street lights)  |
| 7          | Fernwärmeausfall (district heating outage) |
