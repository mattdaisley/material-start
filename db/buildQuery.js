
var Query = function(table) {
	this.table = table;
	this.column = '*';
	this.statements = [];
	this.params = [];
};

Query.prototype.columns = function(column) {
	this.column = column || '*';
	return this;
};

Query.prototype.from = function(table) {
	this.table = table;
	return this;
};

Query.prototype.addWhere = function(column, operator, value) {
	if (arguments.length === 2) {
		value = operator;
		operator = '=';

		// If the value is null, and it's a two argument query,
		// we assume we're going for a `whereNull`.
		// if (value === null) {
		// 	return this.whereNull(column);
		// }
    }
    this.statements.push({
    	column,
    	operator
    });
    this.params.push(value);
    return this;
};

Query.prototype.select = Query.prototype.columns;
Query.prototype.where = Query.prototype.addWhere;
Query.prototype.and = Query.prototype.addWhere;

Query.prototype.buildWhere = function() {
	if ( !this.statements.length ) return '';
	var where = this.statements;
	// return Object.where(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&');
	return ' where ' + where.reduce(function(a,b){ a.push((b.column)+ ' ' + (b.operator)+' ?'); return a } ,[] ).join(' and ');
};

Query.prototype.toString = function() {
	return 'SELECT ' + this.column + ' FROM ' + this.table + this.buildWhere();
};

Query.prototype.getParams = function() {
	return this.params;
};

// var BuildQuery = {};
// BuildQuery.Query = Query;

module.exports = Query;

