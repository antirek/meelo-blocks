
var meelo = require('meelo');

var simpleRow = function (settings) {

  var options = settings || {};

  var row = meelo.row({background: options.background || ''});
  
  var column = meelo.column({
    cssClass: 'twelve', 
    extendedCssClass: 'text-pad'
  });

  column.addContent('h3 ' + settings.title || '');

  row.addColumn(column);
  return row;

};

module.exports = simpleRow;