#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
LocusZoomPlot <- function(input_params, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = input_params

  # create widget
  htmlwidgets::createWidget(
    name = 'LocusZoomPlot',
    x,
    width = width,
    height = height,
    package = 'AxioLocusZoom',
    elementId = elementId
  )
}

#' Shiny bindings for LocusZoomPlot
#'
#' Output and render functions for using LocusZoomPlot within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a LocusZoomPlot
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name LocusZoomPlot-shiny
#'
#' @export
LocusZoomPlotOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'LocusZoomPlot', width, height, package = 'AxioLocusZoom')
}

#' @rdname LocusZoomPlot-shiny
#' @export
renderLocusZoomPlot <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, LocusZoomPlotOutput, env, quoted = TRUE)
}
