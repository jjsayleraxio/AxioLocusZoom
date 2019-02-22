<img align="right" src="https://github.com/jjsayleraxio/AxioShiny/blob/master/images/axio-logo.png">
<br><br>

# AxioLocusZoom
R ShinyApp HTMLWidget using the locuszoom.js library 

### How To Use

1. Install devtools
```R
install.packages("devtools")
```
2. Load the devtools package
```R
library(devtools)
```
3. Install using `install_github()` command
```R
devtools::install_github("jjsayleraxio/AxioLocusZoom@v0.1.1-alpha")
```

4. Example of how to run code:
 * in ui: 
 ```R
 ...
   mainPanel(
     LocusZoomPlotOutput("locuszoom")
   )
 ```
 * in server:
```R
  output$locuszoom<-renderLocusZoomPlot({
    LocusZoomPlot(list(assoc_url = [data source URL],
                       assoc_analysis = [name of a database file],
                       assoc_id_field = [name of id_field],
                       gene_url = [data source URL],
                       gene_source = [value of gene_source],
                       chr = [chromosome number],
                       start = [start position],
                       end = [end position]))
  })
```
Change version tag to whatever tagged release you want to use, or leave it off to pull the most current version. Check out the [releases](https://github.com/jjsayleraxio/AxioLocusZoom/releases) for more info.

<hr>

###### Source: The Center for Statistical Genetics at the University of Michigan School of Public Health, [locuszoom](https://statgen.github.io/locuszoom/)
###### Source: Karl Broman, [Putting your R package on GitHub](http://kbroman.org/pkg_primer/pages/github.html)
###### Source: James Hester, [devtools install_github() documentation](https://www.rdocumentation.org/packages/devtools/versions/1.13.6/topics/install_github)
