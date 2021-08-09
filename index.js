d = ['Jose','matt','Sara','shannon']
dO = [{name:'Jose'},
{name:'matt'},
{name:'Sara'},
{name:'Shannon'},
{name:'Mehmet'}
]
let filterDrivers = []
function fuzzyMatch(driversArray, initialLetter)
{
    let filterDrivers = driversArray.filter(
      driver => {
        
        return driver.toLowerCase().indexOf(initialLetter.toLowerCase()) === 0
      }
    )
    return filterDrivers
  }
  function findMatching(driversArray, query) {
    let search = driversArray.filter(
      driver => {
        return driver.toLowerCase() === query.toLowerCase()
      }
    )
    return search
  }
  function matchName(driversArray, query) {
    return driversArray.filter(
      driverObj => driverObj.name === query
    )
  }