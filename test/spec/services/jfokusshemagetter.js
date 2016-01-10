'use strict';

describe('Service: jfokusShemaGetter', function () {

  // load the service's module
  beforeEach(module('jfokus2016ScheduleApp'));

  // instantiate service
  var jfokusShemaGetter;
  beforeEach(inject(function (_jfokusShemaGetter_) {
    jfokusShemaGetter = _jfokusShemaGetter_;
  }));

  it('should do something', function () {
    expect(!!jfokusShemaGetter).toBe(true);
  });

});
