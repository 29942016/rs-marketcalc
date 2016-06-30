//Class file for items

//Constructor
function item(jsonObject)
{
    this.name = jsonObject.item.name;
    this.description = jsonObject.item.description;
    this.id = jsonObject.item.id;
    this.members = jsonObject.members;
    this.thumb = jsonObject.item.icon;
    
    this.trendToday = [jsonObject.item.today.trend, jsonObject.item.today.price];
    this.trend30 = [jsonObject.item.day30.trend, jsonObject.item.day30.change];
    this.trend90 = [jsonObject.item.day90.trend, jsonObject.item.day90.change];
    this.trend180 = [jsonObject.item.day180.trend, jsonObject.item.day180.change];
}

//Class methods
item.prototype.getName = function()
{
    return this.name;
}
item.prototype.getDescription = function()
{
    return this.description;
}
item.prototype.getId = function()
{
    return this.id;
}
item.prototype.getThumb = function()
{
    return this.thumb;
}
item.prototype.getTodayTrend = function()
{
    return this.trendToday;
}
item.prototype.getTrend30 = function()
{
    return this.trend30;
}
item.prototype.getTrend90 = function()
{
    return this.trend90;
}
item.prototype.getTrend180 = function()
{
    return this.trend180;
}

