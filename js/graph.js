var months = new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov", "Dec");    
 

function getObject(userQuery)
{
    // Ajax, request item info JSON
    var jsonData = JSON.parse($.ajax
    ({
            url: "getItem.php?item="+userQuery,
            dataType: "json",
            async: false
    }).responseText);  
    
    return jsonData; 
}

function updateTrending(item)
{
    var trendElements = [document.getElementById("trendToday"),
                         document.getElementById("trend30"),
                         document.getElementById("trend90"),
                         document.getElementById("trend180")];
    
    
    trendElements[0].innerHTML = item.getTodayTrend()[1];
    if(item.getTodayTrend()[0] == "negative")
      trendElements[0].style.color = "red";
    else
        trendElements[0].style.color = "green";

    
    setTrend(trendElements[0], item.getTodayTrend());
    setTrend(trendElements[1], item.getTrend30());
    setTrend(trendElements[2], item.getTrend90());
    setTrend(trendElements[3], item.getTrend180());
}

function setTrend(ele, func)
{   
    
    ele.innerHTML = func[1];
    
    if(func[0] == "negative")
        ele.style.color = "red";
    else
        ele.style.color = "#33dd00";
   
}

function refreshGraph(userQuery){
  

    var itemObject = new item(getObject(userQuery));
    updateTrending(itemObject);
    
    $(function () {
            //Waiting handlers
            $( document ).ajaxStart(function() {
              console.log( "Triggered ajaxStart handler." );
              $("#overlay").show();
            });
            
            $( document ).ajaxStop(function() {
              console.log( "Triggered ajaxStop handler." );
              $("#overlay").hide();
            });
            
            // Ajax, request item info JSON
            var jsonData = JSON.parse($.ajax
            ({
                  url: "getData.php?item="+userQuery,
                  dataType: "json",
                  async: false
            }).responseText);    
            

            // Daily Data
            var dateArray = new Array();
            var priceArray = new Array();
            // 30-Day Average Data
            var avg_priceArray = new Array();
              
            $.each(jsonData.daily, function(k,v)
            {
                formattedDate = new Date(parseInt(k));
                formattedDate = (formattedDate.getDate() + '-' + months[formattedDate.getMonth()]);
                dateArray.push(formattedDate);
                
                priceArray.push(v);
            });
                
        
            $.each(jsonData.average, function(k, v)
            {
                avg_priceArray.push(v);           
            })
                

            $('#graphContainer').highcharts({
                title: {
                    text: itemObject.getName(),
                    x: -20, //center
                    style: 
                    {
                        fontFamily: 'monospace',
                        color: "#FFFFFF"
                    }
                },
                rangeSelector: {
	    	       selected: 1
	            },
                chart:{
                    renderTo:'container',
                    defaultSeriesType:'line',
                    zoomType:'x',
                    backgroundColor: '#000000',
                    polar: true,
                    style: 
                    {
                        fontFamily: 'monospace',
                        color: "#FFFFFF"
                    }
                },
                subtitle: {
                    text: 'Unit Price History Graph',
                    x: -20
                },
                xAxis: {
                    categories: dateArray,
                    min: 151,
                    max: 179,
                    tickInterval:7
                },
                yAxis:{
                    title: {
                        text: 'Unit Price',
                        startOnTick: false,
	    	            endOnTick: false,
                        style: 
                        {
                            color: '#FFFFFF', 
                            "fontWeight":"bold"
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 1
                    }]
                },
                scrollbar: {
                    enabled: true
                },
                tooltip: {
                    valueSuffix: 'gp'
                },
                credits: {
                    enabled: false,
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    floating: true,
                    //borderWidth: 1,
                    //borderColor: '#010101',
                    //borderRadius: 6,
                    x: 15,
                    y: -17,
                    title: {
                        style: {"fontWeight":"bold", color:"#FFFFFF"},
                        text: 'Click to alter graph.'
                    }
                },
                series: [{
                    name: 'Daily Average',
                    color: '#0027ff',
                    data: priceArray
                },{
                    name: '30 Day Average',
                    color: '#1c841c',
                    dashStyle: 'longdash',
                    data: avg_priceArray
                }]
            
            });
        });
};
