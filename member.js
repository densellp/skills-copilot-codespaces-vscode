function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/members/skillsMember.html',
    scope: {
      member: '='
    }
  };
}