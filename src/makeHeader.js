import getHeaderText from "./getHeaderText"

export default makeHeader = () => {
  // pseudo code to look up current conference
  current_conf = "R/Pharma"
  
  window.onload = function() {
    document
      .getElementById("title")
      .innerHTML = getHeaderText(current_conf)
  }
  
}