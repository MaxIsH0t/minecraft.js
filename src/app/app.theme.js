/**
 * Created by l.heddendorp on 20.03.2016.
 */
export default function theme ($mdThemingProvider, $mdIconProvider, $locationProvider) {
  'ngInject'
  $locationProvider.html5Mode(false)
  $mdIconProvider
    .iconSet('icons', 'minecraft.js.svg')
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('deep-purple')
    .dark()
}
