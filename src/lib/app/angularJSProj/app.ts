import * as angular from 'angular';
import titleModule from './components/titleComponent/titleComponent.ng';


export default () => (
  angular.module('appModule', [
    titleModule.name
  ])

  .run([
      '$rootScope',
      ($scope) =>  {
        console.log('AngularJS app loaded');
        $scope.title = 'hello world';
      }
    ]
  )
);
