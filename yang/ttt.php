<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>jQuery UI Tooltip - Custom content</title>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css" />
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
  <script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
  <link rel="stylesheet" href="/resources/demos/style.css" />
  <script>
  $(function() {
    $( document ).tooltip({
      items: " [tooltip-data]",
      content: function() {
        var element = $( this );
        if ( element.is( "[tooltip-data]" ) ) {
          var text = element.text();
          return element.attr("tooltip-data");
        }
      }
    });
  });
  </script>
</head>
<body>

        <div tooltip-data="<img src='tmp/img3.jpg' style='width:90px;'>">dwadwada</div>

</body>
</html>
~
~
~
