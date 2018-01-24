QUnit.module("Serialising a page", {
  setup: function() {
  }
});

QUnit.test("should make any image src urls absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<img src="/images/blah.png">';

  Printer.serializePage(function(string) {
    var r = RegExp('<img src="' + window.location.protocol + '//' + window.location.host + '/images/blah.png">')
    assert.ok(string.match(r));
  })
});

QUnit.test("should not alter images that are already absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<img src="http://example.com/images/blah.png">';

  Printer.serializePage(function(string) {
    var r = RegExp('<img src="http://example.com/images/blah.png">')
    assert.ok(string.match(r));
  })
});

QUnit.test("should make any script src urls absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<script src="/fixtures/relative.js">';
  Printer.serializePage(function(string) {
    var r = RegExp('<script src="' + window.location.protocol + '//' + window.location.host + '/fixtures/relative.js">');
    assert.ok(string.match(r));
  })
});

QUnit.test("should not alter scripts that are already absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<script src="http://example.com/javascripts/absolute.js">';

  Printer.serializePage(function(string) {
    var r = RegExp('<script src="http://example.com/javascripts/absolute.js">')
    assert.ok(string.match(r));
  })
});

QUnit.test("should make any stylesheet link href urls absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<link rel="stylesheet" href="/css/blah.css">';

  Printer.serializePage(function(string) {
    var r = RegExp('<link rel="stylesheet" href="' + window.location.protocol + '//' + window.location.host + '/css/blah.css">');
    assert.ok(string.match(r));
  })
});

QUnit.test("should not alter stylesheet link tags that are already absolute", function(assert) {
  $("#qunit-fixture")[0].innerHTML = '<link rel="stylesheet" href="http://example.com/css/blah.css">';

  Printer.serializePage(function(string) {
    var r = RegExp('<link rel="stylesheet" href="http://example.com/css/blah.css">');
    assert.ok(string.match(r));
  })
});
