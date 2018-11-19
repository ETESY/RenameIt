/**
 * @Author: Rodrigo Soares <rodrigo>
 * @Date:   2017-11-17T19:54:56-08:00
 * @Project: Rename It
 * @Last modified time: 2017-12-02T11:44:14-08:00
 */
import { findReplaceData } from "./lib/utils"
import theUI from "./lib/TheUI"

export default function(context) {
  const data = findReplaceData(context)

  const options = {
    identifier: "findReplace.ui",
    title: "Find & Replace Layers",
    redirectTo: "/find_replace",
    width: 480,
    height: 335
  }

  // Load UI
  theUI(context, data, options)
}
