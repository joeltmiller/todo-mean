describe('Controller: MainController - Loading', function() {
  beforeEach(module('todo'));

  var cut; // short for Controller Under Test

  beforeEach(inject(function($controller, $httpBackend) {
    mockBackend = $httpBackend;
    mockBackend.expectGET('/todo')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);
    cut = $controller('MainController');
  }));

  it('should have test data available on load', function() {
    expect(cut.tasks).toBeUndefined();
    mockBackend.flush();
    expect(cut.tasks).toEqual([{_id:123, title:'test', 'desc':'hello'}]);
  });

  afterEach(function() {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });
})

describe('Controller: MainController - Post', function() {
  beforeEach(module('todo'));
  var cut; // short for Controller Under Test
  beforeEach(inject(function($controller, $httpBackend) {
    mockBackend = $httpBackend;
    mockBackend.expectGET('/todo')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);

    mockBackend.expectPOST('/todo', {"title":"test","desc":"data"})
      .respond([{_id:123, title:'test', 'desc':'hello'}]);

    mockBackend.expectGET('/todo')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);
    cut = $controller('MainController');
  }));

  it('should have test data available on load', function() {
    expect(cut.tasks).toBeUndefined();
    cut.task = {title: 'test', desc: 'data'};
    cut.addTask();
    mockBackend.flush();
    expect(cut.tasks).toEqual([{_id:123, title:'test', 'desc':'hello'}]);
  });

  afterEach(function() {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });
})

describe('Controller: MainController - Remove', function() {
  beforeEach(module('todo'));
  var cut; // short for Controller Under Test
  beforeEach(inject(function($controller, $httpBackend) {
    mockBackend = $httpBackend;
    mockBackend.expectGET('/todo')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);

    mockBackend.expectDelete('/todo/123')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);

    mockBackend.expectGET('/todo')
      .respond([{_id:123, title:'test', 'desc':'hello'}]);
    cut = $controller('MainController');
  }));

  // it('should have test data available on load', function() {
  //   expect(cut.tasks).toBeUndefined();
  //   cut.task = {title: 'test', desc: 'data'};
  //   cut.removeTask({_id: 123, title:'test', desc:'data'});
  //   mockBackend.flush();
  //   expect(cut.tasks).toEqual([{_id:123, title:'test', 'desc':'hello'}]);
  // });

  afterEach(function() {
    mockBackend.verifyNoOutstandingExpectation();
    mockBackend.verifyNoOutstandingRequest();
  });
})
