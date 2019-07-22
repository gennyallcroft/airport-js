'use strict';

describe("Feature Test:", funcion() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("plane can land in an airport", function() {
    plane.land(airport)
    expect(airport.planes()).toContain(plane);
  });

});
