<html>
	<head>
             <link rel="stylesheet" type="text/css" href="style.css">
             <link href='https://fonts.googleapis.com/css?family=Droid+Sans+Mono' rel='stylesheet' type='text/css'>
		    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
            <script src="https://code.highcharts.com/stock/highstock.js"></script>
            <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
            
            <!-- Graph -->
            <script type="text/javascript" src="js/item.js"></script>
            <script type="text/javascript" src="js/graph.js"></script>
            <!-- Item Summary -->
        
    </head>

<body>
    <div id="header"></div>
        <div id="graphPanel">
            <div id="overlay"> 
             <div style="margin-top:25%;"><center><b>Please sit tight, <br> Retrieving the requested data...</b></center></div>
            </div>
        <div id="graphContainer"> 
            
    </div>
    <div style="margin-left:75px;float:left">
            <input type="text" placeholder="Item name or ID" name="item" id="item">
            <input type="button" onClick="refreshGraph(document.getElementById('item').value)" value="Search">
            
      
    </div>
            <div id="trendPanel" style="color:white;float:left;">
               <span class="trend">Today: <span class="trendText" id="trendToday">+0</span></span>
               <span class="trend">30-Day:  <span class="trendText" id="trend30"> +0</span>
               <span class="trend">90-Day: <span class="trendText" id="trend90"> +0</span>
               <span class="trend">180-Day:  <span class="trendText" id="trend180"> +0</span>
                
            </div>
    </div>
    
    <div id="itemPanel">
        
    
    </div>
    
    
</body>
</html>

