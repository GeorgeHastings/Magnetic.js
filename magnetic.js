var Magnetic = {
  elements: [],
  getY: function(event) {
			var yPos = event.pageY - window.innerHeight/2;
			return yPos;
	},
  getX: function(event) {
    var xPos = event.pageX - window.innerWidth/2;
    return xPos;
  },
  positionElements: function(event) {
    var elements = Magnetic.elements[0];
    for (var i = 0; i < elements.length; i++) {
      var element = document.getElementById(Magnetic.elements[0][i].id);
      var adjusetedX = (elements[i].speed/15*Magnetic.getX(event));
      var adjusetedY = (elements[i].speed/15*Magnetic.getY(event));
      element.style.webkitTransform = "translate3d("+adjusetedX+"px,"+adjusetedY+"px,0)";
      element.style.MozTransform = "translate3d("+adjusetedX+"px,"+adjusetedY+"px,0)";
      element.style.OTransform = "translate3d("+adjusetedX+"px,"+adjusetedY+"px,0)";
      element.style.transform = "translate3d("+adjusetedX+"px,"+adjusetedY+"px,0)";
    }
  },
  bindEvents: function() {
      document.body.onmousemove = Magnetic.positionElements;
  },
  init: function() {
    this.elements.push(arguments);
    this.bindEvents();
  }
};
